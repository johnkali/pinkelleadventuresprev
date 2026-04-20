import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EC008C",
        primaryLight: "#F4339F",
        primaryDark: "#C70076",

        secondary: "#489A94",
        secondaryLight: "#5AB5AF",
        secondaryDark: "#367570",
      },
      extend: {
        fontFamily: {
          playfair: ["var(--font-playfair)"], // Uses the variable
        },
      },
    },
  },
  plugins: [],
};

export default config;
