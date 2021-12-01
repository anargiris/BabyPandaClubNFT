module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serifdm: ['"DM Serif Display"', "serif"],
        abel: ['"Abel"', "sans-serif"],
        knew: ['"Faustina"', "serif"],
      },
      colors: {
        bg: "#fefee3",
        "green-main": "#2c6e49",
        "green-secondary": "#4c956c",
        "pink-main": "#ffc9b9",
        "bg-dark": "#323232",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
