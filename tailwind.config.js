// tailwind.config.js

import flowbite from 'flowbite/plugin'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: '479px' },
        tablet: '768px',
        desktop: '1024px',
      },
    },
    fontFamily: {
      condensed: ['Roboto Condensed', 'Roboto', 'sans-serif', 'Playfair Display', 'serif'],
      sans: ['Roboto', 'sans-serif', 'Playfair Display'],
      serif: ['serif'],
    },
  },
  plugins: [
    flowbite
  ],
}
