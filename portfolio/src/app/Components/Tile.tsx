import React, { useState } from "react";

export default function Tile(): JSX.Element {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`container-card outline-2 outline outline-slate-400 m-[1px] group [perspective:2000px] transition-all duration-1000 [transform-style:preserve-3d] ${
        isFlipped && "scale-down"
      } `}
      onMouseEnter={toggleFlip}
    >
      <div className="circle-container">
        <div className="circle"></div>
      </div>
    </div>
  );
}
