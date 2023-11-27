import classNames from "classnames";
import React, { useState } from "react";

export default function Tile(): JSX.Element {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={classNames(
        "container-card bg-secondary m-[1px] group [perspective:2000px] transition-all duration-1000 [transform-style:preserve-3d] rounded-lg",
        isFlipped ? "scale-down opacity-30" : "opacity-10"
      )}
      onMouseEnter={toggleFlip}
    >
      {isFlipped ? <div className=""></div> : <div></div>}
    </div>
  );
}
