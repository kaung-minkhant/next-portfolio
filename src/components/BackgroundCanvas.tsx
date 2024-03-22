"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export default function BackgroundCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <Stars
          radius={80}
          depth={10}
          count={3000}
          factor={3}
          saturation={5}
          fade
          speed={4}
        />
      </Canvas>
    </div>
  );
}
