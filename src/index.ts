import HelloScene from "./Scene/HelloScene"

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [HelloScene]
};

window.onload = () => {
    const game = new Phaser.Game(config);
};