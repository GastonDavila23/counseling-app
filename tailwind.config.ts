import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        counseling: {
          50: '#f4f7f5', 
          100: '#e3ebe5',
          500: '#5c8d73',
          600: '#4a725c', 
          900: '#1f3126', 
        },
        accent: {
          500: '#d4a373',
          600: '#b08253',
        },
      },
    },
  },
  plugins: [],
};

export default config;