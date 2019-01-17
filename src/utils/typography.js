import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Varela Round',
      styles: [
        '400',
        '700'
      ]
    }
  ],
  headerFontFamily: [
    'Helvetica Neue',
    'sans-serif'
  ],
  bodyFontFamily: [
    'Varela Round',
    'sans-serif'
  ]
});

export default typography;