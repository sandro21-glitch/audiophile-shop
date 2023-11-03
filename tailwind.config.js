/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#191919",
        "orange-brown": "#d87d4a",
        "orange-brown-light": "#fbaf85",
        textLight: "rgba(255,255,255,0.5)",
        "text-white": "#fff",
        text: "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
