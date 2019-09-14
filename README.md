# phaser-game-template

## Usage

```
npm i
npm run dev

// 管理者権限で
npm run build
```

- WEB ビルド後のゲームは `./export/web.zip` に置かれる
- Windows / Mac / Linux ビルド後のゲームは `./export/dist` に置かれる
  - 圧縮してない理由は後述。原因分かる人募集中。

## 開発にあたっての注意

### パスの扱い

- `setBaseURL` を `./` にしないとルートを見てくれない

```js
this.load.setBaseURL('./');

this.load.image('sky', './assets/img/space3.png');
this.load.image('logo', './assets/img/phaser3-logo.png');
this.load.image('red', './assets/img/red.png');
```

## スマホアプリのデプロイを行う

1. PATH に JDK と Android Studio と gradle をインストールしておく

```
// Windows chocolatey 用のインストールコマンド
cinst -y jdk8 androidstudio gradle
// MacOSX homebrew 用のインストールコマンド
brew cask install adoptopenjdk8 android-studio
brew install gradle
```

2. 管理者権限で `npm run build` すると `./export/app` に cordova プロジェクトが生成される
3. `cd ./export/app` 等でカレントディレクトリを移動し、以下を実行

```
npm i
npm run init
```

4. そのあとは Cordova でアプリを作る方法に準拠して進める

## 既知の不具合

- とりあえず関連 script は `__PENDING__` をつけた

* 最初は Electron で PC デプロイしようと思ったが、思うようにビルドできない
  - なので NW.js にした。一応 `feat/electron` に挑戦の軌跡を残してある
* デプロイした MAC ビルドがなぜか Windows で zip 圧縮できない
  - 一旦暫定で PC 版の圧縮をそもそもやめた
* Windows で nwbuild の MAC ビルドをすると、以下のようなエラーが出る
  - `Error: EPERM: operation not permitted, stat 'node_modules\nw-builder\cache\0.41.1-sdk\osx64\nwjs.app\Contents\Frameworks\nwjs Framework.framework\Helpers'`
  - nwbuild を入れなおすと出てこなくなる。
