import React, { useState } from "react";
import FlipMove from "react-flip-move";

const FlippingTile: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-48 h-48"
      onMouseEnter={toggleFlip}
      onMouseLeave={toggleFlip}
    >
      <FlipMove
        typeName={null}
        duration={500}
        enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical"
      >
        {isFlipped ? (
          <div className="w-48 h-48 bg-black rounded-lg">
            <div className="h-24 w-48 relative overflow-hidden">
              <div className="bg-black h-full w-full rounded-t-lg"></div>
              <div className="bg-transparent h-full w-24 rounded-tl-full absolute bottom-0 right-0"></div>
            </div>
            <div className="w-48 h-24 relative">
              <div className="bg-black h-full w-full rounded-b-lg"></div>
              <div className="bg-transparent h-full w-24 rounded-bl-full absolute top-0 right-0"></div>
            </div>
          </div>
        ) : (
          <div
            className="w-48 h-48 bg-black rounded-lg"
            style={{
              backgroundImage:
                "url(https://example.com/your-background-image.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}
      </FlipMove>
    </div>
  );
};

export default FlippingTile;
