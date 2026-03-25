import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "#EDEDED",
          container: "#f4f3f3",
          low: "#F8F9FC",
          highest: "#ffffff",
        },
        primary: {
          DEFAULT: "#121317",
          inverse: "#F8F9FC",
          button: "#1F1F1F",
          container: "#1b1b1c"
        },
        secondary: {
          DEFAULT: "#C5BDAD", 
        },
        accent: {
          DEFAULT: "#2FA1D6",
        }
      },
      fontFamily: {
        display: ['var(--font-plus-jakarta)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        pill: '9999px',
      }
    },
  },
  plugins: [],
};
export default config;
