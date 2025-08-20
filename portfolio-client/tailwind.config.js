/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#18d26e",
        grayText: "#777",
        cyan: "#00ffff",
        pink: "#ff6ec4",
        emerald: "#18d26e",
      },
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
