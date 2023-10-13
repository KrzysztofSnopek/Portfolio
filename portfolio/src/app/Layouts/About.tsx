import React from "react";
import Tile from "../Helpers/Tile";

export default function About(): JSX.Element {
  const numTiles = 100; // Adjust the number of tiles as needed
  const tiles = [];

  for (let i = 0; i < numTiles; i++) {
    tiles.push(<Tile key={`tile-${i}`} />);
  }

  return (
    <div className="bg-slate-600 h-screen overflow-hidden">
      <div className="tile-container flex-wrap flex ">{tiles}</div>
      <div>
        <Tile />
      </div>
    </div>
  );
}
