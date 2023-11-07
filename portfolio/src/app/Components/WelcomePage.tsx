"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLetters from "./Hero/AnimatedLetters";
import generateDelays from "../Helpers/generateDelays";

export const WelcomePage = () => {
  // const [isVisible, setIsVisible] = useState<boolean>(true);
  const headerText = "KRZYSZTOF";
  const splitHeaderText = headerText.split("");
  const headerText2 = "SNOPEK";
  const splitHeaderText2 = headerText2.split("");

  const parText = "Future Web Developer";
  const splitParText = parText.split("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <motion.div className="h-screen w-full bg-[#130c2b] flex flex-col items-center justify-center cursor-pointer z-20">
        <motion.div
          className="flex flex-col items-start justify-start mt-16 z-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h1>
            <motion.div className="text-5xl tracking-[.26em]" variants={item}>
              <AnimatedLetters
                letterClass="animate-wave"
                splitText={splitHeaderText}
                delays={[0.1]}
              />
            </motion.div>
            <motion.div className="text-8xl" variants={item}>
              <AnimatedLetters
                letterClass="animate-wave"
                splitText={splitHeaderText2}
                delays={[0.1]}
              />
            </motion.div>
          </h1>

          <motion.p className="text-4xl" variants={item}>
            <AnimatedLetters
              letterClass="animate-wave-infinite"
              splitText={splitParText}
              delays={generateDelays(splitParText.length, 0.1, 0.1)}
            />
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
};
