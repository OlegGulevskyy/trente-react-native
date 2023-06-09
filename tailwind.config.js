/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["KosugiMaru"],
        coolvetica: ["Coolvetica"],
      },
      textColor: {
        ["blue-primary"]: "#284B63",
        ["yellow-primary"]: "#B68F40",
        ["yellow-lighter"]: "#ebbd60",
        ["light-gray"]: "#353535",
      },
      backgroundColor: {
        ["blue-primary"]: "#284B63",
        ["yellow-primary"]: "#B68F40",
        ["yellow-lighter"]: "#ebbd60",
      },
      borderColor: {
        ["blue-primary"]: "#284B63",
      },
    },
  },
  plugins: ["nativewind/babel"],
};
