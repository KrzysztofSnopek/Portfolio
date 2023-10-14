import React from "react";
import Tile from "../Components/Tile";

export default function Projects(): JSX.Element {
  return (
    <div className="bg-slate-300 p-8 h-screen flex flex-col items-center">
      <h2 className="text-2xl">Projects</h2>
      <p>This is the content of Projects</p>

      <Tile />
    </div>
  );
}
