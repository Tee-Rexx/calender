/** @type {import('tailwindcss').Config} */
const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
  "peach",
  "dark-green",
  "beige"
];

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    //Because we made a dynamic class with the label we need to add those clases
    // to the safe list so the purge does not remove that
    safelist: [
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`)
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"]
      },
      fontSize: {
        xlg: ['24px', '26px'],
      }
      ,colors: {
        'peach': '#efb6b0',
        'beige' : '#dac58c',
        'dark-green' : '#485f3b',
        'light-blue':'#93b1d4',
        'cream':'#faf4ee'
      },

      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      },
      boxShadow: {
        '3xl': '0 35px 35px rgb(0, 0, 0,0.20)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
}


