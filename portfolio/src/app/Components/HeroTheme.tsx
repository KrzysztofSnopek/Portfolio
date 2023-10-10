import React from "react";
import Nav from "./Nav";
import AnimatedLetters from "./AnimatedLetters";

export interface HeroProps {
  scrollToComponent: (component: string) => void;
}

export default function Hero({ scrollToComponent }: HeroProps) {
  const welcomingText = "Hello Tailwind CSS";
  const splitText = welcomingText.split("");

  return (
    <div className="bg-slate-800 h-full text-white flex flex-col justify-center items-center relative z-10">
      <h1 className="text-3xl mb-4">Hero Theme</h1>
      <Nav scrollToComponent={scrollToComponent} />
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-4xl z-20 text-green-300">
          <AnimatedLetters
            letterClass="text-animate"
            splitText={splitText}
            idx={1}
          />
        </div>
      </div>
    </div>
  );
}
