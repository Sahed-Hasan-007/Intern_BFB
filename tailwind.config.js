/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
          customYellow: '#EBFF3D', // Light blue color
          customGreen: '#1F4E37', // Lime green color
          customOrange: '#FFA500', // Orange color
      },
  },
  },
  plugins: [],
}
