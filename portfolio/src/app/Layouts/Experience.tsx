import { motion, useAnimate } from "framer-motion";
import React from "react";

export default function Experience() {
  const [scope, animate] = useAnimate();
  const handleAnimation = () => {
    animate("#exp-1", { y: 0, opacity: 1 }, { duration: 2 });
    animate("#exp-2", { y: 0, opacity: 1 }, { duration: 2, delay: 0.5 });
    animate("#exp-3", { y: 0, opacity: 1 }, { duration: 2, delay: 1 });
  };

  return (
    <div onMouseEnter={handleAnimation} ref={scope}>
      <motion.div
        className="w-full relative inline-block py-2 my-4 group"
        id="exp-1"
        initial={{ opacity: 0, y: -200 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-grayaccent to-accent group-hover:from-slate-100 group-hover:via-lightpurpleaccent group-hover:to-purpleaccent opacity-70 group-hover:outline group-hover:outline-2 group-hover:outline-secondary rounded-lg transition-colors duration-700"></div>
        <div className="py-2 mx-2 text-sm font-semibold text-justify uppercase relative z-10">
          <div className="flex justify-between">
            <p className="p-2 text-lg">Self-directed learning</p>
            <p className="p-2 text-lg">07.2022 - Present</p>
          </div>
          <ul className="font-medium list-disc pl-6">
            <li>Mentored by a senior frontend developer</li>
            <li>Self-Study Projects</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="w-full relative inline-block py-2 my-4 group"
        id="exp-2"
        initial={{ opacity: 0, y: -200 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-grayaccent to-accent group-hover:from-slate-100 group-hover:via-lightpurpleaccent group-hover:to-purpleaccent opacity-70 group-hover:outline group-hover:outline-2 group-hover:outline-secondary rounded-lg transition-colors duration-700"></div>
        <div className="py-2 mx-2 text-sm font-semibold text-justify uppercase relative z-10">
          <div className="flex justify-between">
            <p className="p-2 text-lg">VogelBahn Sp. z o.o. sp. k.</p>
            <p className="p-2 text-lg">07.2019 - 06.2022</p>
          </div>
          <p className="pl-2">Road designer assistant</p>
          <ul className="font-medium list-disc pl-6">
            <li>
              Working with clients and city governments to define and finalize
              projects
            </li>
            <li>
              Leading a designer team - project of an over 5 km long tramline in
              Sosnowiec, valued at over 80 million PLN
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="w-full relative inline-block py-2 my-4 group"
        id="exp-3"
        initial={{ opacity: 0, y: -200 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-grayaccent to-accent group-hover:from-slate-100 group-hover:via-lightpurpleaccent group-hover:to-purpleaccent opacity-70 group-hover:outline group-hover:outline-2 group-hover:outline-secondary rounded-lg transition-colors duration-700"></div>
        <div className="py-2 mx-2 text-sm font-semibold text-justify uppercase relative z-10">
          <div className="flex justify-between">
            <p className="p-2 text-lg">Silesian University of Technology</p>
            <p className="p-2 text-lg">10.2014 - 05.2019</p>
          </div>
          <p className="pl-2">Master of Science in Civil Engineering</p>
        </div>
      </motion.div>
    </div>
  );
}
