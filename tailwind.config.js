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
      minHeight: {
        main_box: "500px",
      },
    },
  },
  plugins: [],
};
