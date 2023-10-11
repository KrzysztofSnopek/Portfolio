import React from "react";
import Nav from "./Nav";
import AnimatedLetters from "./AnimatedLetters";
import generateDelays from "@/Helpers/generateDelays";
import Socials from "./Socials";

export interface HeroProps {
  scrollToComponent: (component: string) => void;
}

export default function Hero({ scrollToComponent }: HeroProps) {
  const welcomingText = "Hello Tailwind CSS";
  const splitText = welcomingText.split("");

  return (
    <div className="h-full bg-slate-800 text-white flex justify-center">
      <div className="flex absolute left-4 top-1/2 transform -translate-y-1/2">
        <Nav scrollToComponent={scrollToComponent} />
      </div>

      <div className="flex flex-col justify-center items-center relative z-10">
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
      <div className="flex absolute left-8 bottom-2 z-30">
        <Socials />
      </div>
    </div>
  );
}
