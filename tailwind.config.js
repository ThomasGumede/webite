module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'sans2': ['Righteous', 'Poppins', 'sans-serif']
     },
     screens: {
      'xsm': '280px',

      'sm': '768px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
