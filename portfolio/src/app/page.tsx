"use client";

import { useState } from "react";
import HeroTheme from "./Components/HeroTheme";
import About from "./Layouts/About";
import Contact from "./Layouts/Contact";
import Projects from "./Layouts/Projects";
import PhotoBlob from "./Components/PhotoBlob";
import Image from "next/image";
import Home from "./Layouts/Home";
import Resume from "./Layouts/Resume";
import Skills from "./Layouts/Skills";
import Project1 from "./Components/SlideProjects/Project1";

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const scrollToComponent = (component: string) => {
    setActiveComponent(component);
    const element = document.getElementById(component);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex relative">
      <div className="w-1/4 h-screen overflow-hidden z-30">
        <HeroTheme scrollToComponent={scrollToComponent} />
      </div>
      <div className="absolute top-1/2 left-[8vw] transform -translate-y-1/2 w-1/3 z-10">
        <PhotoBlob />
      </div>
      <div className="absolute top-1/2 left-[8vw] transform -translate-y-1/2 w-1/3 z-40">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="h-80 w-80 relative">
            <Image
              src="/Images/Hero.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="w-3/4 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-600">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div>
          <Project1 />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
