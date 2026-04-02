export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        gold: "#D4AF37",
        dark: "#0B0B0B",
      },
      boxShadow: {
        glow: "0 0 15px rgba(212,175,55,0.6)",
      },
    },
  },
};