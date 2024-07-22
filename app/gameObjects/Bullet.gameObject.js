export default class Mob extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, num) {
        super(scene, x, y, num);
        // Phaser Stuff
        this.setOrigin(0, 0);
        this.body.collideWorldBounds(false);
        this.body.setAllowGravity(false);
        this.setScale(1);

        // Static Base Values

        // Object State

        // Event Triggers
        this.on_hit;
    }
}