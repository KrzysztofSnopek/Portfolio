"use client";

import { useState } from "react";
import HeroTheme from "./Components/HeroTheme";
import About from "./Layouts/About";
import Contact from "./Layouts/Contact";
import Projects from "./Layouts/Projects";

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
    <div className="flex">
      <div className="w-1/3 h-screen overflow-hidden">
        <HeroTheme scrollToComponent={scrollToComponent} />
      </div>
      <div className="w-2/3 h-screen overflow-y-scroll">
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
