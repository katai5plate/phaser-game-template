/// <reference path="../node_modules/phaser/types/phaser.d.ts"/>

class HelloScene extends Phaser.Scene {
    constructor(config: Phaser.Types.Scenes.SettingsConfig) {
        super(config);
    }
    preload() {
        this.load.setBaseURL('./');

        this.load.image('sky', './assets/img/space3.png');
        this.load.image('logo', './assets/img/phaser3-logo.png');
        this.load.image('red', './assets/img/red.png');
    }
    create() {
        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }
}

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