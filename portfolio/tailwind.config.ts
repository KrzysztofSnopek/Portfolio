import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        code: "url('/Images/Code.jpg')",
        smoke: "url('/Images/SmokySky.jpg')",
        texture:
          "url(/glow-texture.png), radial-gradient(var(--color-primary), transparent 70%)",
      },
      boxShadow: {
        flip: "0 0px 0px 100px rgba(51, 65, 85, 1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
