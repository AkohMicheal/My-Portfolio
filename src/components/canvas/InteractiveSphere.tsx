'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export const InteractiveSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // Subtle rotation and mouse-pointer tracking
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, state.pointer.y * 0.4 + t * 0.15, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, state.pointer.x * 0.5 + t * 0.2, 0.05);
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh
        ref={meshRef}
        scale={hovered ? 1.6 : 1.45}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color={hovered ? "#059669" : "#10b981"}
          attach="material"
          distort={0.42}
          speed={2.2}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe outer aura */}
      <mesh scale={1.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#34d399"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  );
};

export default InteractiveSphere;
