import React, { useEffect, useState } from "react";
import ClipboardJS from "clipboard";
import CopyToClipboardIcon from "../Helpers/CopyToClipboardIcon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
  }, []);

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
      {isHovered && (
        <span
          className="bg-lightpurpleaccent flex px-2 py-1 text-primary font-bold rounded-l-lg absolute right-full mx-auto whitespace-nowrap"
          id={`copy-target-${index}`}
          onMouseLeave={() => setIsHovered(false)}
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
        </span>
      )}
    </div>
  );
}
