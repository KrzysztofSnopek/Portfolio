import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Planet from "../Helpers/Planet";
import Hero from "./Hero";
import { staggerItem } from "../Components/WelcomePage";

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export default function MovingStar() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ["start start", "end end"],
  });

  /* 1 */
  const planetOneX = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.3, 1],
    ["65vw", "70vw", "75vw"]
  );
  const planetOneY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1],
    ["-100vh", "150vh"]
  );
  const planetOneScale = useTransform(scrollYProgress, [0, 1], [2, 0]);

  /* 2 */
  const planetTwoX = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.25, 0.75, 1],
    ["40vw", "-5vw", "35vw", "65vw"]
  );
  const planetTwoY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1],
    ["-100vh", "100vh"]
  );
  const planetTwoScale = useTransform(
    scrollYProgress,
    [0, 0.23, 0.45, 0.85, 1],
    [3, 1.5, 0.6, 0.2, 0]
  );

  /* 3 */
  const planetThreeX = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.25, 0.75, 1],
    ["5vw", "-30vw", "-45vw", "-70vw"]
  );
  const planetThreeY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1],
    ["-210vh", "140vh"]
  );
  const planetThreeScale = useTransform(
    scrollYProgress,
    [0, 0.33, 0.55, 0.85, 1],
    [1.7, 0.7, 0.2, 0.1, 0]
  );

  /* 4 */
  const planetFourX = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.25, 0.75, 1],
    ["70vw", "75vw", "80w", "120vw"]
  );
  const planetFourY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1],
    ["-190vh", "340vh"]
  );
  const planetFourScale = useTransform(
    scrollYProgress,
    [0, 0.33, 0.55, 0.85, 1],
    [1.2, 0.8, 0.8, 0.8, 0.5]
  );

  /* 5 */
  const planetFiveX = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.75, 1],
    ["50vw", "65vw", "-10vw"]
  );
  const planetFiveY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1],
    ["-130vh", "50vh"]
  );
  const planetFiveScale = useTransform(scrollYProgress, [0, 1], [2, 0]);

  /* 6 */
  const planetSixX = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.25, 0.75, 1],
    ["40vw", "5vw", "-35vw", "-80vw"]
  );
  const planetSixY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1],
    ["-320vh", "340vh"]
  );
  const planetSixScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  /* 7 */
  const planetSevenX = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.25, 0.75, 1],
    ["50vw", "15vw", "5vw", "-30vw"]
  );
  const planetSevenY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1],
    ["-250vh", "-100vh"]
  );
  const planetSevenScale = useTransform(
    scrollYProgress,
    [0, 0.99, 1],
    [0.8, 3, 0]
  );

  /* 8 */
  const planetEightX = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.25, 0.75, 1],
    ["-20vw", "15vw", "29vw", "40vw"]
  );
  const planetEightY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1],
    ["-350vh", "20vh"]
  );
  const planetEightScale = useTransform(scrollYProgress, [0, 1], [1, 0]);

  /* 9 */
  const planetNineX = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.25, 0.75, 1],
    ["-10vw", "-30vw", "100vw", "150vw"]
  );
  const planetNineY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1],
    ["-220vh", "-150vh"]
  );
  const planetNineScale = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1, 2, 0.5]
  );

  /* 10 */
  const planetTenX = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.25, 0.75, 1],
    ["20vw", "5vw", "-35vw", "-40vw"]
  );
  const planetTenY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1],
    ["-350vh", "240vh"]
  );
  const planetTenScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  /* Hero */
  const heroY = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1],
    ["0%", "0%"]
  );
  const heroScale = useTransform(scrollYProgress, [0, 0.8, 1], [0.01, 0.01, 1]);

  return (
    <div className="relative z-10 w-full overflow-x-clip overflow-y-clip">
      <section ref={targetRef} className="relative z-10 h-[400vh] w-full">
        <div ref={extendedRef} className="w-full mb-[100vh]">
          <div className="">
            <div className="flex justify-center">
              <motion.div
                className="origin-top"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                <motion.div>
                  <motion.div
                    style={{
                      scale: heroScale,
                      y: heroY,
                    }}
                    className="sticky top-0"
                  >
                    <Hero />
                  </motion.div>

                  <motion.div
                    style={{
                      scale: planetOneScale,
                      x: planetOneX,
                      y: planetOneY,
                    }}
                    variants={staggerItem}
                  >
                    <Planet size={600} color="black" />
                  </motion.div>

                  <motion.div
                    style={{
                      scale: planetTwoScale,
                      x: planetTwoX,
                      y: planetTwoY,
                    }}
                    variants={staggerItem}
                  >
                    <Planet size={300} color="red" />
                  </motion.div>

                  <motion.div
                    style={{
                      scale: planetThreeScale,
                      x: planetThreeX,
                      y: planetThreeY,
                    }}
                    variants={staggerItem}
                  >
                    <Planet size={500} color="blue" />
                  </motion.div>

                  <motion.div
                    style={{
                      scale: planetFourScale,
                      x: planetFourX,
                      y: planetFourY,
                    }}
                    variants={staggerItem}
                  >
                    <Planet size={400} color="purple" />
                  </motion.div>

                  <motion.div
                    style={{
                      scale: planetFiveScale,
                      x: planetFiveX,
                      y: planetFiveY,
                    }}
                    variants={staggerItem}
                  >
                    <Planet size={200} color="white" />
                  </motion.div>

                  <motion.div
                    style={{
                      scale: planetSixScale,
                      x: planetSixX,
                      y: planetSixY,
                    }}
                    variants={staggerItem}
                  >
                    <Planet size={500} color="green" />
                  </motion.div>

                  <motion.div
                    style={{
                      scale: planetSevenScale,
                      x: planetSevenX,
                      y: planetSevenY,
                    }}
                    variants={staggerItem}
                  >
                    <Planet size={400} color="brown" />
                  </motion.div>

                  <motion.div
                    style={{
                      scale: planetEightScale,
                      x: planetEightX,
                      y: planetEightY,
                    }}
                    variants={staggerItem}
                  >
                    <Planet size={300} color="#d87321" />
                  </motion.div>

                  <motion.div
                    style={{
                      scale: planetNineScale,
                      x: planetNineX,
                      y: planetNineY,
                    }}
                    variants={staggerItem}
                  >
                    <Planet size={300} color="#826451" />
                  </motion.div>

                  <motion.div
                    style={{
                      scale: planetTenScale,
                      x: planetTenX,
                      y: planetTenY,
                    }}
                    variants={staggerItem}
                  >
                    <Planet size={400} color="#090001" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
