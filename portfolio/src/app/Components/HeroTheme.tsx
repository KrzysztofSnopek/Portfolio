import React from "react";
import Nav from "./Nav";
import AnimatedLetters from "./AnimatedLetters";
import generateDelays from "@/Helpers/generateDelays";

export interface HeroProps {
  scrollToComponent: (component: string) => void;
}

export default function Hero({ scrollToComponent }: HeroProps) {
  const welcomingText = "Hello Tailwind CSS";
  const splitText = welcomingText.split("");

  return (
    <div className="bg-slate-800 h-full text-white flex flex-col justify-center items-center relative z-10">
      <h1 className="text-3xl mb-4">Hero Theme</h1>

      <div className="absolute left-4 flex">
        <Nav scrollToComponent={scrollToComponent} />
      </div>

      <div className="flex items-center justify-center min-h-screen flex-col">
        <div className="text-4xl z-20 text-green-300">
          <AnimatedLetters
            letterClass="animate-wave"
            splitText={splitText}
            delays={[0.1]}
          />
        </div>
        <div className="text-4xl z-20 text-green-300">
          <AnimatedLetters
            letterClass="animate-wave-infinite"
            splitText={splitText}
            delays={generateDelays(splitText.length, 0.1, 0.1)}
          />
        </div>
      </div>
    </div>
  );
}
