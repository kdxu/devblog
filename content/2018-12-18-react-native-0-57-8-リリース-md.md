---
title: React Native 0.57.8 リリース
date: 2018-12-17T15:56:26.955Z
slug: rn-0578
category: Tech
tags:
  - react-native
---
[https://github.com/facebook/react-native/releases/tag/v0.57.8](https://github.com/facebook/react-native/releases/tag/v0.57.8)

これはただの日本語訳とcode diffの概要。

このアップデートにより、 `react` 及び　`react-test-renderer` のバージョンを 16.6.3 に上げる必要が出た。


## 追加
- `ActivitiIndicator` に `displayName` プロパティが追加された。

## 変更
- `Switch`　に `accessibilityRole`　プロパティが追加された。これにより、Android と iOS の統一性が担保された。
- [iOS] `RCTFatalException` に `reason message` 拡張が入った
- `React v16.6.3` のバージョンに追従した

## 削除
- websocket server で port　が指定されていない場合、末尾の　`/` が `trail` されるようになった

## 修正
- [Android] text style の alpha 属性のバグを修正
- [Android] `StatusBarModule` に `styles` が当たっていないときのぬるぽを回避
- [iOS] GIF アニメーションのループが正しく止まらない・ループしない不具合の修正
- `ListEmptyComponent` が `inverted` flag を使っているときに上下逆さになる不具合の修正
- `Object` 同士の比較のロジックを修正
   - `two.hasOwnProperty(key)` -> `!Object.prototype.hasOwnProperty.call(two, key)`
- `OnLayout`　イベントの初期呼び出し時の挙動の修正
- `KeyboardAvoidingView`　の `duration` が `10ms` 以下に設定できないよう修正
- [iOS] `WebView` で iOS 10 以下をサポートするため `mediaPlaybackRequiresUserAction` の属性を付与
- [iOS] production build では `main.jsbundle` を指定するようテンプレートを修正
    - https://facebook.github.io/react-native/docs/running-on-device#3-configure-app-to-use-static-bundle
- [iOS] `SCRIPTDIR` を相対パスで指定するよう修正
- [iOS]`UIScrollView` がクラッシュする不具合を修正
- [iOS] ユーザが入力しているときは `[UITextView setAttributedString:]` を呼ばないよう修正
   - これにより、1文字打つたびに state 更新が呼ばれることがなくなった（はず）

## セキュリティ
- 脆弱性のあった `WebSocket` パッケージのバージョンが上げられた。
