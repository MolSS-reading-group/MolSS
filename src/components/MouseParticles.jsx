import React, { useEffect, useRef } from 'react';

export default function MouseParticles() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let particles = [];
        const MAX_PARTICLES = 60;
        const FOV = 200; // Perspective depth field

        const offscreenCanvas = document.createElement('canvas');
        offscreenCanvas.width = 80;
        offscreenCanvas.height = 80;
        const offCtx = offscreenCanvas.getContext('2d');

        // 3D rotation matrix application
        const rotate3D = (p, rx, ry, rz) => {
            // Rotate around X-axis
            let y1 = p.y * Math.cos(rx) - p.z * Math.sin(rx);
            let z1 = p.y * Math.sin(rx) + p.z * Math.cos(rx);
            // Rotate around Y-axis
            let x2 = p.x * Math.cos(ry) + z1 * Math.sin(ry);
            let z2 = -p.x * Math.sin(ry) + z1 * Math.cos(ry);
            // Rotate around Z-axis
            let x3 = x2 * Math.cos(rz) - y1 * Math.sin(rz);
            let y3 = x2 * Math.sin(rz) + y1 * Math.cos(rz);
            return { x: x3, y: y3, z: z2 };
        };

        const drawMolecule3D = (ctx, px, py, rx, ry, rz, scale, alpha) => {
            // Base geometry of an H2O molecule centered at origin
            const atoms = [
                { id: 'O', x: 0, y: 0, z: 0, r: 10, color: '#3279F9' },
                { id: 'H1', x: -10, y: -8, z: 0, r: 5, color: '#FFFFFF' },
                { id: 'H2', x: 10, y: -8, z: 0, r: 5, color: '#FFFFFF' }
            ];

            // Apply 3D rotation and perspective projection
            let projectedAtoms = atoms.map(atom => {
                let rot = rotate3D(atom, rx, ry, rz);
                let pScale = FOV / (FOV + rot.z);
                return {
                    ...rot,
                    id: atom.id,
                    screenX: px + rot.x * pScale * scale * 1.5,
                    screenY: py + rot.y * pScale * scale * 1.5,
                    drawnR: atom.r * pScale * scale * 1.5,
                    color: atom.color,
                    z: rot.z
                };
            });

            // 1. Sort atoms by depth (Z) for Painter's Algorithm (draw furthest first)
            projectedAtoms.sort((a, b) => b.z - a.z);

            // 2. Draw opaque atoms to offscreen buffer so they perfectly occlude each other internally
            offCtx.clearRect(0, 0, 80, 80);
            projectedAtoms.forEach(atom => {
                offCtx.beginPath();
                // Map from global canvas coordinates to the 80x80 local offscreen canvas (centered at 40,40)
                let localX = 40 + (atom.screenX - px);
                let localY = 40 + (atom.screenY - py);
                offCtx.arc(localX, localY, Math.max(0.1, atom.drawnR), 0, Math.PI * 2);
                offCtx.fillStyle = atom.color;
                offCtx.fill();
            });

            // 3. Draw the fully composited opaque molecule onto the main canvas with global alpha (for fading)
            ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
            ctx.drawImage(offscreenCanvas, px - 40, py - 40);
        };

        let animationId;
        let mouse = { x: -100, y: -100, vx: 0, vy: 0 };
        let lastMouse = { x: -100, y: -100 };
        let distanceAccumulator = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = particles.length - 1; i >= 0; i--) {
                let p = particles[i];

                // Apply fluid friction
                p.vx *= 0.94;
                p.vy *= 0.94;
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.010;

                // Update 3D Euler angles for tumbling
                p.rx += p.drx;
                p.ry += p.dry;
                p.rz += p.drz;

                drawMolecule3D(ctx, p.x, p.y, p.rx, p.ry, p.rz, p.size, p.life);

                if (p.life <= 0) particles.splice(i, 1);
            }

            animationId = requestAnimationFrame(render);
        };

        render();

        const handleMouseMove = (e) => {
            // First time initialization logic to prevent explosion on initial entry
            if (lastMouse.x === -100) {
                lastMouse.x = e.clientX;
                lastMouse.y = e.clientY;
                return;
            }

            mouse.vx = e.clientX - lastMouse.x;
            mouse.vy = e.clientY - lastMouse.y;
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            let speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
            distanceAccumulator += speed;

            // Spawn exactly 1 sequence of particles every 60 pixels of physical mouse movement
            if (distanceAccumulator > 40 && particles.length < MAX_PARTICLES) {
                distanceAccumulator = 0;
                let numSpawn = 1;

                for (let i = 0; i < numSpawn; i++) {
                    let baseAngle = Math.atan2(mouse.vy, mouse.vx);
                    let angleOffset = (Math.random() - 0.5) * 2.0;
                    let ejectSpeed = Math.random() * 5 + 2;

                    // Rotational speeds massively slowed down for elegant floating
                    let speedScale = Math.min(1.0, speed / 50);
                    let tumbleSpeed = (Math.random() * 0.02 + 0.01) + (speedScale * 0.03);

                    // Start particles further away from the exact cursor point
                    let spawnRadius = 45 + Math.random() * 25;

                    particles.push({
                        x: mouse.x + Math.cos(baseAngle + angleOffset) * spawnRadius,
                        y: mouse.y + Math.sin(baseAngle + angleOffset) * spawnRadius,
                        vx: mouse.vx * 0.15 + Math.cos(baseAngle + angleOffset) * ejectSpeed,
                        vy: mouse.vy * 0.15 + Math.sin(baseAngle + angleOffset) * ejectSpeed,
                        life: 1.0 + Math.random() * 0.5,
                        size: Math.random() * 0.4 + 0.6,

                        // Initial 3D orientation
                        rx: Math.random() * Math.PI * 2,
                        ry: Math.random() * Math.PI * 2,
                        rz: Math.random() * Math.PI * 2,

                        // 3D tumbling velocities
                        drx: (Math.random() - 0.5) * tumbleSpeed,
                        dry: (Math.random() - 0.5) * tumbleSpeed,
                        drz: (Math.random() - 0.5) * tumbleSpeed
                    });
                }
            }

            lastMouse.x = mouse.x;
            lastMouse.y = mouse.y;
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 9999,
                filter: 'drop-shadow(0 0 10px rgba(50, 121, 249, 0.4))'
            }}
        />
    );
}
