import React, { useState } from "react";
import Skills from "@/app/Layouts/Skills";
import ProjectCard from "../Components/ProjectCard";
import { card1 } from "../Helpers/cardProps";
import About from "./About";
import ProjectAnimation from "../Components/SlideProjects/ProjectAnimation";
import Project1 from "../Components/SlideProjects/Project1";

type SelectedComponent = "Skills" | "About" | "Project1" | null;

export default function Projects(): JSX.Element {
  const [selectedComponent, setSelectedComponent] =
    useState<SelectedComponent>(null);
  const [animationStart, setAnimationStart] = useState<boolean>(false);
  const [disableButtons, setDisableButtons] = useState<boolean>(false);

  const handleCardClick = (component: SelectedComponent) => {
    if (selectedComponent === component) {
      setAnimationStart(false);
      setDisableButtons(true);

      setTimeout(() => {
        setSelectedComponent(null);
        setDisableButtons(false);
      }, 1500);
    } else if (selectedComponent === null) {
      setDisableButtons(true);
      setTimeout(() => {
        setDisableButtons(false);
      }, 1500);
      setSelectedComponent(component);
      setAnimationStart(true);
    } else if (selectedComponent !== component) {
      setAnimationStart(false);
      setDisableButtons(true);
      setTimeout(() => {
        setDisableButtons(false);
      }, 3000);
      setTimeout(() => {
        setSelectedComponent(component);
        setAnimationStart(true);
      }, 1500);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-2xl p-8">Projects</h2>
        <div className="flex z-40">
          <button
            className={`${disableButtons && "opacity-50"}`}
            onClick={() => handleCardClick("Skills")}
            disabled={disableButtons}
          >
            <ProjectCard cardData={card1} />
          </button>
          <button
            className={`${disableButtons && "opacity-50"}`}
            onClick={() => handleCardClick("About")}
            disabled={disableButtons}
          >
            <ProjectCard cardData={card1} />
          </button>
          <button
            className={`${disableButtons && "opacity-50"}`}
            onClick={() => handleCardClick("Project1")}
            disabled={disableButtons}
          >
            <ProjectCard cardData={card1} />
          </button>
          <button
            className={`${disableButtons && "opacity-50"}`}
            onClick={() => handleCardClick("About")}
            disabled={disableButtons}
          >
            <ProjectCard cardData={card1} />
          </button>
        </div>
      </div>
      <div className="h-screen flex">
        <ProjectAnimation isVisible={animationStart}>
          <div className="">
            {selectedComponent === "Skills" ? <Skills /> : null}
            {selectedComponent === "About" ? <About /> : null}
            {selectedComponent === "Project1" ? <Project1 /> : null}
          </div>
        </ProjectAnimation>
      </div>
    </div>
  );
}
