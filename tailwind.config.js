/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: "1440px",
      md: "768px",
    },
    colors: {
      textGray: "#D0D6F9",
      textDark: "#0B0D17",
      white: "#ffffff",
      blue: "#0000ff",
    },
    backgroundImage: {
      backgroundHomeMobile: "url('./assets/home/background-home-mobile.jpg')",
      backgroundHomeTablet: "url('./assets/home/background-home-tablet.jpg')",
      backgroundHomeDesktop: "url('./assets/home/background-home-desktop.jpg')",
      backgroundDestinationMobile:
        "url('./assets/destination/background-destination-mobile.jpg')",
      backgroundDestinationTablet:
        "url('./assets/destination/background-destination-tablet.jpg')",
      backgroundDestinationDesktop:
        "url('./assets/destination/background-destination-desktop.jpg')",
      backgroundCrewMobile: "url('./assets/crew/background-crew-mobile.jpg')",
      backgroundCrewTablet: "url('./assets/crew/background-crew-tablet.jpg')",
      backgroundCrewDesktop: "url('./assets/crew/background-crew-desktop.jpg')",
      backgroundTechnologyMobile:
        "url('./assets/technology/background-technology-mobile.jpg')",
      backgroundTechnologyTablete:
        "url('./assets/technology/background-technology-tablet.jpg')",
      backgroundTechnologyDesktop:
        "url('./assets/technology/background-technology-desktop.jpg')",
    },
    boxShadow: {
      max: "0px 0px 0px 40px rgba(255,255,255,0.1036)",
    },
    letterSpacing: {
      wide: "1.25px",
      widest: "2.7px",
    },
    fontFamily: {
      BarlowCondensed: ["Barlow Condensed", "sans-serif"],
      Bellefair: ["Bellefair", "sans-serif"],
    },
  },
  plugins: [],
};
