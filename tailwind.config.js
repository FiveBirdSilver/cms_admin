/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_color: "#6ab8fd",
      },
      fontFamily: {
        PretendardR: ["PretendardR"],
        PretendardM: ["PretendardM"],
      },
      gridTemplateColumns: {
        main_grid: "6fr 4fr",
      },
      minHeight: {
        main_box: "550px",
      },
    },
  },
  plugins: [],
};
