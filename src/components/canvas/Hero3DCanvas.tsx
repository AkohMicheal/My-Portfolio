'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingParticles from './FloatingParticles';
import InteractiveSphere from './InteractiveSphere';

interface Hero3DCanvasProps {
  showControls?: boolean;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ showControls = false }) => {
  return (
    <div className="w-full h-full min-h-[350px] sm:min-h-[420px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#10b981" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#059669" />
        <pointLight position={[0, 0, 2]} intensity={1.2} color="#34d399" />

        <Suspense fallback={null}>
          <FloatingParticles count={1000} color="#10b981" />
          <InteractiveSphere />
        </Suspense>

        {showControls && (
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.3}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Hero3DCanvas;
