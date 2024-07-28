import Bullet from "./Bullet.gameObject";



export default class Mob extends Phaser.GameObjects.Image {
    constructor (scene, x, y, img, velocityX, velocityY, name = 'mob') {
        super(scene, x, y, img);
        this.img = img;
        this.name = name;

        // --- PHASER STUFF --- //
        this.setScale(2);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setAllowGravity(false);
        this.body.setSize(this.body.width / 7, this.body.height / 2.3);         // HITBOX SIZE
        this.body.onWorldBounds = true;
        // this.setOrigin(0, 0);

        // --- STATE --- //
        this.is_dead = false;
        this.is_invincible = false;
        this.is_damaged = false;
        this.is_hit = false;

        // --- STATIC VALUES --- //
        this.health_value = 20;
        this.damage_value = 5;
        this.armor_value = 0;

        // --- OBJECT GEAR ---
        this.damage_primary_value = 5;
        this.damage_super_value = 10;
        this.armor_value = 0;

        // --- OBJECT RESISTENCES --- //
        this.resist_kenetic_value = 0;
        this.resist_thermal_value = 0;
        this.resist_shock_value = 0;
        this.resist_poison_value = 0;
        this.resist_bleed_value = 0;

        // --- EVENT TRIGGERS --- //
        this.on_hit;

        // --- HANDLERS --- //

    }






    update(time, delta, width, height) {
        if (this.is_dead) return;
        if (this.y > this.height + 50) {
            this.destroy();
        }



    }




    on_death() {
        this.is_dead = true;
        this.destroy();
    }
}