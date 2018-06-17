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

# gatsbyを使う

今回特に強い理由はないが、material-starterを使った。

[https://github.com/Vagr9K/gatsby-material-starter](https://github.com/Vagr9K/gatsby-material-starter)

```sh
$ npm install -g gatsby
$ gatsby new devblog https://github.com/Vagr9K/gatsby-material-starter
$ cd ./devblog
```

`./data/SiteConfig.js` を諸々修正。 GAなど今回使わない設定を削除する。

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

これで `gatsby develop` を走らせると、localhost:8000でサイトが立ち上がっていることが確認できる。

## gatsbyのUI調整

- 今回はcover imageを使わないことにしたので、`gatsby-config.json` の `allMarkdownRemark` 等から適宜削除。
- favicon, logoを自前のものに差し替え。
- 日本語のタイトルの記事を出すことが多いので `src/components/SocialLinks/SocialLinks.jsx` 内の指定urlに `encodeURI()` を噛ませておく。
- SEO components等いらないコンポーネントを取り除いた。
- コードブロックを入れ込むため `gatsby-remark-prismjs` を入れる。
    - [https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)


## textlintの導入

```sh
$ yarn add -D textlint
$ yarn add -D textlint-rule-max-ten textlint-rule-spellcheck-tech-word textlint-rule-no-mix-dearu-desumasu textlint-rule-preset-jtf-style # 日本語向けルールの追加
```

`.textlintrc` を追加して、

```
{
  "rules": {
    "max-ten": {
      "max": 3
    },
    "spellcheck-tech-word": true,
    "no-mix-dearu-desumasu": true,
    "preset-jtf-style": true
  }
}
```


scriptsに以下の設定を追加する

```javascript
  "scripts": {
  ...,
    "lint:ja": "textlint  ./content/posts/",
  }
```

そうすると

```fish
kyoko@virgo ~/p/devblog (master)> yarn lint:ja
```

を実行することで

```
yarn run v1.7.0
$ textlint ./content/posts/

/Users/kyoko/private/devblog/content/posts/2018-06-17-posts/index.md
   13:9   ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   15:30  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   25:33  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   65:43  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   67:10  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   67:12  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   67:15  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   69:6   ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   69:18  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   70:16  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   71:74  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   71:78  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   72:17  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
   77:12  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  100:8   ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  111:12  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  113:9   ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  120:13  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  129:6   ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  129:19  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  131:16  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  133:3   ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  133:7   ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  135:10  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  135:33  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  136:17  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  136:40  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  136:42  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  136:65  ✓ error  かっこの外側、内側ともにスペースを入れません。              preset-jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無
  137:14  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間
  137:37  ✓ error  原則として、全角文字と半角文字の間にスペースを入れません。  preset-jtf-style/3.1.1.全角文字と半角文字の間

✖ 31 problems (31 errors, 0 warnings)
✓ 31 fixable problems.
Try to run: $ textlint --fix [file]

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

文章のチェックを行うことができる。


## gh-pagesを適用

gh-pagesを追加。

```sh
$ yarn add -D gh-pages
```


package.jsonの `scripts` に以下の設定を追加する。

```js
  "scripts": {
  ...,
    "build:gh": "npm run clean && npm run build:pp && gh-pages -d public"
  }
```

これで以後GitHub pagesに `yarn build:gh` コマンド一発でデプロイできるようになった。

# Custom Domainの設定

ほぼAWS内で完結させた。

- `ACM` でdevblog.fornothing.netの証明書を作成する。
- `CloudFront` でkdxu.github.io/devblogとdevblog.fornothing.net（とその証明書）を紐付ける。謎にIPv6対応。
- `Route53` でdevblog.fornothing.netのAレコードにAliasで先程設定したCloudFlareを指定する。


一通り設定反映されたら `./data/SiteConfig.js` のURLを今回指定したものに変更。

これで無事 `devblog.fornothing.net` にメモ帳を公開することができた。
