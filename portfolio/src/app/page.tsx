"use client";

import { useState } from "react";
import HeroTheme from "./Components/Hero/HeroTheme";
import About from "./Layouts/Hero";
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
import MovingStars from "./Layouts/MovingStars";

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
            animate={{ opacity: 1 }}
            whileTap={{ opacity: 0 }}
            transition={{ duration: 2, ease: "backOut" }}
            className="w-full h-screen"
          >
            <WelcomePage />
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "backIn" }}
            className="w-full"
          >
            <MovingStars />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
