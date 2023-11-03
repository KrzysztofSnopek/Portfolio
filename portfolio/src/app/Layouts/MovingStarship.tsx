import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Planet from "../Helpers/Planet";

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

  //   const scale = useTransform(
  //     scrollYProgressIncludingOverlap,
  //     [0.1, 0.4, 0.75, 1],
  //     [1, 2.5, 4.2, 1]
  //   );
  const x = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ["-50vw", "-5vw", "35vw", "225vw"]
  );
  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 0.75, 1],
    ["10vh", "20vh", "40vh"]
  );

  //   const avatarGroupOpacity = useTransform(
  //     scrollYProgress,
  //     [0, 0.23, 0.25],
  //     [0, 0, 1]
  //   );

  //   const avatarGroupX = useTransform(
  //     scrollYProgress,
  //     [0, 0.23, 0.25, 0.4, 0.45, 0.6, 0.65],
  //     ["60px", "60px", "40px", "40px", "20px", "20px", "0px"]
  //   );

  const avatarOneScale = useTransform(
    scrollYProgress,
    [0, 0.13, 0.35, 0.85, 1],
    [1, 0.9, 0.7, 0.4, 0]
  );

  //   const avatarTwoScale = useTransform(
  //     scrollYProgress,
  //     [0, 0.4, 0.45],
  //     [1, 0.5, 0]
  //   );

  //   const avatarTwoOpacity = useTransform(
  //     scrollYProgressIncludingOverlap,
  //     [0, 0.3, 0.7, 1],
  //     [1, 0.65, 0.2, 0]
  //   );

  //   const avatarThreeScale = useTransform(
  //     scrollYProgress,
  //     [0.9, 0.85, 0.65, 0.45, 0.1],
  //     [0, 0, 1, 1, 0]
  //   );

  return (
    <section ref={targetRef} className="relative z-10 mt-[-30vh] h-[300vh]">
      <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-[5vh]">
          <div className="flex justify-center">
            <motion.div className="origin-top">
              <motion.div>
                <motion.div style={{ scale: avatarOneScale, x, y }}>
                  <Planet size={400} color="yellow" />
                </motion.div>
                {/* <motion.div
                  style={{ scale: avatarTwoScale, opacity: avatarTwoOpacity }}
                >
                  <Planet size={400} color="blue" />
                </motion.div>
                <motion.div style={{ scale: avatarThreeScale }}>
                  <Planet size={300} color="red" />
                </motion.div> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
