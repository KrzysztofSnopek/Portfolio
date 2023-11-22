import { motion } from "framer-motion";
import React from "react";

export default function Experience() {
  return (
    <div>
      <motion.div
        className="w-full relative inline-block py-2 my-4 group"
        id="par-1"
        initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-grayaccent to-accent group-hover:from-slate-100 group-hover:via-lightpurpleaccent group-hover:to-purpleaccent opacity-70 group-hover:outline group-hover:outline-2 group-hover:outline-secondary rounded-lg transition-colors duration-700"></div>
        <div className="py-2 mx-2 text-sm font-semibold text-justify uppercase relative z-10">
          <div className="flex justify-between">
            <p className="p-2 text-lg">data</p>
            <p className="p-2 text-lg">gdzie</p>
          </div>
          <p className="pl-2 font-medium">co robilem</p>
        </div>
      </motion.div>
    </div>
  );
}
