import React from "react";

export default function Projects(): JSX.Element {
  return (
    <div className="w-full">
      <div className="flex justify-center flex-col items-center">
        <div className="flex z-10">
          <div>
            <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
              <a
                href="#"
                className="col-span-2 text-left text-gray-600 hover:text-gray-700"
              >
                <div className="group relative h-full w-full overflow-hidden">
                  <img
                    src="/Images/sharepicture.PNG"
                    alt=""
                    className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125 grayscale group-hover:grayscale-0"
                  />
                  <span className="absolute top-2 left-2 rounded-full bg-lightpurpleaccent px-2 text-xs font-semibold text-primary">
                    Project name
                  </span>
                </div>
              </a>
              <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left">
                <a
                  href="#"
                  className="mt-3 overflow-hidden text-2xl font-semibold"
                >
                  What is it about
                </a>
                <p className="overflow-hidden text-sm">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna .
                </p>

                <div className="flex flex-col text-gray-700 sm:flex-row">
                  <div className="flex h-fit space-x-2 text-sm font-medium">
                    <div className="rounded-full bg-lightpurpleaccent px-2 py-0.5 text-primary">
                      Technology 1
                    </div>
                  </div>
                  <a
                    href="#"
                    className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 sm:ml-auto"
                  >
                    Check online button space
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
