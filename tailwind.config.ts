import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-md': '1050px',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        primary: '#0F183F',
        secondary: '#D72E2F',
      },
      textColor: {
        primary: '#0F183F',
        secondary: '#D72E2F'
      },
      borderColor: {
        primary: '#0F183F',
        secondary: '#D72E2F'
      },
    },
  },
  plugins: [],
};
export default config;
