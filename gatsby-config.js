module.exports = {
  siteMetadata: {
    siteUrl: `https://filipesantoscorrea.com`,
  },
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/privacy", `/legal`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137805599-1",
        head: true,
        anonymize: true,
        respectDNT: true
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://filipesantoscorrea.com',
        sitemap: 'https://filipesantoscorrea.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow: ["/privacy", "/legal"], }]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ],
}
