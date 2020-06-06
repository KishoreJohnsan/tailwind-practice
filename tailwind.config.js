module.exports = {
    purge: [
      '*.html',     
    ],
    theme: {
      extend: {
        screens: {
          'dark-mode': { raw: '(prefers-color-scheme: dark)' }
        }
      },
        fontFamily: {
            display: ['Gilroy', 'sans-serif'],
            body: ['Manrope', 'sans-serif'],
          },
    },
    variants: {},
    plugins: [],
  }