"use client";

import { useState } from "react";
import HeroTheme from "./Components/Hero/HeroTheme";
import About from "./Layouts/About";
import Contact from "./Layouts/Contact";
import Projects from "./Layouts/Projects";
import PhotoBlob from "./Components/Hero/PhotoBlob";
import Image from "next/image";
import Home from "./Layouts/Home";
import Resume from "./Layouts/Resume";
import Skills from "./Layouts/Skills";
import Project1 from "./Components/SlideProjects/Project1";
import { WelcomePage } from "./Components/WelcomePage";
import { motion, AnimatePresence, useTransform } from "framer-motion";

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [isWelcoming, setIsWelcoming] = useState<boolean>(true);

  const scrollToComponent = (component: string) => {
    setActiveComponent(component);
    const element = document.getElementById(component);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHideWelcome = () => {
    setIsWelcoming(false);
  };

  return (
    <>
      {isWelcoming ? (
        <AnimatePresence>
          <motion.div
            onClick={handleHideWelcome}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ opacity: 0 }}
            transition={{ duration: 2, ease: "backOut" }}
          >
            <WelcomePage />
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="flex relative"
          >
            <div className="w-1/4 h-screen overflow-hidden z-30">
              <HeroTheme scrollToComponent={scrollToComponent} />
            </div>
            <div className="absolute top-1/2 left-[8vw] transform -translate-y-1/2 w-[500px] z-10">
              <PhotoBlob />
            </div>
            <div className="absolute top-1/2 left-[8vw] transform -translate-y-1/2 w-1/3 z-40">
              <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                <div
                  id="here"
                  className="h-[360px] w-[360px] bg-slate-800 flex justify-center items-center rounded-full"
                >
                  <div className="h-72 w-72 relative">
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
            </div>
            <div className="w-[10vw] h-screen bg-primary"></div>
            <div className="w-[65vw] h-screen bg-primary overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-600">
              <div id="home" className="py-24">
                <Home />
              </div>
              <div id="about" className="py-24">
                <About />
              </div>
              <div id="projects" className="py-24">
                <Projects />
              </div>
              <div>
                <Project1 />
              </div>
              <div id="resume" className="py-24">
                <Resume />
              </div>
              <div id="skills" className="py-24">
                <Skills />
              </div>
              <div id="contact" className="py-24">
                <Contact />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
