import React from "react";
import Nav from "./Nav";

export interface HeroProps {
  scrollToComponent: (component: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToComponent }) => {
  return (
    <div className="bg-blue-500 h-full text-white flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-4">Hero Theme</h1>
      <Nav scrollToComponent={scrollToComponent} />
    </div>
  );
};

export default Hero;
