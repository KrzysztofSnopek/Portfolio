import { HeroProps } from "./HeroTheme";

export default function Nav({ scrollToComponent }: HeroProps) {
  return (
    <>
      <button
        className="bg-blue-300 hover:bg-blue-400 text-white px-4 py-2 rounded mb-2"
        onClick={() => scrollToComponent("about")}
      >
        Scroll to About
      </button>
      <button
        className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
        onClick={() => scrollToComponent("projects")}
      >
        Scroll to Projects
      </button>
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => scrollToComponent("contact")}
      >
        Scroll to Contacts
      </button>
    </>
  );
}
