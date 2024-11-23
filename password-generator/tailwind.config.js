/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#F64A4A",
        orange: "#FB7C58",
        yellow: "#F8CD65",
        "neon-green": "#A4FFAF",
        "almost-white": "#E6E5EA",
        gray: "#817D92",
        "dark-gray": "#24232C",
        "very-dark-gray": "#18171F",
        "body-color": "#08070B",
      },
      fontFamily: {
        "jetBrain-mono": "'JetBrains Mono', monospace",
      },
      backgroundImage: {
        "body-gradient": "linear-gradient(to bottom, #14131B, #08070B)",
      },
    },
  },
  plugins: [],
};
