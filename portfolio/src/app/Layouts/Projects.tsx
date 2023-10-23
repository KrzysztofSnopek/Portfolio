import React, { useState } from "react";
import Project1 from "../Components/SlideProjects/ProjectAnimation";
import Skills from "@/app/Layouts/Skills";
import ProjectCard from "../Components/ProjectCard";
import { card1 } from "../Helpers/cardProps";
import About from "./About";

type SelectedComponent = "Skills" | "About" | null;

export default function Projects(): JSX.Element {
  const [startAnimation, setStartAnimation] = useState(false);
  const [selectedComponent, setSelectedComponent] =
    useState<SelectedComponent>(null);

  const handleCardClick = (component: SelectedComponent) => {
    setStartAnimation(!startAnimation);
    setSelectedComponent(component);
  };

  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      <h2 className="text-2xl p-8">Projects</h2>
      <div className="z-10" onClick={() => handleCardClick("Skills")}>
        <ProjectCard cardData={card1} />
      </div>
      <div className="z-10" onClick={() => handleCardClick("About")}>
        <ProjectCard cardData={card1} />
      </div>
      <Project1 isVisible={startAnimation}>
        <div className="w-full absolute left-0">
          {selectedComponent === "Skills" ? <Skills /> : null}
          {selectedComponent === "About" ? <About /> : null}
        </div>
      </Project1>
    </div>
  );
}
