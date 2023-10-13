import React, { useState } from "react";

export default function Tile(): JSX.Element {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="group [perspective:2000px]" onMouseEnter={toggleFlip}>
        <div
          className={`w-48 h-24 border-slate-700 relative overflow-hidden border-8 before:content-[''] before:absolute before:w-full before:h-full before:bottom-0 before:shadow-flip moon-shadow transition-all duration-500 [transform-style:preserve-3d] ${
            isFlipped && "[transform:rotateX(180deg)]"
          }`}
        ></div>
      </div>
    </>
  );
}
