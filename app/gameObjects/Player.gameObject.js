export default class Player extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, num) {
        super(scene, x, y, num);
        // Phaser Stuff
        this.setOrigin(0, 0);
        this.body.collideWorldBounds(true);
        this.body.setAllowGravity(false);
        this.setScale(1);

        // Static Base Values
        this.health_value = 100;

        // Object State
        this.is_dead(false);
        this.is_invincible(true);
        this.is_shooting(false);

        // Event Triggers
        this.on_hit;

        // Object Resistences
        this.resist_kenetic_value = 0;
        this.resist_thermal_value = 0;
        this.resist_shock_value = 0;
        this.resist_poison_value = 0;
        this.resist_bleed_value = 0;

        // Object Gear
        this.damage_primary_value = 5;
        this.damage_super_value = 10;
        this.armor_value = 0;
    }
}