import React, { useState } from "react";
import Tile from "./Tile";

const FlippingTile: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      onMouseEnter={toggleFlip}
    >
      <div className="group h-96 w-80 [perspective:2000px]">
        <div className="h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* <div className="h-full w-full rounded-xl bg-black/80 px-12 [transform:rotateY(180deg)] [backface-visibility:hidden]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default FlippingTile;
