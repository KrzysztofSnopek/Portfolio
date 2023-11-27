import React from "react";

interface AnimatedLettersProps {
  letterClass: string;
  splitText: string[];
  delays: number[];
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({
  letterClass,
  splitText,
  delays,
}) => {
  return (
    <span className="group">
      {splitText.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} text-slate-200 min-w-10`}
          style={{ animationDelay: `${delays[i]}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
