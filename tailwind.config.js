/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: '#EFEFEF',
        'light-blue': '#6680C0',
        'dark-blue': '#172433',
        black: '#1A161F',
      },
      fontFamily: {
        slick: ['Slick', 'sans-serif'],
      },
      backgroundColor: {
        'dark-purple': '#10010e',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
