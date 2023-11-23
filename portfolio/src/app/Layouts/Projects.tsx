import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LinkButton from "./LinkButton";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects(): JSX.Element {
  const galleryTechnologyStack: string[] = [
    "HTML",
    "JavaScript",
    "React",
    "TypeScript",
    "MobX",
    "Tailwind",
    "Firebase",
    "Jest",
  ];

  return (
    <motion.div
      className="w-full relative inline-block py-2 my-4 group"
      id="exp-1"
      initial={{ opacity: 1, y: 0 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-grayaccent to-accent group-hover:from-slate-100 group-hover:via-lightpurpleaccent group-hover:to-purpleaccent opacity-70 group-hover:outline group-hover:outline-2 group-hover:outline-secondary rounded-lg transition-colors duration-700"></div>
      <div className="mx-2 text-sm font-thin text-justify uppercase relative z-10">
        <div className=" h-full group grid grid-cols-1 space-x-8 overflow-hidden text-primary sm:mx-auto sm:grid-cols-6">
          <div className="group relative h-full w-full overflow-hidden col-span-2">
            <Image
              src="/Images/sharepicture.PNG"
              height={400}
              width={800}
              alt=""
              className="h-full w-full border-none object-cover rounded-lg transition group-hover:scale-125 grayscale group-hover:grayscale-0"
            />
            <span className="absolute top-2 left-2 rounded-full bg-lightpurpleaccent px-2 text-xs font-thin text-primary">
              Photo Gallery
            </span>
          </div>
          <div className="col-span-4 flex flex-col space-y-2 pr-8 text-left">
            <div className="flex justify-between">
              <p className="mt-1 overflow-hidden text-2xl font-thin">
                Photo Gallery
              </p>
              <div className="flex">
                <Link
                  href={"https://github.com/KrzysztofSnopek/ShareYourPic"}
                  className="mt-[6px] text-accent group-hover:text-purpleaccent hover:text-primary pr-2 scale-[85%]"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <LinkButton
                  buttonText="live"
                  link="https://show-your-picture.web.app/"
                />
              </div>
            </div>
            <p className="overflow-hidden text-sm text-justify">
              Gallery allowing uploading and browsing through photos stored in a
              database. You can create a profile and engage with content through
              a photo liking system. First testing on components and functions.
              System of minimalistic state management with MobX library.
            </p>

            <div className="flex flex-col text-primary sm:flex-row">
              <ul className="flex h-fit space-x-2 text-sm font-medium flex-wrap">
                {galleryTechnologyStack.map(
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
  );
}
