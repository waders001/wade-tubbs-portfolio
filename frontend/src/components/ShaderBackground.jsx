import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedPlane = () => {
  const meshRef = useRef();

  const uniforms = {
    uTime: { value: 0 },
  };

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} scale={[10, 10, 1]}>
      <planeGeometry args={[2, 2, 64, 64]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(pos.x * 10.0 + uTime) * 0.1;
            pos.z += sin(pos.y * 10.0 + uTime) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          void main() {
            vec3 color = vec3(0.1 + 0.5 * vUv.x, 0.2 + 0.5 * vUv.y, 1.0);
            gl_FragColor = vec4(color, 0.25);
          }
        `}
        transparent
      />
    </mesh>
  );
};

const ShaderBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <AnimatedPlane />
      </Canvas>
    </div>
  );
};

export default ShaderBackground;
