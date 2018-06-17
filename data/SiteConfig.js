module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "kdxu dev blog", // Site title.
  siteTitleAlt: "kdxu dev blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://devblog.fornothing.net", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "devblog/kdxu", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "kdxu", // Username to display in the author segment.
  userTwitter: "kdxu", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Tokyo", // User location to display in the author segment.
  userAvatar:
    "https://kdxu.fornothing.net/4aa888496036495f68a5c51dc89d3477.png", // User avatar to display in the author segment.
  userDescription: "fixme", // User description to display in the author segment
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/kdxu",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/kdxu",
      iconClassName: "fa fa-twitter"
    }
  ],
  copyright: "" // Copyright string for the footer of the website and RSS feed.
};
