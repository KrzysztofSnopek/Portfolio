import React from "react";

interface PlanetProps {
  size: number;
  color: string;
}

const Planet: React.FC<PlanetProps> = ({ size, color }) => {
  const planetStyles = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: "50%",
  };

  return (
    <div
      className="relative inline-block overflow-hidden"
      style={{
        ...planetStyles,
        boxShadow: `0 0 15px 5px ${color}`,
      }}
    >
      <div className="absolute top-[3%] left-[3%] w-[95%] h-[95%] bg-accent opacity-20 rounded-full" />
      <div className="absolute top-[25%] left-[23%] w-[15%] h-[15%] bg-accent opacity-10 rounded-full" />
      <div className="absolute top-[55%] left-[66%] w-[25%] h-[25%] bg-accent opacity-5 rounded-full" />
      <div className="absolute bottom-[10%] left-0 w-[100%] h-[100%] bg-accent opacity-10 rounded-full"></div>
      <div className="absolute bottom-[30%] left-0 w-[100%] h-[100%] bg-accent opacity-10 rounded-full"></div>
      <div className="absolute bottom-[50%] left-0 w-[100%] h-[100%] bg-accent opacity-10 rounded-full"></div>
      <div className="absolute bottom-[75%] left-0 w-[100%] h-[100%] bg-accent opacity-10 rounded-full"></div>
    </div>
  );
};

export default Planet;
