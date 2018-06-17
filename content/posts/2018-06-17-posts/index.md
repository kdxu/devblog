---
title: "gatsby でメモ帳を作って gh-pages にデプロイ＆カスタムドメインを適用するメモ"
date: "17/06/2018"
category: "tech"
tags:
    - javascript
    - gatsby
    - aws
---

このメモ帳サイトを構築したときのメモ。

# gatsby を使う

今回特に強い理由はないが、`material-starter` を使った。

[https://github.com/Vagr9K/gatsby-material-starter](https://github.com/Vagr9K/gatsby-material-starter)

```sh
$ npm install -g gatsby
$ gatsby new devblog https://github.com/Vagr9K/gatsby-material-starter
$ cd ./devblog
```

`./data/SiteConfig.js` を諸々修正。 GA など今回使わない設定を削除する。

```javascript
module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "kdxu dev blog", // Site title.
  siteTitleAlt: "kdxu dev blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://kdxu.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/devblog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "devblog/kdxu", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "kdxu", // Username to display in the author segment.
  userTwitter: "kdxu", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Tokyo", // User location to display in the author segment.
  userAvatar: "https://kdxu.fornothing.net/4aa888496036495f68a5c51dc89d3477.png", // User avatar to display in the author segment.
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
```


この `pathPrefix` の末尾に `/` を付けてたら適切なリダイレクトが行われず、数十分溶けた。

`static/robots.txt` も修正しておく。

これで `gatsby develop` を走らせると、localhost:8000 でサイトが立ち上がっていることが確認できる。


## gatsby の UI 調整

- 今回は cover image を使わないことにしたので、`gatsby-config.json` の `allMarkdownRemark` 等から適宜削除。
- favicon, logo を自前のものに差し替え。
- 日本語のタイトルの記事を出すことが多いので `src/components/SocialLinks/SocialLinks.jsx` 内の指定 url に `encodeURI()` を噛ませておく。
- SEO components 等いらないコンポーネントを取り除いた。
- コードブロックを入れ込むため `gatsby-remark-prismjs` を入れる。
  - [https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)

## gh-pages を適用

gh-pages を追加。

```sh
$ yarn add -D gh-pages
```


package.json の `scripts` に以下の設定を追加する。
```js
  "scripts": {
  ...,
    "build:gh": "npm run clean && npm run build:pp && gh-pages -d public"
  }
```

これで以後 github pages に `yarn build:gh` コマンド一発でデプロイできるようになった。

# Custom Domain の設定

ほぼ AWS 内で完結させた。

- `ACM` で devblog.fornothing.net の証明書を作成する。
- `CloudFront` で kdxu.github.io/devblog と devblog.fornothing.net （とその証明書）を紐付ける。謎にIPv6対応。
- `Route53` で devblog.fornothing.net のAレコードにAliasで先程設定したCloudFlareを指定する。


一通り設定反映されたら `./data/SiteConfig.js` のURLを今回指定したものに変更。
これで無事 `devblog.fornothing.net` にメモ帳を公開することができた。


