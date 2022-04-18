module.exports = {
  siteMetadata: {
    title: "Movi",
    siteUrl: "http://project-landing.s3-website-us-east-1.amazonaws.com/",
    description: "Aplicación para movi",
    image: "src/images/layout/logo-black.png", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-VHCL68SLVP"],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/images/layout/movi-icon.png`, // This path is relative to the root of the site.
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
