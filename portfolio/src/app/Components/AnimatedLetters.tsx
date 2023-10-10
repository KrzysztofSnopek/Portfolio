import React from "react";

interface AnimatedLettersProps {
  letterClass: string;
  splitText: string[];
  idx: number;
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({
  letterClass,
  splitText,
  idx,
}) => {
  return (
    <span className="group">
      {splitText.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} text-slate-200 animate-wave min-w-10 delay-${
            i + idx
          }`}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
