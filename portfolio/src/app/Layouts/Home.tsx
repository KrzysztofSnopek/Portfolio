import React, { useEffect, useState } from "react";
import PhotoBlob from "../Components/Hero/PhotoBlob";
import { delay, motion, useAnimate, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";
import Image from "next/image";

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
    /* photo */
    const photoAnimation = async () => {
      await animate(
        "#photo",
        { opacity: 0.5, scale: 0.5 },
        { duration: 1, delay: 2 }
      );
      await animate("#photo", { x: 250 }, { duration: 0.6 });
      await animate("#photo", { y: 200 }, { duration: 0.6 });
      await animate("#photo", { x: -200 }, { duration: 0.6 });
      await animate("#photo", { y: 0 }, { duration: 0.6 });
      await animate("#photo", { x: 200 }, { duration: 0.6, delay: 0.6 });
      await animate("#photo", { x: 0 }, { duration: 0.6, delay: 1 });
      await animate("#photo", { opacity: 1, x: 0, scale: 1 }, { duration: 1 });
    };
    photoAnimation();

    /* paragraph 1 */
    const paragraphOneAnimation = async () => {
      await animate(
        "#par-1",
        { opacity: 0.8, scale: 0.5 },
        { duration: 1, delay: 3 }
      );
      await animate("#par-1", { x: 432 }, { duration: 0.6 });
      await animate("#par-1", { y: 200 }, { duration: 0.6 });
      await animate("#par-1", { y: 400 }, { duration: 0.6 });
      await animate("#par-1", { x: 0 }, { duration: 0.6 });
      await animate("#par-1", { y: 200 }, { duration: 0.6 });
      await animate("#par-1", { y: 0 }, { duration: 0.6 });
      await animate("#par-1", { scale: 1, opacity: 1 }, { duration: 0.5 });
    };
    paragraphOneAnimation();

    /* paragraph 2 */
    const paragraphTwoAnimation = async () => {
      await animate(
        "#par-2",
        { opacity: 0.8, scale: 0.5 },
        { duration: 1, delay: 3 }
      );
      await animate("#par-2", { y: 200 }, { duration: 0.6 });
      await animate("#par-2", { y: 400 }, { duration: 0.6 });
      await animate("#par-2", { x: -432 }, { duration: 0.6 });
      await animate("#par-2", { y: 200 }, { duration: 0.6 });
      await animate("#par-2", { y: 0 }, { duration: 0.6 });
      await animate("#par-2", { x: 0 }, { duration: 0.6 });
      await animate("#par-2", { scale: 1, opacity: 1 }, { duration: 0.5 });
    };
    paragraphTwoAnimation();

    /* phrases */
    const phrasesAnimation = async () => {
      await animate(
        "#phrases",
        { x: -120, y: -165, opacity: 0.8 },
        { duration: 1, delay: 3 }
      );
      await animate("#phrases", { y: -330 }, { duration: 0.6 });
      await animate("#phrases", { x: 330 }, { duration: 0.6 });
      await animate("#phrases", { y: -165 }, { duration: 0.6 });
      await animate("#phrases", { y: -0 }, { duration: 0.6 });
      await animate("#phrases", { x: 0 }, { duration: 0.6 });
      await animate("#phrases", { scale: 1, opacity: 1 }, { duration: 0.6 });

      const spreadAnimation = () => {
        animate("#phrase-3", { x: 0, y: 0 }, { duration: 0.6 });
        animate("#phrase-2", { x: 0, y: 0 }, { duration: 0.6 });
        animate("#phrase-1", { x: 0, y: 0 }, { duration: 0.6 });
      };
      spreadAnimation();

      const colorAnimation = () => {
        animate(
          "#oneplus",
          { color: "#130c2b", textShadow: "2px 2px 3px #6247bf" },
          { duration: 1, delay: 2 }
        );
        animate(
          "#growing",
          { color: "#130c2b", textShadow: "2px 2px 3px #6247bf" },
          { duration: 1, delay: 2 }
        );
        animate(
          "#love",
          { color: "#130c2b", textShadow: "2px 2px 3px #6247bf" },
          { duration: 1, delay: 2 }
        );
      };
      colorAnimation();
    };
    phrasesAnimation();
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
            <motion.div
              className="w-1/2 relative inline-block"
              id="par-1"
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
            >
              <div className="absolute inset-0 bg-accent opacity-70 blur"></div>
              <p className="py-2 mx-2 text-sm font-semibold text-justify uppercase relative z-10">
                Since I started my journey into web development, I have learned
                quite a few different technologies as I have been getting
                better. Starting with basics like HTML and CSS, I got to know
                JavaScript, ReactJS framework, and typescript later on.
              </p>
            </motion.div>

            <motion.div
              className="w-1/2 relative px-2 inline-block"
              id="par-2"
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
            >
              <div className="absolute inset-0 bg-accent opacity-70 blur"></div>
              <p className="py-2 mx-2 font-semibold text-sm text-justify uppercase relative z-10">
                Looking for a work as junior frontend developer, I am eager to
                contribute and apply my web development and design skills in a
                professional setting. I am ready to make an impact and actively
                contribute to projects!
              </p>
            </motion.div>
          </div>

          <motion.div
            className="w-full flex justify-center py-8 mr-4"
            id="photo"
          >
            <motion.p className="px-8 pb-6 text-6xl font-extrabold self-center">
              Krzysztof
            </motion.p>
            <motion.div className="relative h-48 w-48">
              <div className="relative h-48 w-48 overflow-hidden rounded-full z-10">
                <Image
                  src="/Images/Hero.jpg"
                  alt="my photo"
                  width={640}
                  height={640}
                  className="absolute right-0 top-1/2 max-w-none -translate-y-1/2 left-1/2 -translate-x-1/2 scale-50 bg-contain grayscale hover:grayscale-0 transition-colors duration-500"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 max-w-none -translate-y-1/2 -translate-x-1/2">
                <PhotoBlob />
              </div>
            </motion.div>

            <motion.p className="px-8 pb-6 text-6xl font-extrabold self-center">
              Snopek
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full flex justify-between pt-10"
            id="phrases"
            initial={{ scale: 0.5, opacity: 0, x: -150 }}
          >
            <motion.div
              className="w-1/4 flex relative"
              id="phrase-1"
              initial={{ y: -100 }}
            >
              <motion.p
                className="w-1/4 pl-2 py-2 text-4xl"
                id="oneplus"
                initial={{
                  color: "#000000",
                  textShadow: "none",
                }}
              >
                1+
              </motion.p>
              <p className="w-3/4 py-2 text-sm">
                year of non-commercial experience
              </p>
            </motion.div>

            <motion.div
              className="w-1/2 flex relative justify-center"
              id="phrase-2"
              initial={{ x: -300, y: -50 }}
            >
              <div className="w-[100px]"></div>
              <motion.p
                className="w-1/4 text-4xl tracking-tighter self-center"
                id="growing"
                initial={{ color: "#000000" }}
              >
                Growing
              </motion.p>
              <p className="w-1/3 pl-8 self-center text-sm">
                through every challenge
              </p>
              <div className="w-[100px]"></div>
            </motion.div>

            <motion.div
              className="w-1/4 flex justify-end relative"
              id="phrase-3"
              initial={{ x: -680 }}
            >
              <p className="w-1/12 text-sm self-center">in</p>
              <motion.p
                className="w-1/3 py-2 pr-6 text-4xl"
                id="love"
                initial={{ color: "#000000" }}
              >
                love
              </motion.p>
              <p className="w-1/3 pl-2 text-sm self-center">
                with web <br /> animations
              </p>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
