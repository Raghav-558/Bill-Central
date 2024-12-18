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
        "light-gray": "#4B4B4B",
        "light-green": "#EAF9FF",
        "dark-gray": "#00000014",
        "light-shadow": "#0000001a",
        "light-black":"#010101"
      },
      screens: {
        xlg: '1050px',
        lg: '1025px',
        md: '770px',
      },
      fontSize: {
        'custom-28': '28px',
        'custom-32': '32px',
        'custom-38': '38px',
        'custom-64': '64px',
      },
    },
  },
  plugins: [],
}