import { useRef, useState } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

export default function LinkButton({
  buttonText,
  link,
}: {
  buttonText: string;
  link: string;
}) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [text, setText] = useState(buttonText);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = buttonText
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= buttonText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(buttonText);
  };

  return (
    <motion.button
      whileHover={{
        scaleY: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-primary bg-accent px-2 h-6 mt-2 font-mono font-medium text-sm uppercase text-indigo-300 transition-colors hover:text-indigo-200 flex justify-center opacity-90 hover:opacity-100 group-hover:bg-purpleaccent"
    >
      <div className="relative z-10 flex items-center gap-2">
        <a href={link}>{text}</a>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-violet-500/0 from-40% via-violet-500/100 to-violet-500/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
}
