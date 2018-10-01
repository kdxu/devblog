---
title: react-native 0.57 を Xcode 10 に対応させる
date: 2018-10-01T14:54:15.102Z
slug: xcode-rn
category: Tech
tags:
  - react-native
  - iOS
  - xcode
---
- [https://github.com/facebook/react-native/issues/19573](issue)

react-native 0.57 はXcode 10 の新しい build system に対応していない。

暫定策: `xcodebuild` の option に `-UseModernBuildSystem=NO` を付与する。
