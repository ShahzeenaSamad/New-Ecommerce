import type { Config } from "tailwindcss";

export default {
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
      },
    },
  },
  plugins: [],
} satisfies Config;

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths based on your project
  ],
  theme: {
    extend: {
      keyframes: {
        spinCircle: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(25px, 0) rotate(90deg)" },
          "50%": { transform: "translate(20px, 25px) rotate(90deg)" },
          "75%": { transform: "translate(0, 25px) rotate(90deg)" },
          "100%": { transform: "translate(0, 0) rotate(90deg)" },
        },
      },
      animation: {
        spinCircle: "spinCircle 3s linear infinite",
      },
    },
  },
  plugins: [],
};