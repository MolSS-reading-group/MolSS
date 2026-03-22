import React, { useEffect, useRef } from 'react';

export default function AnimatedLogo({ size = 32 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Use a larger internal rendering resolution to prevent nodes from clipping 
    // the canvas boundaries when they scale up in 3D perspective
    const renderSize = 80;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = renderSize * dpr;
    canvas.height = renderSize * dpr;
    ctx.scale(dpr, dpr);

    // Coordinate system: Center of molecule is 0,0.
    const FOV = 100; // Perspective scalar

    // The 5 nodes of the "M" molecular framework (refined typographic balance)
    const atoms = [
      { id: 0, x: -18, y: 12,  z: 0, r: 4 },
      { id: 1, x: -9,  y: -12, z: 0, r: 4 },
      { id: 2, x: 0,   y: 6,   z: 0, r: 5 }, // Center node acts as a slightly larger focal anchor
      { id: 3, x: 9,   y: -12, z: 0, r: 4 },
      { id: 4, x: 18,  y: 12,  z: 0, r: 4 }
    ];

    // Connectivity
    const bonds = [
      [0, 1], [1, 2], [2, 3], [3, 4]
    ];

    let time = 0;
    let animationId;

    const render = () => {
      ctx.clearRect(0, 0, renderSize, renderSize);
      
      let centerX = renderSize / 2;
      let centerY = renderSize / 2;

      // Make the atoms pulse toward and away from the screen using an oscillating Z-depth wave
      let projectedAtoms = atoms.map(atom => {
        // Torsion physics: Phase is driven by the product of X and Y.
        // This ensures the top-left and top-right peaks move in opposite directions,
        // producing an organic, asymmetric twist rather than a rigid structural spin.
        let dynamicZ = Math.sin(time + (atom.x * atom.y) * 0.012) * FOV * 0.15;
        
        // Standard perspective division
        let scale = FOV / (FOV + dynamicZ);
        return {
          id: atom.id,
          x: centerX + atom.x * scale,
          y: centerY + atom.y * scale,
          r: atom.r * scale,
          z: dynamicZ
        };
      });

      // 1. Draw Bonds (solid flawless white, but thinner for delicate, precise AI branding)
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2.2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      bonds.forEach(bond => {
        let a1 = projectedAtoms.find(a => a.id === bond[0]);
        let a2 = projectedAtoms.find(a => a.id === bond[1]);
        ctx.moveTo(a1.x, a1.y);
        ctx.lineTo(a2.x, a2.y);
      });
      ctx.stroke();

      // 2. Painters Algorithm Sorting (draw furthest Z first, where +Z is far)
      projectedAtoms.sort((a, b) => b.z - a.z);

      // 3. Draw Atoms (Luminous 3D Pearls instead of flat white circles)
      projectedAtoms.forEach(atom => {
        ctx.beginPath();
        // ensure radius is never negative
        let drawnR = Math.max(0.1, atom.r);
        ctx.arc(atom.x, atom.y, drawnR, 0, Math.PI * 2);
        
        // Create an internal 3D spherical gradient for the node
        let grad = ctx.createRadialGradient(
          atom.x - drawnR * 0.3, atom.y - drawnR * 0.3, drawnR * 0.1, 
          atom.x, atom.y, drawnR
        );
        grad.addColorStop(0, '#FFFFFF'); // Hot white highlight
        grad.addColorStop(0.7, '#E8F0FE'); // Soft frosty core
        grad.addColorStop(1, '#A8C7FA'); // Sleek blue edge definition
        
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Advance time faster as requested, creating a more energetic breathing effect
      time += 0.04; 
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [size]);

  // Dual-layer drop-shadow: Hot white inner core, sprawling Google Blue outer corona
  return (
    <div style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <canvas 
        ref={canvasRef} 
        style={{ width: size, height: size, filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.9)) drop-shadow(0 0 8px rgba(50, 121, 249, 0.7))' }} 
      />
    </div>
  );
}
