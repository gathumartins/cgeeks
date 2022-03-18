module.exports = {
  siteMetadata: {
      title: `Creative Geeks Limited`,
    siteUrl: `https://www.creativegeeks.co.ke`
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://back.creativegeeks.co.ke/graphql",
      schema: {
        perPage:60,
        timeout: 60000
      }
    }
  }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-react-helmet", 
  "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};