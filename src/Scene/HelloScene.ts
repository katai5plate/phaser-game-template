/// <reference path="../../node_modules/phaser/types/phaser.d.ts"/>

export default class HelloScene extends Phaser.Scene {
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

        const particles = this.add.particles('red');

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }
}