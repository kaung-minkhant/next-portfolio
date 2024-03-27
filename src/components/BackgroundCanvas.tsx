"use client";
import useScreenSizes from "@/hooks/useScreenSizes";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export default function BackgroundCanvas() {
  const {smallerThanSM} = useScreenSizes()
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Stars
          radius={30}
          depth={10}
          count={smallerThanSM ? 10000 : 5000}
          factor={3}
          saturation={5}
          fade
          speed={4}
        />
      </Canvas>
    </div>
  );
}
