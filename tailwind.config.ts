import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-selection": "#727272",
        "gray-selection-1": "#5b5b5b",
        "gray-input": "#c6c6c6",
        "gray-border": "#505050",
        "gray-button": "#1b1b1b",
        "gray-copyright": "#727272",
        "light-1": "#E7E7E7",
        "author-photo-bg": "#0a0b0d",
      },
      margin: {
        "13": "3.25rem",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
    },
  },
  plugins: [],
};
export default config;
