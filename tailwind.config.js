/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-25deg)" },
        },
        slide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        backgroundPosRight: {
          '0%': { 'background-position': 'top left' },
          '100%': { 'background-position': 'top left 100%' },
        }
      },
      animation: {
        pour: "wiggle 1s ease-in-out",
        overlay: "slide 1s both",
        itemOne: "slide 1.3s both",
        itemTwo: "slide 1.4s both",
        itemThree: "slide 1.6s both",
        textGradient: "backgroundPosRight 1s both"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      dropShadow: {
        'text': '1px 2px 1px black'
      }
    },
    fontFamily: {
      sans: ['Roboto']
    }
  },
  plugins: [],
};
