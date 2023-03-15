/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["KosugiMaru"],
      },
      textColor: {
        ["blue-primary"]: "#284B63",
        ["yellow-primary"]: "#B68F40",
      },
      backgroundColor: {
        ["blue-primary"]: "#284B63",
        ["yellow-primary"]: "#B68F40",
      },
    },
  },
  plugins: ["nativewind/babel"],
};
