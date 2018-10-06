---
title: '[RN] `console.assert` は WebWorker 外でサポートされていない'
date: 2018-10-06T08:40:21.832Z
slug: rn-console-assert
category: Tech
tags:
  - react-native
  - node
---

[react-native の console の polyfill実装](https://github.com/facebook/react-native/blob/master/Libraries/polyfills/console.js)を見る限り、 `console.assert` はサポートされていない。

だが、依存ライブラリに `console.assert` が呼ばれている場合はままある。
ここで罠なのが、 React Native の Debug JS Remotely を On にしているときは `WebWorker` が起動しているため、`node` の `console.assert` にキャッチされ、一見動いているように見えてしまうことである。

なので、 Debug JS Remotely で動作確認ができたからといって、別途ビルドして起動するとなぜかクラッシュする、のような現象に遭遇してしまう可能性がある。

例として [event-target-shim](https://github.com/mysticatea/event-target-shim) の最新実装では、 `console.assert` を呼んでいる箇所がある。
[該当箇所](https://github.com/mysticatea/event-target-shim/blob/b3e7cddbb2d668745b471127939afd2092466103/src/event.mjs#L36)

[react-native が dependencies で　event-target-shim　　の少し古いバージョン(1.0.5)を指定している](https://github.com/facebook/react-native/blob/master/package.json#L167)のには、このような背景もあるのだろうか。

## 暫定対応

この問題の暫定の回避法として

```sh
$ yarn add assert
```` 

して

```js
import assert from 'assert'
console.assert = assert
```

するという手はある。

[unassert](https://github.com/unassert-js/unassert), [babel-unassert-plugin](https://github.com/unassert-js/babel-plugin-unassert) などを導入しても良いだろう。（ただし、動作に影響を及ぼすかは不明である）
