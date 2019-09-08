# revenge-phaser

## Usage

```
npm i
npm run dev
npm run build
```

- ビルド後のゲームの zip は `./export/game.zip` に生成される

## 開発にあたっての注意

### パスの扱い

- `setBaseURL` を `./` にしないとルートを見てくれない

```js
this.load.setBaseURL('./');

this.load.image('sky', './assets/img/space3.png');
this.load.image('logo', './assets/img/phaser3-logo.png');
this.load.image('red', './assets/img/red.png');
```
