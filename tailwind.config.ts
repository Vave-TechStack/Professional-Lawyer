import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f7fb",
          100: "#dbe8f4",
          200: "#b8d0e9",
          300: "#84b0da",
          400: "#4b84c1",
          500: "#2f649f",
          600: "#234f80",
          700: "#1e4168",
          800: "#183351",
          900: "#10253b"
        },
        gold: {
          50: "#fffaf0",
          100: "#fef2c8",
          200: "#fde48d",
          300: "#f7cd4f",
          400: "#e9b725",
          500: "#c99812",
          600: "#9f750d",
          700: "#7a5a0b",
          800: "#5d440d",
          900: "#45340b"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 37, 59, 0.12)"
      },
      backgroundImage: {
        "law-gradient":
          "linear-gradient(135deg, rgba(16,37,59,0.98) 0%, rgba(30,65,104,0.96) 45%, rgba(159,117,13,0.88) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
