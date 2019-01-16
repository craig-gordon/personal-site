module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true
      }
    },
    {
      resolve: 'gatsby-plugin-tslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/
      }
    }
  ]
}