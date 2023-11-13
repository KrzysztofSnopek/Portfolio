import React, { useEffect } from "react";
import ClipboardJS from "clipboard";
import CopyToClipboardIcon from "../Helpers/CopyToClipboardIcon";

export default function ContactDetails() {
  useEffect(() => {
    const clipboard1 = new ClipboardJS("#copy-button-1");

    return () => {
      clipboard1.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col space-y-16 absolute right-0 top-28 justify-items-end items-end">
      <div className="group flex relative">
        <span
          className="bg-primary text-lightpurpleaccent px-2 py-1 rounded-lg group-hover:rounded-l-none group-hover:pl-4"
          data-clipboard-target="#copy-target-1"
          id="copy-button-1"
        >
          Button
        </span>
        <span
          className="group-hover:opacity-100 transition-opacity duration-500 bg-primary flex px-2 py-1 text-lightpurpleaccent rounded-l-lg absolute right-full opacity-0 mx-auto w-[150%] whitespace-nowrap"
          id="copy-target-1"
        >
          <p className="px-2">my phone</p>
          <CopyToClipboardIcon />
        </span>
      </div>
    </div>
  );
}
