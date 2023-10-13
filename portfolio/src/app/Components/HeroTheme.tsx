import React from "react";
import Nav from "./Nav";
import AnimatedLetters from "./AnimatedLetters";
import generateDelays from "@/app/Helpers/generateDelays";
import Socials from "./Socials";

export interface HeroProps {
  scrollToComponent: (component: string) => void;
}

export default function Hero({ scrollToComponent }: HeroProps) {
  const headerText = "KRZYSZTOF";
  const splitHeaderText = headerText.split("");
  const headerText2 = "SNOPEK";
  const splitHeaderText2 = headerText2.split("");

  const parText = "Future Web Developer";
  const splitParText = parText.split("");

  return (
    <div className="h-full bg-slate-800 text-white flex justify-center">
      <div className="flex absolute right-8 top-1/2 transform -translate-y-1/2">
        <Nav scrollToComponent={scrollToComponent} />
      </div>

      <div className="flex flex-col relative z-10">
        <div className="flex items-start justify-start mt-16 min-h-screen flex-col h-4/5">
          <h1 className="z-20 text-green-300">
            <div className="text-5xl tracking-[.26em]">
              <AnimatedLetters
                letterClass="animate-wave"
                splitText={splitHeaderText}
                delays={[0.1]}
              />
            </div>
            <div className="text-8xl">
              <AnimatedLetters
                letterClass="animate-wave"
                splitText={splitHeaderText2}
                delays={[0.1]}
              />
            </div>
          </h1>

          <p className="text-4xl z-20 text-green-300">
            <AnimatedLetters
              letterClass="animate-wave-infinite"
              splitText={splitParText}
              delays={generateDelays(splitParText.length, 0.1, 0.1)}
            />
          </p>
        </div>
      </div>
      <div className="flex absolute left-8 bottom-2 z-30">
        <Socials />
      </div>
    </div>
  );
}
