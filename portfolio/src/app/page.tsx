import HeroTheme from "./Components/HeroTheme";
import About from "./Layouts/About";
import Contact from "./Layouts/Contact";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/3 h-screen">
        <HeroTheme />
      </div>
      <main className="w-2/3 h-screen overflow-y-scroll">
        <About />
        <Contact />
      </main>
    </div>
  );
}
