module.exports = {
  siteMetadata: {
    title: "Movi",
    description:
      "Aplicación para movi",
    image: "src/images/layout/logo-black.png", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/images/layout/favicon.png`, // This path is relative to the root of the site.
        name: `Movi`,
        short_name: `Movi`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
  ],
};
