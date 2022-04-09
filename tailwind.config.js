module.exports = {
  prefix: 'b',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  safelist: [
    'bspace-y-6',
    'blist-disc',
    'bmt-12'
  ],
  theme: {
    screens: {
      'md': '750px',
      'lg': '990px',
    },
    extend: {
      colors: {
        'beige': '#E1DBCA',
        'honey': '#C08F2C',
        'd-gray': '#38333E'
      },
      fontFamily: {
        'heading': '"Berringer", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;'
      },
      fontSize: {
        xs: ['1.2rem', { lineHeight: '1.6rem' }],
        sm: ['1.4rem', { lineHeight: '2.0rem' }],
        base: ['1.6rem', { lineHeight: '2.4rem' }],
        lg: ['1.8rem', { lineHeight: '2.8rem' }],
        xl: ['2.0rem', { lineHeight: '2.8rem' }],
        '2xl': ['2.4rem', { lineHeight: '3.2rem' }],
        '3xl': ['3.0rem', { lineHeight: '3.6rem' }],
        '4xl': ['3.6rem', { lineHeight: '4.0rem' }],
        '5xl': ['4.8rem', { lineHeight: '1' }],
        '6xl': ['6.0rem', { lineHeight: '1' }],
        '7xl': ['7.2rem', { lineHeight: '1' }],
        '8xl': ['9.6rem', { lineHeight: '1' }],
        '9xl': ['12.8rem', { lineHeight: '1' }],
      }
    },
  },
  plugins: [],
}
