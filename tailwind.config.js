module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fira: ["Fira Sans"],
    },
    extend: {
      maxWidth: {
        mainFomr: "300px",
      },
      colors: {
        "regal-blue": "#1A86B5",
        "black-blue": "#04002A",
        "grean-950": "#037271",
      },
      backgroundImage: {
        main: "url('/assest/bg2.jpg')",
        contact: "url('/assest/bg.jpg')",
        circle:
          "linear-gradient(49.31deg, #1A86B5 38.58%, #001438 83.87%), linear-gradient(159.32deg, #C4C4C4 -133.43%, rgba(189, 189, 189, 086.3%), linear-gradient(159.32deg, #C4C4C4 -133.43%, rgba(189, 189, 189, 0 86.3%)",
        process: "linear-gradient(102.19deg, #000000 1.05%, #04002F 95.99%)",
        "main-balck":
          "background: linear-gradient(102.19deg, #000000 1.05%, #04002F 95.99%);",
      },
      lineHeight: {
        main: "140.6%",
        portfolio: "2.5",
      },
      fontSize: {
        mainTitle: "45px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: ".8rem",
          md: "2rem",
        },
      },
    },
  },
  plugins: [],
};
