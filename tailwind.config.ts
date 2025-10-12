import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0e5d88",
          dark: "#002C6B",
          gold: "#F4C430",
          blue50: "#E9F1FB",
        },
      },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};
export default config;
