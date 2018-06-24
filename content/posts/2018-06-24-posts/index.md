---
title: "OCaml ヤリナオシ(1)"
date: "24/06/2018"
category: "tech"
tags:
    - ocaml
---

OCaml の復習をしようと思う。

# セットアップ

環境は macOS + neovim。
windows でやる気力は流石に無い。

## OCaml, opam を入れる

homebrew で入る。Graphicsを使いたいので`--with-x11` オプションを付ける。
xquartz が無いと怒られたので、入れる。

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

自分は fish shell を使っているので、`~/.config/fish/config.fish` に以下の様に設定する。

```fish
# opam
eval (direnv hook fish)
```

## rlwrap を入れる

そのままの `ocaml` だと対話環境下で矢印キーで移動できない。

[rlwrap](https://github.com/hanslub42/rlwrap) というGNU readline の wrapper があるのでそれを使う。

```shell-session
$ brew install rlwrap
$ echo "alias ocaml='rlwrap ocaml'" > ~/.config/fish/init.vim
```
## utop を入れる

[utop](https://github.com/diml/utop) 今ナウいOCamlのREPLらしい。

```shell-session
$ opam install utop
```

## Vim の環境を整える

まず [merlin](http://the-lambda-church.github.io/merlin/) と [ocp-indent](http://www.typerex.org/ocp-indent.html) を入れる。


```shell-session
$ opam install merlin
$ opam install ocp-indent
```

自分はシンタックスチェックツールとして [syntastic](https://github.com/scrooloose/syntastic) を使っているので、`merlin` をシンタックスチェッカーとして呼ぶように以下の設定をする。

```vim
let g:opamshare = substitute(system('opam config var share'),'\n$','','''')
execute 'set rtp+=' . g:opamshare . '/merlin/vim'

let g:syntastic_ocaml_checkers = ['merlin']

execute 'set rtp^=' . g:opamshare . '/ocp-indent/vim'
```


セットアップはこれで一通り終わり。

次回以降は [プログラミング in OCaml 〜関数型プログラミングの基礎からGUI構築まで〜](https://www.amazon.co.jp/dp/B00QRPI1AS/) を読み進めながらゆっくりリハビリをする。
