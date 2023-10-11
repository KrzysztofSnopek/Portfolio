import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Socials() {
  return (
    <>
      <div className="nav-bar flex p-4 justify-between text-2xl items-center">
        <Link
          href="https://github.com/KrzysztofSnopek"
          className="flex cursor-pointer text-slate-400 h-6 w-6 text-3xl m-6 hover:text-4xl hover:text-slate-100"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/krzysztof-snopek-49224a238/"
          className="flex cursor-pointer text-slate-400 h-6 w-6 text-3xl m-6 hover:text-4xl hover:text-slate-100"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link
          href="https://www.facebook.com/krzysiek.snopek.1"
          className="flex cursor-pointer text-slate-400 h-6 w-6 text-3xl m-6 hover:text-4xl hover:text-slate-100"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </div>
    </>
  );
}
