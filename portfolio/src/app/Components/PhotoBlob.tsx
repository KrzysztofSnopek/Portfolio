import React, { useEffect, useState } from "react";
import SphereComponent from "./Sphere";

export default function PhotoBlob() {
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-[270px] h-[270px] opacity-60">
      <SphereComponent canvasSize={canvasSize} />
    </div>
  );
}
