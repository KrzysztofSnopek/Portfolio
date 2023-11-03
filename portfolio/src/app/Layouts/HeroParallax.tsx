import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.div
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10 w-96 h-96 rounded-full bg-yellow-200"
      >
        PARALLAX
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0 w-96 h-96 rounded-full bg-black"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
