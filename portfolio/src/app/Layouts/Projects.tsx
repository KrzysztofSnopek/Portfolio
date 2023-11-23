import React from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import LinkButton from "./LinkButton";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectData } from "../Helpers/projectsData";

export default function Projects(): JSX.Element {
  const [scope, animate] = useAnimate();
  let animationStarted = false;

  const handleAnimation = () => {
    if (!animationStarted) {
      animationStarted = true;
      animate("#proj-1", { y: 0, opacity: 1 }, { duration: 2 });
      animate("#proj-2", { y: 0, opacity: 1 }, { duration: 2, delay: 0.5 });
      animate("#proj-3", { y: 0, opacity: 1 }, { duration: 2, delay: 1 });
    }
  };

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden flex flex-col mr-1"
      onMouseEnter={handleAnimation}
    >
      <div
        className="overflow-y-auto scrollbar-track-transparent scrollbar"
        ref={scope}
      >
        {projectData.map((project) => (
          <motion.div
            className="w-[98%] relative inline-block p-2 my-[0.75rem] group"
            id={project.id}
            initial={{ opacity: 0, y: -200 }}
            key={project.key}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-grayaccent to-accent group-hover:from-slate-100 group-hover:via-lightpurpleaccent group-hover:to-purpleaccent opacity-70 group-hover:outline group-hover:outline-2 group-hover:outline-secondary rounded-lg transition-colors duration-700"></div>
            <div className="mx-2 text-sm font-thin text-justify uppercase relative z-10">
              <div className=" h-full group grid grid-cols-1 space-x-8 overflow-hidden text-primary sm:mx-auto sm:grid-cols-6">
                <div className="group relative h-[180px] w-full overflow-hidden col-span-2">
                  <Image
                    src={project.imgSrc}
                    width={0}
                    height={0}
                    sizes="150vw"
                    style={{ width: "auto", height: "260px" }}
                    alt=""
                    className="h-full w-full border-none object-cover rounded-lg transition group-hover:scale-125 grayscale group-hover:grayscale-0"
                  />
                  <span className="absolute top-2 left-2 rounded-full bg-lightpurpleaccent px-2 text-xs font-thin text-primary">
                    {project.name}
                  </span>
                </div>
                <div className="col-span-4 flex flex-col space-y-2 pr-8 text-left">
                  <div className="flex justify-between">
                    <p className="mt-1 overflow-hidden text-2xl font-thin">
                      {project.name}
                    </p>
                    <div className="flex">
                      <Link
                        href={project.gitLink}
                        className="mt-[6px] text-accent group-hover:text-purpleaccent hover:text-primary pr-2 scale-[85%]"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </Link>
                      {project.liveDemo && (
                        <LinkButton buttonText="live" link={project.liveDemo} />
                      )}
                    </div>
                  </div>
                  <p className="overflow-hidden text-sm text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-col text-primary sm:flex-row">
                    <ul className="flex h-fit space-x-2 text-sm font-medium flex-wrap">
                      {project.technologyStack.map(
                        (technology: string, index: number) => (
                          <li
                            className="mb-2 rounded-full bg-lightpurpleaccent px-1 py-0.5 text-primary text-xs hover:bg-primary hover:text-lightpurpleaccent"
                            key={index}
                          >
                            {technology}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
