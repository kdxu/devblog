---
title: react-native 0.57 変更点ハイライト
date: 2018-09-24T15:05:54.270Z
slug: reactnative057
category: tech
tags:
  - react-native
  - mobile
---
[CHANGELOG](https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md#057)

自分用まとめ

## 新機能
- `WebView` コンポーネントに `useWebKit={true}` と指定することで `WKWebView`　として使えるようになった
- `accessibility` に対するAPIが変更された
  - [該当post](https://facebook.github.io/react-native/blog/2018/08/13/react-native-accessibility-updates)
- サードパーティプラットフォームの組み込みやすさに改善が入った

## ツール
- Android tooling が　SDK 27, gradle 4.4 等にアップデートされた。
  - gradle scripts の関係で Android Studio 3.2 では動かないので今はまだ 3.1 を使ってくれよ！とのこと
- `babel7` がサポートされた
  - [babel@v7 のマイグレーションガイド](https://babeljs.io/docs/en/next/v7-migration)
- `babel7`　対応に関連して `metro`　のアップグレードがされた

## ダイエット告知

メンテしやすさの為、コア機能以外の機能のパッケージを分割したり削除したりするらしい。

以下、 v0.57 ではまだ動くけど、いずれ使えなくなると告知されたもの

- `WebView` が [別リポジトリ](https://github.com/react-native-community/react-native-webview) に移動。
   - なので `react-native` 自身の `WebView` は今後使えなくなる。
- `NavigatorIOS` コンポーネントは 0.58 で削除される。


