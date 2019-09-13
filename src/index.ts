import HelloScene from "./Scene/HelloScene"
import { width, height } from "../metaConfig.json"

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width,
  height,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [HelloScene]
};

window.onload = () => {
  new Phaser.Game(config);
};