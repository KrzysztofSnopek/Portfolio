import React, { useEffect, useState } from "react";
import PhotoBlob from "../Components/Hero/PhotoBlob";
import { motion, useAnimate, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";

export default function Home(): JSX.Element {
  const [isBottomPage, setIsBottomPage] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 2.8 * window.innerHeight) {
      setIsBottomPage(true);
    }
  });

  const [scope, animate] = useAnimate();

  const handleStartAnimation = () => {
    // const phraseOneAnimation = async () => {
    //   await animate(
    //     "#phrase-1",
    //     { opacity: 1, x: 64, rotate: "0deg" },
    //     { duration: 1.6 }
    //   );
    //   await animate(
    //     "#phrase-1",
    //     { opacity: 1, y: 64, rotate: "0deg" },
    //     { duration: 1.6 }
    //   );
    //   await animate(
    //     "#phrase-1",
    //     { opacity: 1, x: 0, rotate: "0deg" },
    //     { duration: 1.6 }
    //   );
    // };
    // phraseOneAnimation();
    // animate(
    //   "#phrase-2",
    //   { opacity: 1, x: -94, rotate: "0deg" },
    //   { duration: 1.6 }
    // );
    // animate(
    //   "#phrase-2",
    //   { opacity: 1, y: -94, rotate: "0deg" },
    //   { duration: 1.6 }
    // );
    // animate(
    //   "#phrase-2",
    //   { opacity: 1, x: 0, rotate: "0deg" },
    //   { duration: 1.6 }
    // );
    // animate(
    //   "#phrase-3",
    //   { opacity: 1, y: 124, rotate: "0deg" },
    //   { duration: 1.6 }
    // );
    // animate(
    //   "#phrase-3",
    //   { opacity: 1, x: 124, rotate: "0deg" },
    //   { duration: 1.6 }
    // );
    // animate(
    //   "#phrase-3",
    //   { opacity: 1, y: 0, rotate: "0deg" },
    //   { duration: 1.6 }
    // );
  };

  return (
    <div className="flex flex-col">
      {isBottomPage && (
        <div
          className="flex flex-wrap"
          ref={scope}
          onLoad={handleStartAnimation}
        >
          <div className="flex">
            <p className="w-1/2 py-2 mx-2">
              Since I started my journey into web development, I have learned
              quite a few different technologies as I have been getting better.
              Starting with basics like HTML and CSS, I got to know JavaScript,
              ReactJS framework, and typescript later on.
            </p>

            <p className="w-1/2 py-2 mx-2">
              Looking for a work as junior frontend developer, I'm eager to
              contribute and apply my web development and design skills in a
              professional setting. I'm ready to make an impact and actively
              contribute to projects!
            </p>
          </div>

          <div className="w-full flex justify-center py-8">
            <motion.p
              // initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
              className="px-8 text-4xl self-center"
            >
              Krzysztof
            </motion.p>
            <motion.div
              className="relative h-48 w-48"
              // initial={{ x: 320, y: -120 }}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full z-10">
                <img
                  className="absolute right-0 top-1/2 max-w-none -translate-y-1/2 object-contain grayscale left-1/2 h-[640px] w-[1000px] -translate-x-1/2 scale-75"
                  src="/Images/Hero.jpg"
                  alt="my photo"
                  width="590px"
                  height="640px"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 max-w-none -translate-y-1/2 -translate-x-1/2">
                <PhotoBlob />
              </div>
            </motion.div>

            <motion.p
              // initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
              className="px-8 text-4xl self-center"
            >
              Snopek
            </motion.p>
          </div>

          <div className="w-full flex justify-between">
            <motion.div className="w-1/3 flex relative" id="phrase-1">
              <p className="w-1/4 pl-2 py-2 text-4xl">1+</p>
              <p className="w-3/4 py-2 text-sm">
                year of non-commercial experience
              </p>
            </motion.div>

            <motion.div className="w-1/3 flex relative" id="phrase-2">
              <p className="w-1/4 p-2 text-4xl tracking-tighter self-center absolute left-0">
                Growing
              </p>
              <p className="self-center pl-4 absolute left-1/2 text-sm">
                through every challenge
              </p>
            </motion.div>

            <motion.div
              className="w-1/3 flex justify-end relative"
              id="phrase-3"
            >
              <p className="w-1/12 text-sm self-center">in</p>
              <p className="w-1/4 py-2 text-4xl">love</p>
              <p className="w-1/2 pl-4 text-sm self-center">
                with web <br /> animations
              </p>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
