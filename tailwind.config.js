const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    // './src/**/*.html',
    './src/**/*.js',
    '*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'm-phone': '375px',
      // => @media (min-width: 375px) { ... }

      'l-phone': '425px',
      // => @media (min-width: 425px) { ... }

      's-tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'm-tablet': '1024px',
      // => @media (min-width: 1024px) { ... }

      's-laptop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'm-laptop': '1366px',
      // => @media (min-width: 1366px) { ... }

      'l-laptop': '1440px',
      // => @media (min-width: 1440px) { ... }

      'xl-laptop': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Helvetica Now Light', ...defaultTheme.fontFamily.sans],
        normal: ['Helvetica Now Regular', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('postcss-100vh-fix')
  ],
}