import React from "react";
import CircleWithShadow from "../Components/Tile";

export default function About(): JSX.Element {
  const numTiles = 100;
  const tiles = [];

  for (let i = 0; i < numTiles; i++) {
    tiles.push(<CircleWithShadow key={`tile-${i}`} />);
  }

  return (
    <div className="bg-slate-600 h-screen overflow-hidden">
      <div className="tile-container flex-wrap flex ">{tiles}</div>
      <div>
        <CircleWithShadow />
      </div>
    </div>
  );
}
