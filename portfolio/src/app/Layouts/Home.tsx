import React from "react";
import PhotoBlob from "../Components/Hero/PhotoBlob";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col px-2">
      <p>Krzysztof Snopek</p>
      <p>
        Since I started my journey into web development, I have learned quite a
        few different technologies as I have been getting better. Starting with
        basics like HTML and CSS, I got to know JavaScript, ReactJS framework,
        and typescript later on.
      </p>
      <p>
        Looking for a work as junior frontend developer, I'm eager to contribute
        and apply my web development and design skills in a professional
        setting. I'm ready to make an impact and actively contribute to
        projects!
      </p>
      <div>
        <p>1+</p>
        <p>year of non-commercial experience</p>
      </div>
      <p>knowledge hungry</p>
      <p>in love with web animations</p>
      <div className="relative h-48 w-48">
        <div className="relative h-48 w-48 overflow-hidden rounded-full z-10">
          <img
            className="absolute right-0 top-1/2 max-w-none -translate-y-1/2 object-contain grayscale left-1/2 h-[640px] w-[1000px] -translate-x-1/2 scale-75"
            src="/Images/Hero.jpg"
            alt="my photo"
            width="590px"
            height="640px"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 max-w-none -translate-y-1/2 -translate-x-1/2">
          <PhotoBlob />
        </div>
      </div>
    </div>
  );
}
