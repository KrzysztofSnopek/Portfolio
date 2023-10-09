import React from "react";
import Nav from "./Nav";

export interface HeroProps {
  scrollToComponent: (component: string) => void;
}

export default function Hero({ scrollToComponent }: HeroProps) {
  return (
    <div className="bg-blue-500 h-full text-white flex flex-col justify-center items-center relative z-10">
      <h1 className="text-3xl mb-4">Hero Theme</h1>
      <Nav scrollToComponent={scrollToComponent} />
    </div>
  );
}
