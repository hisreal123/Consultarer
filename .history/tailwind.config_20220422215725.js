module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/img/svgs/BannerImage.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
