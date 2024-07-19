export default class Boss extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, num) {
        super(scene, x, y, num);
        // Phaser Stuff
        this.setOrigin(0, 0);
        this.body.collideWorldBounds(true);
        this.body.setAllowGravity(false);
        this.setScale(1);

        // Static Base Values
        this.health_value = 200;
        this.damage_value = 20;
        this.armor_value = 10;

        // Object State
        this.is_dead(false);
        this.is_invincible(true);
        this.is_shooting(false);

        // Event Triggers
        this.on_hit;
    }
}