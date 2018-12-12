---
title: React Native で Input View 外をタップしたときキーボードを隠す一番ラクな方法
date: 2018-12-12T16:23:53.722Z
slug: rn-dismiss-keyboard
category: Tech
tags:
  - react-native
---
## Howto

`View` を `ScrollView` にして `bounces` を `false` にすれば良い。

それだけ。


## Why?
`ScrollView` にはタップイベントのハンドラがあり、デフォルトで `Keyboard.dismiss()` を呼ぶようになっている。
