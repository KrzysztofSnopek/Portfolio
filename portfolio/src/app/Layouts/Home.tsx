import React from "react";
import Tile from "../Helpers/Tile";

export default function Home(): JSX.Element {
  return (
    <div className="p-8 bg-slate-600 h-screen flex flex-col items-center">
      <h2 className="text-2xl">Home</h2>
      <p className="text-red-300">This is the content of Home</p>
      <div>
        <Tile />
      </div>
    </div>
  );
}
