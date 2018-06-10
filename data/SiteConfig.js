module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "kdxu devblog", // Site title.
  siteTitleAlt: "kdxu dev log", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://kdxu.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "kdxu.github.io/devblog/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A GatsbyJS stater with Material design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  disqusShortname: "https-kdxu-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "kdxu", // Username to display in the author segment.
  userTwitter: "kdxu", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "fixme", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
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
    },
    {
      label: "Email",
      url: "mailto:kyoko.kadowaki@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "" // Copyright string for the footer of the website and RSS feed.
};
