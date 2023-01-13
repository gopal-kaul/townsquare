/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aveFedan: ['var(--aveFedan-font)'],
      },
      colors: {
        titleColor: "#DBE0FF",
        purple: "#C358B3",
        blue: "#CCD0FF",
      },
      fontSize: {
        titleSize: "64px",
      },
    },
  },
  plugins: [],
};
