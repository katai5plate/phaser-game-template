# phaser-game-template

## Usage

```
npm i
npm run dev

// 管理者権限で
npm run deploy
```

- WEB ビルド後のゲームは `./export/web.zip` に置かれる
- Windows / Linux ビルド後のゲームは `./export/` に ZIP で置かれる
- Mac ビルド後のゲームは`./export/dist/pc/osx64`にある
  - Windows では Mac 版だけなぜか zip 化されない。理由は後述。原因分かる人募集中。

## 開発にあたっての注意

### パスの扱い

- `setBaseURL` を `./` にしないとルートを見てくれない

```js
this.load.setBaseURL('./');

this.load.image('sky', './assets/img/space3.png');
this.load.image('logo', './assets/img/phaser3-logo.png');
this.load.image('red', './assets/img/red.png');
```

## 既知の不具合

- とりあえず関連 script は `__PENDING__` をつけた

* 最初は Electron で PC デプロイしようと思ったが、思うようにビルドできない
  - なので NW.js にした。一応 `feat/electron` に挑戦の軌跡を残してある
* デプロイした MAC ビルドがなぜか Windows で zip 圧縮できない
  - それぞれ圧縮失敗したら圧縮をやめる仕様にした
