import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        counseling: {
          light: '#eff0ff',
          DEFAULT: '#d0d1ff',
          dark: '#b8c0ff',
        },

        accent: {
          light: '#bce3d6',
          DEFAULT: '#469d85',
          dark: '#275146',
        },

        white: '#ffffff',
        black: '#0f172a',
        gray: {
          light: '#f1f5f9',
          DEFAULT: '#64748b',
          dark: '#334155',
        },
      },
      fontFamily: {
        serif: ['var(--font-lora)'],
        sans: ['var(--font-nunito)'],
      },
    },
  },
  plugins: [],
};

export default config;