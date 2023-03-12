/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'galaxyPurple': '#A143FF',
      'starWhite': '#FBFBFB',
      'oceanTeal': "#9AEADD",
      'observableBlack': "#0F0F0F",
      'rocketPink': '#FF4392',
      'primaryGray': {
        900: '#171717',
        800: '#4B4B4B',
        700: '#252525',
        300: '#979797',
        200: '#C0C0C0',
        100: '#EBEBEB'
      },
      'states': {
        success: '#98FF59',
        error: '#FF2B2B',
        orange: '#FFA943'
      }
    },
    extend: {
      fontFamily: {
        spaceBold: ["Space Grotesk Bold", "sans-serif"],
        spaceRegular: ["Space Grotesk Regular", "sans-serif"],
        spaceMedium: ["Space Grotesk Medium", "sans-serif"],
        spaceSemiBold: ["Space Grotesk SemiBold", "sans-serif"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}