module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        stepBackDesk: "url('/bg-sidebar-desktop.svg')",
        stepBackMob: "url('/bg-sidebar-mobile.svg')",
      },
      colors: {
        pr: "hsl(206, 94%, 87%)",
        se: "hsl(228, 100%, 84%)",
        tr: "hsl(243, 100%, 62%)",
      },
      fontFamily: {
        Ub: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
