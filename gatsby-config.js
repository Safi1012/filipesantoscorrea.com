module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `600`]
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Filipe Santos Correa`,
        short_name: `Filipe`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0873e8`,
        display: `standalone`,
        icon: `assets/appicon.png`,
        include_favicon: true,
      },
    },
  ],
}
