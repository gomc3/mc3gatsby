const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
      zIndex: {
        "-10": "-10",
      },
      colors: {
        gray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {
      contrast: ["hover"],
      grayscale: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/custom-forms"),
  ],
};
