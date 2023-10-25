import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavHamburger() {
  return (
    <>
      <nav className="flex justify-center items-center p-4 w-20 h-20 bg-slate-800 rounded-full shadow-md text-2xl cursor-pointer hover:before:content-['Menu'] hover:my-2 hover:text-slate-200 hover:text-sm group">
        <div className="text-slate-400 relative">
          <FontAwesomeIcon className="group-hover:hidden" icon={faBars} />
        </div>
      </nav>
    </>
  );
}
