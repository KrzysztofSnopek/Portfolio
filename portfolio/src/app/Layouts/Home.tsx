import React from "react";

export default function Home(): JSX.Element {
  return (
    <div className="p-8 bg-slate-300 bg-about-pattern h-screen flex flex-col items-center overflow-hidden">
      <h2 className="text-2xl">Home</h2>
      <p className="text-red-300">This is the content of Home</p>
    </div>
  );
}
