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
          className={`w-48 h-24 border-slate-700 relative overflow-hidden border-4 border-t-0 before:content-[''] before:absolute before:w-full before:h-full before:bottom-0 before:shadow-flip moon-shadow transition-all duration-1000 [transform-style:preserve-3d] ${
            isFlipped && "scale-down"
          } `}
        ></div>
      </div>
    </>
  );
}
