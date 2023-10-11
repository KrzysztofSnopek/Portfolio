import { HeroProps } from "./HeroTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
  faNoteSticky,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav({ scrollToComponent }: HeroProps) {
  return (
    <>
      <nav className="nav-bar flex flex-col p-4 my-6 w-20 bg-slate-900 rounded-full justify-between shadow-md text-2xl h-96 items-center">
        <div
          className="cursor-pointer pt-4 text-slate-400 hover:before:content-['Home'] hover:text-slate-200 hover:text-sm group h-16 flex"
          onClick={() => scrollToComponent("about")}
        >
          <FontAwesomeIcon className="group-hover:hidden" icon={faHome} />
        </div>
        <div className="cursor-pointer p-2 text-slate-400 hover:before:content-['About'] hover:text-slate-200 hover:text-sm group h-16 flex">
          <FontAwesomeIcon
            className="group-hover:hidden"
            icon={faUser}
            onClick={() => scrollToComponent("projects")}
          />
        </div>

        <div className="cursor-pointer p-2 text-slate-400 hover:before:content-['Projects'] hover:text-slate-200 hover:text-sm group h-16 flex">
          <FontAwesomeIcon
            className="group-hover:hidden"
            icon={faNoteSticky}
            onClick={() => scrollToComponent("projects")}
          />
        </div>

        <div className="cursor-pointer p-2 text-slate-400 hover:before:content-['Resume'] hover:text-slate-200 hover:text-sm group h-16 flex">
          <FontAwesomeIcon
            className="group-hover:hidden"
            icon={faDownload}
            onClick={() => scrollToComponent("resume")}
          />
        </div>

        <div className="cursor-pointer p-2 text-slate-400 hover:before:content-['Skills'] hover:text-slate-200 hover:text-sm group h-16 flex">
          <FontAwesomeIcon
            className="group-hover:hidden"
            icon={faScrewdriverWrench}
            onClick={() => scrollToComponent("contact")}
          />
        </div>

        <div className="cursor-pointer p-2 pb-4 text-slate-400 hover:before:content-['Contact'] hover:text-slate-200 hover:text-sm group h-16 flex">
          <FontAwesomeIcon icon={faEnvelope} className="group-hover:hidden" />
        </div>
      </nav>
    </>
  );
}
