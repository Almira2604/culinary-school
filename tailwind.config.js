/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "navbar-bg-color": "#fe5",
        "app-red": "#ec3237",
      },
      backgroundImage: {
        "home-bg-img": "url('./assets/1_Month.jpg')",
      },
      textColor: {
        "app-red": "#ec3237",
        "dark-blue": "#1d293f",
      },
      fontFamily: {
        "font-play": "Playfair Display Georgia serif",
      },
      fontColor: {
        "dark-blue": "#1d293f",
      },
    },
  },
  plugins: [],
};

