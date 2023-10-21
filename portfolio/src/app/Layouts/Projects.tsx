import React, { useState } from "react";
import Project1 from "../Components/SlideProjects/Project1";
import Project2 from "../Components/SlideProjects/Project2";
import Skills from "@/app/Layouts/Skills";

export default function Projects(): JSX.Element {
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      <h2 className="text-2xl p-8">Projects</h2>
      <button
        className="z-10"
        onClick={() => setStartAnimation(!startAnimation)}
      >
        Toggle Animation
      </button>
      <Project1 isVisible={startAnimation}>
        <div className="w-full absolute left-0">
          <Skills />
        </div>
      </Project1>
    </div>
  );
}
