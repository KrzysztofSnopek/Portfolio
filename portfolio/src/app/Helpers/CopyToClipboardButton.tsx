import React, { useEffect } from "react";
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
  useEffect(() => {
    const clipboard1 = new ClipboardJS(`#copy-button-${index}`);

    return () => {
      clipboard1.destroy();
    };
  }, []);

  return (
    <div className="group flex relative brightness-75 hover:brightness-100">
      <span className="bg-lightpurpleaccent text-primary px-2 py-1 rounded-lg group-hover:rounded-l-none group-hover:pl-4">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span
        className="group-hover:opacity-100 transition-[opacity] bg-lightpurpleaccent flex px-2 py-1 text-primary font-bold rounded-l-lg absolute right-full opacity-0 mx-auto whitespace-nowrap"
        id={`copy-target-${index}`}
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
    </div>
  );
}
