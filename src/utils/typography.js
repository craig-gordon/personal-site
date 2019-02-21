import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Didact Gothic',
      styles: [
        '400'
      ]
    },
    {
      name: 'PT Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i'
      ]
    }
  ],
  headerFontFamily: [
    'Didact Gothic',
    'Helvetica Neue',
    'sans-serif'
  ],
  bodyFontFamily: [
    'PT Sans',
    'Open Sans',
    'sans-serif'
  ]
});

export default typography;