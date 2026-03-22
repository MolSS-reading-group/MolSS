import React from 'react';
import { motion } from 'framer-motion';

// Helper component for molecular nodes (atoms)
const Node = ({ cx, cy }) => (
  <circle cx={cx} cy={cy} r="4" fill="currentColor" opacity="0.8" />
);

// Helper component for a double bond line
const DoubleBond = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.6" />
);

// Mathematically perfect Benzene Ring (Radius = 40)
const BenzeneRing = ({ size, style, strokeWidth }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {/* Outer Hexagon */}
    <polygon points="50,10 84.6,30 84.6,70 50,90 15.4,70 15.4,30" />
    {/* Inner Double Bonds */}
    <DoubleBond x1="25" y1="36.5" x2="25" y2="63.5" />
    <DoubleBond x1="46" y1="78" x2="69" y2="64.5" />
    <DoubleBond x1="69" y1="35.5" x2="46" y2="22" />
    {/* Nodes */}
    <Node cx="50" cy="10" />
    <Node cx="84.6" cy="30" />
    <Node cx="84.6" cy="70" />
    <Node cx="50" cy="90" />
    <Node cx="15.4" cy="70" />
    <Node cx="15.4" cy="30" />
  </svg>
);

// Bicyclic Ring (Naphthalene)
const BicyclicRing = ({ size, style, strokeWidth }) => (
  <svg width={size} height={size} viewBox="0 0 140 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {/* Left Ring */}
    <polygon points="40,10 74.6,30 74.6,70 40,90 5.4,70 5.4,30" />
    {/* Right Ring */}
    <polygon points="74.6,30 109.2,10 133.8,30 133.8,70 109.2,90 74.6,70" />
    {/* Aromatic Circles */}
    <circle cx="40" cy="50" r="20" stroke="currentColor" strokeDasharray="6 6" strokeWidth={strokeWidth} opacity="0.6" />
    <circle cx="104" cy="50" r="20" stroke="currentColor" strokeDasharray="6 6" strokeWidth={strokeWidth} opacity="0.6" />
    {/* Nodes */}
    <Node cx="40" cy="10" />
    <Node cx="74.6" cy="30" />
    <Node cx="74.6" cy="70" />
    <Node cx="40" cy="90" />
    <Node cx="5.4" cy="70" />
    <Node cx="5.4" cy="30" />
    <Node cx="109.2" cy="10" />
    <Node cx="133.8" cy="30" />
    <Node cx="133.8" cy="70" />
    <Node cx="109.2" cy="90" />
  </svg>
);

// Complex Aliphatic / Steroid-like abstraction
const ComplexAliphatic = ({ size, style, strokeWidth }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <polyline points="20,100 40,80 70,80 90,50 70,20" />
    <polyline points="40,80 20,50 40,20 70,20" />
    <polyline points="90,50 110,65 110,95 90,110 70,80" />
    <line x1="110" y1="65" x2="130" y2="50" />
    <line x1="20" y1="50" x2="10" y2="40" />
    
    <Node cx="20" cy="100" />
    <Node cx="40" cy="80" />
    <Node cx="70" cy="80" />
    <Node cx="90" cy="50" />
    <Node cx="70" cy="20" />
    <Node cx="20" cy="50" />
    <Node cx="40" cy="20" />
    <Node cx="110" cy="65" />
    <Node cx="110" cy="95" />
    <Node cx="90" cy="110" />
  </svg>
);

// Chemical Grid / Graphene abstraction
const GrapheneHex = ({ size, style, strokeWidth }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" />
    <line x1="50" y1="20" x2="50" y2="5" />
    <line x1="76" y1="35" x2="95" y2="25" />
    <line x1="76" y1="65" x2="95" y2="75" />
    <line x1="50" y1="80" x2="50" y2="95" />
    <line x1="24" y1="65" x2="5" y2="75" />
    <line x1="24" y1="35" x2="5" y2="25" />
    
    <Node cx="50" cy="20" />
    <Node cx="76" cy="35" />
    <Node cx="76" cy="65" />
    <Node cx="50" cy="80" />
    <Node cx="24" cy="65" />
    <Node cx="24" cy="35" />
  </svg>
);


const MOLECULES = [
  { id: 1, Icon: BenzeneRing, size: 120, x: '8%', y: '12%', duration: 40, delay: 0 },
  { id: 2, Icon: BicyclicRing, size: 160, x: '82%', y: '15%', duration: 55, delay: 2 },
  { id: 3, Icon: ComplexAliphatic, size: 130, x: '70%', y: '65%', duration: 48, delay: 5 },
  { id: 4, Icon: GrapheneHex, size: 110, x: '12%', y: '75%', duration: 45, delay: 1 },
  { id: 5, Icon: BenzeneRing, size: 80, x: '55%', y: '40%', duration: 35, delay: 3 },
  { id: 6, Icon: BenzeneRing, size: 90, x: '85%', y: '45%', duration: 38, delay: 7 },
  { id: 7, Icon: BicyclicRing, size: 140, x: '25%', y: '30%', duration: 50, delay: 4 },
  { id: 8, Icon: ComplexAliphatic, size: 120, x: '45%', y: '82%', duration: 52, delay: 2 },
  { id: 9, Icon: GrapheneHex, size: 90, x: '65%', y: '20%', duration: 42, delay: 6 },
  { id: 10, Icon: BenzeneRing, size: 70, x: '35%', y: '60%', duration: 40, delay: 1 },
];

export default function BackgroundMolecules() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
      {MOLECULES.map((mol) => (
        <motion.div
          key={mol.id}
          style={{
            position: 'absolute',
            left: mol.x,
            top: mol.y,
            // Use an elegant, slightly luminous color for the vectors
            color: 'rgba(165, 180, 252, 0.08)',
          }}
          initial={{ rotate: 0, y: 0, x: 0 }}
          animate={{
            rotate: [0, 90, -90, 0],
            y: [0, -60, 60, 0],
            x: [0, 50, -50, 0],
          }}
          transition={{
            duration: mol.duration,
            repeat: Infinity,
            ease: "linear",
            delay: mol.delay
          }}
        >
          <mol.Icon 
            size={mol.size} 
            strokeWidth={1.5} 
            // Add a soft drop shadow to make the nodes and bonds glow
            style={{ filter: 'drop-shadow(0 0 10px rgba(129, 140, 248, 0.4))' }}
          />
        </motion.div>
      ))}
      
      {/* Decorative gradient orbs for a science feel */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '5%',
          left: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(3xl)'
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(3xl)'
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  );
}
