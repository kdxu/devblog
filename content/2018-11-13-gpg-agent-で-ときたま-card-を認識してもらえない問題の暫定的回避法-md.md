---
title: gpg-agent で ときたま card を認識してもらえない問題の暫定的回避法
date: 2018-11-13T01:47:37.653Z
slug: gpg-card
category: Tech
tags:
  - gpg
  - opengpg
  - yubikey
---
```sh
/usr/local/MacGPG2/libexec/shutdown-gpg-agent
```

を実行して

```sh
gpg-agent --daemon
```

をする。

要は、 `gpg-agent` を再起動する必要がある。
