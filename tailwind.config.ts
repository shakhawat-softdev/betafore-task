import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#00b4b4",
          dark: "#009090",
          light: "#e6f9f9",
        },
        winDark: "#222831",
        winGray: "#393e46",
      },
    },
  },
  plugins: [],
};
export default config;
