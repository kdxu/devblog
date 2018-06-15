---
title: "fish shell で環境変数を渡すメモ"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "15/06/2018"
category: "tech"
tags:
    - fish shell
    - misc
---

毎回忘れて調べてしまうので、メモ

[https://fishshell.com/docs/current/faq.html](https://fishshell.com/docs/current/faq.html)

```fish
env SOME_VAR=1 command
```

e.g.

```fish
env MIX_ENV=test mix hogehoge
```
