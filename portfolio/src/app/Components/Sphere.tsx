import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { PerspectiveCamera } from "three";

interface SphereComponentProps {
  canvasSize: { width: number; height: number };
}

const SphereComponent: React.FC<SphereComponentProps> = ({ canvasSize }) => {
  const cameraRef = useRef<any>();

  useEffect(() => {
    if (cameraRef.current) {
      const camera = cameraRef.current;
      camera.aspect = canvasSize.width / canvasSize.height;
      camera.updateProjectionMatrix();
    }
  }, [canvasSize]);

  const aspectRatio = canvasSize.width / canvasSize.height;

  return (
    <Canvas>
      <perspectiveCamera
        ref={cameraRef}
        position={[0, 0, 5]}
        fov={25}
        aspect={aspectRatio}
        near={0.1}
        far={1000}
      />
      <ambientLight intensity={6} />
      {/* <directionalLight position={[10, 10, 5]} intensity={1} /> */}
      <Sphere args={[1, 100, 200]} scale={[aspectRatio, aspectRatio, 1]}>
        <MeshDistortMaterial
          color="#1f2733"
          attach="material"
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
};

export default SphereComponent;
