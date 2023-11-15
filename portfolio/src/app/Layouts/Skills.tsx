import { motion, useAnimate } from "framer-motion";
import React from "react";

export default function Skills(): JSX.Element {
  const [scope, animate] = useAnimate();

  const handleAnimation = async () => {
    await animate(
      "#box",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container", { opacity: 0.7, x: 8 });
    await animate(
      "#text",
      { opacity: 1, y: 55 },
      { duration: 0.4, delay: 0.1 }
    );

    await animate(
      "#box-2",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container-2", { opacity: 0.7, x: 8 });
    await animate(
      "#text-2",
      { opacity: 1, y: 155 },
      { duration: 0.8, delay: 0.2 }
    );

    await animate(
      "#box-3",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container-3", { opacity: 0.7, x: 8 });
    await animate(
      "#text-3",
      { opacity: 1, y: 30 },
      { duration: 0.3, delay: 0.1 }
    );

    await animate(
      "#box-4",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container-4", { opacity: 0.7, x: 8 });
    await animate(
      "#text-4",
      { opacity: 1, y: 114 },
      { duration: 0.6, delay: 0.1 }
    );

    await animate(
      "#box-5",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container-5", { opacity: 0.7, x: 8 });
    await animate(
      "#text-5",
      { opacity: 1, y: 69 },
      { duration: 0.5, delay: 0.1 }
    );

    await animate(
      "#box-6",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container-6", { opacity: 0.7, x: 8 });
    await animate(
      "#text-6",
      { opacity: 1, y: 157 },
      { duration: 0.7, delay: 0.1 }
    );

    await animate(
      "#box-7",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container-7", { opacity: 0.7, x: 8 });
    await animate(
      "#text-7",
      { opacity: 1, y: 94 },
      { duration: 0.6, delay: 0.1 }
    );

    await animate(
      "#box-8",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container-8", { opacity: 0.7, x: 8 });
    await animate(
      "#text-8",
      { opacity: 1, y: 60 },
      { duration: 0.5, delay: 0.1 }
    );

    await animate(
      "#box-9",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container-9", { opacity: 0.7, x: 8 });
    await animate(
      "#text-9",
      { opacity: 1, y: 154 },
      { duration: 0.7, delay: 0.1 }
    );

    await animate(
      "#box-10",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container-10", { opacity: 0.7, x: 8 });
    await animate(
      "#text-10",
      { opacity: 1, y: 157 },
      { duration: 0.7, delay: 0.1 }
    );

    await animate(
      "#box-11",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container-11", { opacity: 0.7, x: 8 });
    await animate(
      "#text-11",
      { opacity: 1, y: 222 },
      { duration: 0.8, delay: 0.1 }
    );

    await animate(
      "#box-12",
      { opacity: 1, x: 64, rotate: "0deg" },
      { duration: 0.6 }
    );
    await animate("#container-12", { opacity: 0.7, x: 8 });
    await animate(
      "#text-12",
      { opacity: 1, y: 83 },
      { duration: 0.5, delay: 0.1 }
    );
  };

  return (
    <div
      ref={scope}
      className="mt-8 -ml-16 flex flex-col"
      onMouseEnter={handleAnimation}
    >
      {/* <button
        className="hover:cursor-pointer self-center bg-slate-300 mb-4"
        onClick={handleAnimation}
      >
        click
      </button> */}

      <div className="flex relative">
        {/* box */}

        <motion.div
          id="box"
          className="absolute left-0 h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-32 w-16 overflow-hidden">
          <motion.div
            id="container"
            className="absolute inset-0 bg-lightpurpleaccent blur-[2px] w-12 rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4">HTML</p>
          </motion.div>
        </motion.div>

        {/* box 2 */}

        <motion.div
          id="box-2"
          className="absolute left-16 h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-56 w-16 overflow-hidden">
          <motion.div
            id="container-2"
            className="absolute inset-0 bg-lightpurpleaccent blur-[2px] w-12 rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-2"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4">JAVASCRIPT</p>
          </motion.div>
        </motion.div>

        {/* box 3 */}

        <motion.div
          id="box-3"
          className="absolute left-32 h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-24 w-16 overflow-hidden">
          <motion.div
            id="container-3"
            className="absolute inset-0 bg-lightpurpleaccent blur-[2px] w-12 rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-3"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4">CSS</p>
          </motion.div>
        </motion.div>

        {/* box 4 */}

        <motion.div
          id="box-4"
          className="absolute left-48 h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-44 w-16 overflow-hidden">
          <motion.div
            id="container-4"
            className="absolute inset-0 bg-lightpurpleaccent blur-[2px] w-12 rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-4"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4">TAILWIND</p>
          </motion.div>
        </motion.div>

        {/* box 5 */}

        <motion.div
          id="box-5"
          className="absolute left-64 h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-36 w-16 overflow-hidden">
          <motion.div
            id="container-5"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-5"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4">REACT</p>
          </motion.div>
        </motion.div>

        {/* box 6 */}

        <motion.div
          id="box-6"
          className="absolute left-80 h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-56 w-16 overflow-hidden">
          <motion.div
            id="container-6"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-6"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4">TYPESCRIPT</p>
          </motion.div>
        </motion.div>

        {/* box 7 */}

        <motion.div
          id="box-7"
          className="absolute left-96 h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-40 w-16 overflow-hidden">
          <motion.div
            id="container-7"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-7"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4">NEXT.JS</p>
          </motion.div>
        </motion.div>

        {/* box 8 */}

        <motion.div
          id="box-8"
          className="absolute left-[28rem] h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-32 w-16 overflow-hidden">
          <motion.div
            id="container-8"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-8"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4">MOBX</p>
          </motion.div>
        </motion.div>

        {/* box 9 */}

        <motion.div
          id="box-9"
          className="absolute left-[32rem] h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-56 w-16 overflow-hidden">
          <motion.div
            id="container-9"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-9"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4">BOOTSTRAP</p>
          </motion.div>
        </motion.div>

        {/* box 10 */}

        <motion.div
          id="box-10"
          className="absolute left-[36rem] h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-56 w-16 overflow-hidden">
          <motion.div
            id="container-10"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-10"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4 whitespace-nowrap">MATERIAL UI</p>
          </motion.div>
        </motion.div>

        {/* box 11 */}

        <motion.div
          id="box-11"
          className="absolute left-[40rem] h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-72 w-16 overflow-hidden">
          <motion.div
            id="container-11"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-11"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4 whitespace-nowrap">FRAMER MOTION</p>
          </motion.div>
        </motion.div>

        {/* box 12 */}

        <motion.div
          id="box-12"
          className="absolute left-[44rem] h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 bg-primary rounded-lg"></div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-36 w-16 overflow-hidden">
          <motion.div
            id="container-12"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-12"
            className="p-4 font-bold text-3xl opacity-0"
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
          >
            <p className="p-4">GITHUB</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
