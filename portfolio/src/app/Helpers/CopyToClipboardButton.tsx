import React, { useEffect, useRef, useState } from "react";
import ClipboardJS from "clipboard";
import CopyToClipboardIcon from "../Helpers/CopyToClipboardIcon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CopyToClipboardButton({
  icon,
  text,
  link,
  index,
}: {
  icon: IconProp;
  text?: string;
  link?: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const clipboard1 = new ClipboardJS(`#copy-button-${index}`);

    return () => {
      clipboard1.destroy();
    };
  }, [index]);

  return (
    <div
      className="group flex relative brightness-75 hover:brightness-100"
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className="bg-lightpurpleaccent text-primary px-2 py-1 rounded-lg group-hover:rounded-l-none group-hover:pl-4"
        onMouseEnter={() => setIsHovered(true)}
      >
        <FontAwesomeIcon icon={icon} />
      </span>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="bg-lightpurpleaccent flex px-2 py-1 text-primary font-bold rounded-l-lg absolute right-full mx-auto whitespace-nowrap"
            id={`copy-target-${index}`}
            onMouseLeave={() => setIsHovered(false)}
            initial={{
              transform: "translateX(20px)",
              opacity: 0,
            }}
            animate={{
              transform: "translateX(0px)",
              opacity: [0, 0.1, 0.2, 1],
              transition: { duration: 0.6 },
            }}
            exit={{
              transform: "translateX(20px)",
              opacity: 0,
              transition: { duration: 0.5 },
            }}
          >
            {text && <p className="px-2 pr-4">{text}</p>}
            {link && (
              <Link className="px-2 pr-4" href={link}>
                {link}
              </Link>
            )}
            <div
              data-clipboard-target={`#copy-target-${index}`}
              id={`copy-button-${index}`}
            >
              <CopyToClipboardIcon />
            </div>
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
