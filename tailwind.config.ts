import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "infinite-scroll":{
          "0%": {transform: 'translateX(0%)'},
          "100%": {transform: 'translateX(calc(-100% * 2))'}
        }
      },
      animation:{
        "infinite-scroll": 'infinite-scroll 30s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
