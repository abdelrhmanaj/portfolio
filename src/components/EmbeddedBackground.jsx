import React, { useState } from 'react';
import { Cpu, Server, Wifi, Zap, Database, Activity, Radio, HardDrive } from 'lucide-react';

const icons = [Cpu, Server, Wifi, Zap, Database, Activity, Radio, HardDrive];

const EmbeddedBackground = () => {
  const [nodes] = useState(() => {
    // Generate random nodes only on the client
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 30 + 30, // 30px to 60px
      opacity: Math.random() * 0.15 + 0.05,
      animationDuration: `${Math.random() * 15 + 10}s`,
      parallaxFactorX: (Math.random() - 0.5) * 0.08,
      parallaxFactorY: (Math.random() - 0.5) * 0.08,
      rotation: Math.random() * 360
    }));
  });

  return (
    <div className="embedded-background">
      <div className="mouse-glow"></div>
      
      {/* Circuit lines overlay */}
      <div className="circuit-overlay"></div>

      {nodes.map((node) => (
        <div
          key={node.id}
          className="embedded-node"
          style={{
            top: node.top,
            left: node.left,
            width: node.size,
            height: node.size,
            opacity: node.opacity,
            animationDuration: node.animationDuration,
            // Calculate parallax based on mouse position CSS variables set in App.jsx
            transform: `translate(calc(var(--mouse-x, 0px) * ${node.parallaxFactorX}), calc(var(--mouse-y, 0px) * ${node.parallaxFactorY})) rotate(${node.rotation}deg)`
          }}
        >
          <node.Icon size={node.size} color="var(--accent-1)" />
        </div>
      ))}
    </div>
  );
};

export default EmbeddedBackground;
