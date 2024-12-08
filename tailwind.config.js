/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/public/assets/images/webp/hero-bg-image.webp')",
      },
      colors: {
        "dark-blue": "#00171f",
        "nav-bg": "#003459",
        "sky-blue": "#00A8E8"
      },
      screens: {
        xlg: '1050px',
        lg: '1025px',
        md: '770px',
      },
    },
  },
  plugins: [],
}