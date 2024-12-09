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
        "navy-blue": "#003459",
        "sky-blue": "#00A8E8",
        "light-blue": "#E6F4F8",
        "light-gray":"#4B4B4B"
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