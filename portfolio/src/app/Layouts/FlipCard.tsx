import React from "react";
import ResumeDownloadButton from "./ResumeDownloadButton";
import CircleWithShadow from "../Components/Tile";

export default function FlipCard() {
  const numTiles = 80;
  const tiles = [];

  for (let i = 0; i < numTiles; i++) {
    tiles.push(<CircleWithShadow key={`tile-${i}`} />);
  }
  return (
    <div className="m-auto ">
      <div className="h-[70%] w-full relative">
        <div className="grid grid-cols-8 grid-rows-10 relative">
          {tiles}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[70%] z-10">
            <ResumeDownloadButton buttonText="download" />
          </div>
        </div>
      </div>
    </div>
  );
}
