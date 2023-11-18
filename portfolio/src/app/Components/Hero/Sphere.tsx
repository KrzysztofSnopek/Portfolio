import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

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
      <Sphere
        args={[1, 100, 200]}
        scale={[1.5 * aspectRatio, 1.5 * aspectRatio, 1.5]}
      >
        <MeshDistortMaterial
          color="#3b1aab"
          opacity={0.5}
          attach="material"
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
};

export default SphereComponent;
