import React from "react";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col">
      <p>
        Since I started my journey into web development, I have learned quite a
        few different technologies as I have been getting better. Starting with
        basics like HTML and CSS, I got to know JavaScript, ReactJS framework,
        and typescript later on. My improvement over time can be seen on GitHub
        as I started using it after a few minor projects. I've tried a few ways
        to style the app other than CSS - mainly styled-components and for this
        app Tailwind. I've used firebase to apply authorization to my app and
        deploy it.
      </p>

      <p>
        I decided that my next project would be created by using React Query,
        which can help me simplify and manage my data fetching code, and by
        implementing React state manager in the form of React state manager -
        MobX. The app will be a picture gallery allowing users to upload and
        rate photographs of others. For now I am using firestore as my back-end,
        but the plan is to refactor the code later on and use a database created
        by a friend. We want to create a joint project to simulate a real life
        coding experience to push our git skills to the limit.
      </p>
    </div>
  );
}
