import React from "react";
import { motion, useAnimate } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BootstrapLogo,
  Css3Logo,
  FramerLogo,
  GithubLogo,
  HtmlLogo,
  JavascriptLogo,
  MaterialuiLogo,
  MobxLogo,
  NextJSLogo,
  ReactLogo,
  TailwindLogo,
  TypescriptLogo,
} from "../Helpers/LogoSvgs";

export default function Skills(): JSX.Element {
  const [scope, animate] = useAnimate();

  const handleAnimation = async () => {
    const box = async () => {
      await animate(
        "#box",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6 }
      );
      await animate("#container", { opacity: 0.7, x: 8 });
      await animate(
        "#text",
        { opacity: 1, y: 49 },
        { duration: 0.4, delay: 0.1 }
      );
    };
    box();

    const box2 = async () => {
      await animate(
        "#box-2",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6, delay: 0.5 }
      );
      await animate("#container-2", { opacity: 0.7, x: 8 });
      await animate(
        "#text-2",
        { opacity: 1, y: 141 },
        { duration: 0.8, delay: 0.2 }
      );
    };
    box2();

    const box3 = async () => {
      await animate(
        "#box-3",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6, delay: 1 }
      );
      await animate("#container-3", { opacity: 0.7, x: 8 });
      await animate(
        "#text-3",
        { opacity: 1, y: 24 },
        { duration: 0.3, delay: 0.1 }
      );
    };
    box3();

    const box4 = async () => {
      await animate(
        "#box-4",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6, delay: 1.5 }
      );
      await animate("#container-4", { opacity: 0.7, x: 8 });
      await animate(
        "#text-4",
        { opacity: 1, y: 102 },
        { duration: 0.6, delay: 0.1 }
      );
    };
    box4();

    const box5 = async () => {
      await animate(
        "#box-5",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6, delay: 2 }
      );
      await animate("#container-5", { opacity: 0.7, x: 8 });
      await animate(
        "#text-5",
        { opacity: 1, y: 61 },
        { duration: 0.5, delay: 0.1 }
      );
    };
    box5();

    const box6 = async () => {
      await animate(
        "#box-6",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6, delay: 2.5 }
      );
      await animate("#container-6", { opacity: 0.7, x: 8 });
      await animate(
        "#text-6",
        { opacity: 1, y: 141 },
        { duration: 0.7, delay: 0.1 }
      );
    };
    box6();

    const box7 = async () => {
      await animate(
        "#box-7",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6, delay: 3 }
      );
      await animate("#container-7", { opacity: 0.7, x: 8 });
      await animate(
        "#text-7",
        { opacity: 1, y: 85 },
        { duration: 0.6, delay: 0.1 }
      );
    };
    box7();

    const box8 = async () => {
      await animate(
        "#box-8",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6, delay: 3.5 }
      );
      await animate("#container-8", { opacity: 0.7, x: 8 });
      await animate(
        "#text-8",
        { opacity: 1, y: 54 },
        { duration: 0.5, delay: 0.1 }
      );
    };
    box8();

    const box9 = async () => {
      await animate(
        "#box-9",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6, delay: 4 }
      );
      await animate("#container-9", { opacity: 0.7, x: 8 });
      await animate(
        "#text-9",
        { opacity: 1, y: 137 },
        { duration: 0.7, delay: 0.1 }
      );
    };
    box9();

    const box10 = async () => {
      await animate(
        "#box-10",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6, delay: 4.5 }
      );
      await animate("#container-10", { opacity: 0.7, x: 8 });
      await animate(
        "#text-10",
        { opacity: 1, y: 145 },
        { duration: 0.7, delay: 0.1 }
      );
    };
    box10();

    const box11 = async () => {
      await animate(
        "#box-11",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6, delay: 5 }
      );
      await animate("#container-11", { opacity: 0.7, x: 8 });
      await animate(
        "#text-11",
        { opacity: 1, y: 204 },
        { duration: 0.8, delay: 0.1 }
      );
    };
    box11();

    const box12 = async () => {
      await animate(
        "#box-12",
        { opacity: 1, x: 64, rotate: "0deg" },
        { duration: 0.6, delay: 5.5 }
      );
      await animate("#container-12", { opacity: 0.7, x: 8 });
      await animate(
        "#text-12",
        { opacity: 1, y: 73 },
        { duration: 0.5, delay: 0.1 }
      );
    };
    box12();
  };

  return (
    <div
      ref={scope}
      className="mt-8 -ml-16 flex flex-col"
      onMouseEnter={handleAnimation}
    >
      <div className="flex relative">
        {/* box */}

        <motion.div
          id="box"
          className="absolute left-0 h-16 w-16 opacity-0 flex justify-center items-center"
          initial={{
            rotate: "-90deg",
          }}
        >
          <div className="h-12 w-12 text-primary rounded-lg flex justify-center items-center">
            <HtmlLogo />
          </div>
        </motion.div>

        <motion.div className="relative left-16 top-24 h-28 w-16 overflow-hidden">
          <motion.div
            id="container"
            className="absolute inset-0 bg-lightpurpleaccent blur-[2px] w-12 rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text"
            className="p-4 text-3xl opacity-0"
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
          <JavascriptLogo />
        </motion.div>

        <motion.div className="relative left-16 top-24 h-52 w-16 overflow-hidden">
          <motion.div
            id="container-2"
            className="absolute inset-0 bg-lightpurpleaccent blur-[2px] w-12 rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-2"
            className="p-4 text-3xl opacity-0"
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
          <Css3Logo />
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
            className="p-4 text-3xl opacity-0"
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
          <TailwindLogo />
        </motion.div>

        <motion.div className="relative left-16 top-24 h-[11rem] w-16 overflow-hidden">
          <motion.div
            id="container-4"
            className="absolute inset-0 bg-lightpurpleaccent blur-[2px] w-12 rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-4"
            className="p-4 text-3xl opacity-0"
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
          <ReactLogo />
        </motion.div>

        <motion.div className="relative left-16 top-24 h-32 w-16 overflow-hidden">
          <motion.div
            id="container-5"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-5"
            className="p-4 text-3xl opacity-0"
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
          <TypescriptLogo />
        </motion.div>

        <motion.div className="relative left-16 top-24 h-52 w-16 overflow-hidden">
          <motion.div
            id="container-6"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-6"
            className="p-4 text-3xl opacity-0"
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
          <NextJSLogo />
        </motion.div>

        <motion.div className="relative left-16 top-24 h-[9.5rem] w-16 overflow-hidden">
          <motion.div
            id="container-7"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-7"
            className="p-4 text-3xl opacity-0"
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
          <MobxLogo />
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
            className="p-4 text-3xl opacity-0"
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
          <BootstrapLogo />
        </motion.div>

        <motion.div className="relative left-16 top-24 h-52 w-16 overflow-hidden">
          <motion.div
            id="container-9"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-9"
            className="p-4 text-3xl opacity-0"
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
          <MaterialuiLogo />
        </motion.div>

        <motion.div className="relative left-16 top-24 h-52 w-16 overflow-hidden">
          <motion.div
            id="container-10"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-10"
            className="p-4 text-3xl opacity-0"
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
          <FramerLogo />
        </motion.div>

        <motion.div className="relative left-16 top-24 h-[17rem] w-16 overflow-hidden">
          <motion.div
            id="container-11"
            className="absolute inset-0 bg-lightpurpleaccent w-12 blur-[2px] rounded-full"
            initial={{
              opacity: 0,
            }}
          ></motion.div>
          <motion.div
            id="text-11"
            className="p-4 text-3xl opacity-0"
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
          <GithubLogo />
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
            className="p-4 text-3xl opacity-0"
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
