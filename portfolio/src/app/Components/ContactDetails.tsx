import React from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactDetails() {
  return (
    <div className="flex flex-col space-y-12 absolute right-0 top-36 justify-items-end items-end">
      <CopyToClipboardButton
        icon={faPhone}
        text={"+48 668 698 369"}
        index={0}
      />
      <CopyToClipboardButton
        icon={faEnvelope}
        text={"krzysztof.snopek1@gmail.com"}
        index={1}
      />
      <CopyToClipboardButton
        icon={faGithub}
        link={"https://github.com/KrzysztofSnopek"}
        index={2}
      />
      <CopyToClipboardButton
        icon={faLinkedin}
        link={"https://www.linkedin.com/in/krzysztof-snopek-49224a238/"}
        index={3}
      />
      <CopyToClipboardButton icon={faDiscord} text={"dracola"} index={4} />
    </div>
  );
}
