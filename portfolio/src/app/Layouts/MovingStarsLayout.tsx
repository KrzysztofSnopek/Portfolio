import React from "react";
import MovingStarship from "./MovingStars";

const MovingStarsLayout = () => {
  return (
    <main>
      <div className="relative z-10 w-full overflow-x-clip">
        <MovingStarship />
      </div>
    </main>
  );
};

export default MovingStarsLayout;
