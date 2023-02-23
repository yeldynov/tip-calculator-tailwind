/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-strong-cyan': 'hsl(172, 67%, 45%)',
        'c-very-dark-cyan': 'hsl(183, 100%, 15%)',
        'c-dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'c-grayish-cyan': 'hsl(184, 14%, 56%)',
        'c-light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'c-very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
        'c-white': 'hsl(0, 0%, 100%)',
      },
      screens: {
        desk: '375px',
      },
    },
  },
  plugins: [],
};
