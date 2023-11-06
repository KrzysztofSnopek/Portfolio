import classNames from "classnames";
import { persons } from "../Helpers/valuableInfos";
import { useEffect, useRef, useState } from "react";
import MovingStarsLayout from "./MovingStarsLayout";

function Hero() {
  const [activeItem, setActiveItem] = useState(5);
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  const homeIcon = "faHome";

  return (
    <div className="flex justify-center items-center m-auto h-screen w-full">
      <div className="flex h-full w-full items-center justify-center pointer-events-auto sticky top-0">
        <div className="w-[1400px] max-w-full">
          <ul
            ref={wrapperRef}
            className="group/list flex flex-col gap-3 md:h-[640px] md:flex-row md:gap-[1.5%]"
          >
            {persons.map((person, index) => (
              <li
                onClick={() => setActiveItem(index)}
                aria-current={activeItem === index}
                className={classNames(
                  "relative cursor-pointer md:w-[4%] md:first:w-[1%] md:last:w-[1%] md:[&[aria-current='true']]:w-[68%]",
                  "md:[transition:width_var(--transition,200ms_ease-in)]",
                  "md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-primary",
                  "md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover/list:w-[7%] md:hover:w-[12%]",
                  "first:pointer-events-none last:pointer-events-none md:[&_img]:first:opacity-0 md:[&_img]:last:opacity-0",
                  activeItem === index
                    ? "opacity-100 "
                    : "opacity-50 group/item"
                )}
                key={person.name}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <img
                    className="absolute right-0 top-1/2 h-auto w-24 max-w-none -translate-y-1/2 object-cover grayscale md:left-1/2 md:h-[640px] md:w-[1000px] md:-translate-x-1/2"
                    src={person.img}
                    alt={person.name}
                    width="590px"
                    height="640px"
                  />
                  <div
                    className={classNames(
                      "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity",
                      activeItem === index ? "md:opacity-25 " : "md:opacity-0"
                    )}
                  />
                  <div
                    className={classNames(
                      "left-8 top-8 w-[590px] p-4 transition-[transform,opacity] md:absolute md:p-0",
                      activeItem === index
                        ? "md:translate-x-0 md:opacity-100"
                        : "md:translate-x-4 md:opacity-0"
                    )}
                  >
                    <p className="text-sm uppercase text-primary md:text-lg">
                      {person.title}
                    </p>
                    <p className="text-lg font-bold md:text-4xl">
                      {person.name}
                    </p>
                  </div>
                  <div
                    className={classNames(
                      "absolute h-[640px] w-[154px] flex flex-col justify-start items-center p-4 text-4xl font-bold z-30 opacity-0",
                      activeItem !== index &&
                        "md:group-hover/item:opacity-100 transition-[opacity]"
                    )}
                  >
                    <p className="absolute top-6 left-1/2 -translate-x-1/2">
                      H
                    </p>
                    <p className="-rotate-90 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                      {person.name}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
