---
title: netlify-cmsを導入したメモ
date: 2018-09-23T16:13:04.083Z
description: netlify-cmsを導入したメモ
---

### netlify-cms 周りの設定

```sh
$ yarn add gatsby-netlify-cms
$ yarn add netlify-cms
```

`gatsby-config.js` の `plugins` に `gatsby-netlify-cms` を配置する

### netlify.toml を設定する

```
[build]
  publish = "public"
  command = "yarn run build"
[build.environment]
  YARN_VERSION = "1.7.0"
```

### static/admin/config.yml に以下の設定を追加

post fields 周りの設定

```
backend:
  name: github # Refer to https://www.netlifycms.org/docs/authentication-backends/ for auth backend list and instructions
  branch: master # Branch to update
  repo: kdxu/devblog # Repo for pushing new commits. Make sure to replace with your repo!

media_folder: static/assets
public_folder: assets

collections:
  - name: blog
    label: "Post"
    folder: "content"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}.md"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Slug", name: "slug", widget: "string"}
      - {label: "Category", name: "category", widget: "string"}
      - {label: "Tags", name: "tags", widget: "list"}
      - {label: "Body", name: "body", widget: "markdown"}

```