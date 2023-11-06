import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Planet from "../Helpers/Planet";
import Hero from "./Hero";

export default function MovingStarship() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ["start end", "end end"],
  });

  const planetOneX = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ["-50vw", "-5vw", "35vw", "225vw"]
  );
  const planetOneY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.75, 1],
    ["10vh", "20vh", "40vh"]
  );

  const planetOneScale = useTransform(
    scrollYProgress,
    [0, 0.13, 0.35, 0.85, 1],
    [1, 0.9, 0.7, 0.4, 0]
  );

  const planetTwoX = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ["-40vw", "-5vw", "35vw", "225vw"]
  );
  const planetTwoY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.75, 1],
    ["10vh", "20vh", "30vh"]
  );

  const planetTwoScale = useTransform(
    scrollYProgress,
    [0, 0.23, 0.45, 0.85, 1],
    [1, 0.9, 0.6, 0.4, 0]
  );

  const planetThreeX = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ["-20vw", "-5vw", "35vw", "225vw"]
  );
  const planetThreeY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.75, 1],
    ["-60vh", "20vh", "40vh"]
  );

  const planetThreeScale = useTransform(
    scrollYProgress,
    [0.1, 0.33, 0.55, 0.85, 1],
    [1, 0.7, 0.2, 0.1, 0]
  );

  const planetFourX = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ["40vw", "5vw", "-35vw", "-80vw"]
  );
  const planetFourY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.75, 1],
    ["-150vh", "20vh", "40vh"]
  );

  const planetFourScale = useTransform(
    scrollYProgress,
    [0.1, 0.33, 0.55, 0.85, 1],
    [1, 0.8, 0.8, 0.8, 0.5]
  );

  const heroX = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ["0vw", "5vw", "-35vw", "-80vw"]
  );
  const heroY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.75, 1],
    ["-270vh", "20vh", "40vh"]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0.1, 0.33, 0.55, 0.85, 1],
    [1, 1, 1, 1, 1]
  );

  return (
    <section ref={targetRef} className="relative z-10 h-[300vh] w-full">
      <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-[5vh]">
          <div className="flex justify-center">
            <motion.div className="origin-top">
              <motion.div>
                <motion.div
                  style={{
                    scale: planetOneScale,
                    x: planetOneX,
                    y: planetOneY,
                  }}
                >
                  <Planet size={400} color="black" />
                </motion.div>

                <motion.div
                  style={{
                    scale: planetTwoScale,
                    x: planetTwoX,
                    y: planetTwoY,
                  }}
                >
                  <Planet size={300} color="red" />
                </motion.div>

                <motion.div
                  style={{
                    scale: planetThreeScale,
                    x: planetThreeX,
                    y: planetThreeY,
                  }}
                >
                  <Planet size={500} color="blue" />
                </motion.div>

                <motion.div
                  style={{
                    scale: planetFourScale,
                    x: planetFourX,
                    y: planetFourY,
                  }}
                >
                  <Planet size={400} color="purple" />
                </motion.div>

                <motion.div
                  style={{
                    scale: heroScale,
                    x: heroX,
                    y: heroY,
                  }}
                >
                  <Hero />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
