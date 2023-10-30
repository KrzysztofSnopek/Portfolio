"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLetters from "./Hero/AnimatedLetters";

export const WelcomePage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <motion.div className="h-screen w-full bg-[#241752] flex flex-col items-center justify-center">
        <h1 className="text-[#dee758] text-4xl font-bold uppercase">
          WelcomePage
        </h1>
        <motion.ul variants={container} initial="hidden" animate="show">
          <motion.li variants={item}>new li</motion.li>
          <motion.li variants={item}>second li</motion.li>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="w-[150px] h-[150px] bg-red-800"
                onClick={() => setIsVisible(!isVisible)}
                variants={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  staggerChildren: 1,
                  ease: "backOut",
                }}
              ></motion.div>
            )}
          </AnimatePresence>
        </motion.ul>
      </motion.div>
    </>
  );
};
