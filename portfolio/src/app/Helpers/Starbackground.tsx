"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Starbackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 45;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#5338ac"
          size={0.003}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto fixed inset-0 pointer-events-none bg-primary">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Starbackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
