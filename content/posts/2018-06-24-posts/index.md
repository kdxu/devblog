---
title: "OCaml ヤリナオシ(1)"
date: "24/06/2018"
category: "tech"
tags:
    - ocaml
---

OCamlの復習をしようと思う。

# セットアップ

環境はmacOS + neovim。
Windowsでやる気力は流石に無い。

## OCaml, opamを入れる

homebrewで入る。Graphicsを使いたいので`--with-x11` オプションを付ける。
xquartzが無いと怒られたので、入れる。

```shell-session
$ brew install ocaml --with-x11
```

```shell-session
$ brew cask install xquartz
```

```shell-session
$ brew install opam
$ opam init
```

自分はfish shellを使っているので、`~/.config/fish/config.fish` に以下の様に設定する。

```fish
# opam
eval (direnv hook fish)
```

## rlwrapを入れる

そのままの `ocaml` だと対話環境下で矢印キーで移動できない。

[rlwrap](https://github.com/hanslub42/rlwrap) というGNU readlineのwrapperがあるのでそれを使う。

```shell-session
$ brew install rlwrap
$ echo "alias ocaml='rlwrap ocaml'" > ~/.config/fish/init.vim
```
## utopを入れる

[utop](https://github.com/diml/utop) 今ナウいOCamlのREPLらしい。

```shell-session
$ opam install utop
```

## Vimの環境を整える

まず [merlin](https://github.com/ocaml/merlin) と [ocp-indent](http://www.typerex.org/ocp-indent.html) を入れる。


```shell-session
$ opam install merlin
$ opam install ocp-indent
```

自分はシンタックスチェックツールとして [syntastic](https://github.com/scrooloose/syntastic) を使っているので、`merlin` をシンタックスチェッカーとして呼ぶように以下の設定をする。

```vim

let g:opamshare = substitute(system('opam config var share'),'\n$','','''')
execute "set rtp+=" . g:opamshare . "/merlin/vim"
let g:syntastic_ocaml_checkers = ['merlin']
execute 'set rtp^=' . g:opamshare . '/ocp-indent/vim'
```


セットアップはこれで一通り終わり。

次回以降は [プログラミング in OCaml 〜関数型プログラミングの基礎からGUI構築まで〜](https://www.amazon.co.jp/dp/B00QRPI1AS/) を読み進めながらゆっくりリハビリをする。
