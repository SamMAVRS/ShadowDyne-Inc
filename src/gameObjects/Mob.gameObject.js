import Bullet from "./Bullet.gameObject";



export default class Mob extends Phaser.GameObjects.Image {
    constructor (scene, x, y, img, velocityX, velocityY, pX, pY, name = 'mob') {
        super(scene, x, y, img);
        this.img = img;
        this.name = name;

        // --- PHASER STUFF --- //
        this.setScale(6);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setAllowGravity(false);
        // this.body.setSize(this.body.width, this.body.height);         // HITBOX SIZE
        this.body.setSize(this.body.width / 8, this.body.height / 7);         // HITBOX SIZE
        // this.body.setSize(this.body.width / 16, this.body.height / 6);         // HITBOX SIZE
        this.body.onWorldBounds = true;

        // this.body.setMaxVelocity(10, 10);



        // this.body.setMaxVelocity(pX, pY);
        // this.body.setMaxVelocity(pX, pY);
        // this.body.set
        // this.body.setMaxVelocity(velocityX, velocityY);


        // this.body.setBounce(1);
        // this.body.mass = 5000;
        // this.body.density = 1000;

        // this.setOrigin(0, 0);

        // --- STATE --- //
        // this.is_dead = false;
        this.is_dead = this.scene.registry.values.mob_schema.is_dead;
        this.is_invincible = false;
        this.is_damaged = false;
        this.is_hit = false;
        // console.log("MOB--INIT--------------DATA:\n\n", this.scene.registry.values.mob_schema.is_dead);
        console.log("MOB--INIT--------------DATA:\n\n", this.body);

        // --- STATIC VALUES --- //
        // this.health_value = 20;
        // this.damage_value = 5;
        // this.armor_value = 0;

        // --- OBJECT GEAR ---
        // this.damage_primary_value = 5;
        // this.damage_super_value = 10;
        // this.armor_value = 0;

        // --- OBJECT RESISTENCES --- //
        // this.resist_kenetic_value = 0;
        // this.resist_thermal_value = 0;
        // this.resist_shock_value = 0;
        // this.resist_poison_value = 0;
        // this.resist_bleed_value = 0;

        // --- EVENT TRIGGERS --- //
        this.on_hit;

        // --- HANDLERS --- //
        this.init(this);
    }

    init(data) {
        // console.log("MOB--INIT--------------DATA:\n\n", this.scene.registry.values.mob_data);
        // console.log("MOB--INIT--------------DATA:\n\n", this.scene.registry.values.mob_schema);
        // this.mobset = this.data.values("mob_schema");
        // this.mobset = this.registry.get(this.scene.registry.values.mob_schema);
        // this.mobset = this.scene.registry.values.mob_schema;
        // this.mobset = this.data.registry.get('mob_schema');
        // this.mob_name = this.mobset.name;
        // this.health_value = this.mobset.health;
        // this.damage_value = this.mobset.damage;
        // this.armor_value = this.mobset.armor;
        // this.resist_bleed_value = this.mobset.resist_bleed;
        // this.resist_kenetic_value = this.mobset.resist_kenetic;
        // this.resist_poison_value = this.mobset.resist_poison;
        // this.resist_shock_value = this.mobset.resist_shock;
        // this.resist_thermal_value = this.mobset.resist_thermal;


        // console.log("MOB--INIT--------------MOBSET_HEALTH_VALUE:\n\n", this.health_value);
    }



    create() {
        // this.body.density(100);
        // this.body.setBounce(1);


        // let mob_schema = this.registry.set({
        //     mob_schema: {
        //         name: this.name,
        //         health: this.health_value,
        //         armor: this.armor_value,
        //         damage: this.damage_value,
        //         resist_bleed: this.resist_bleed_value,
        //         resist_kenetic: this.resist_kenetic_value,
        //         resist_poison: this.resist_poison_value,
        //         resist_shock: this.resist_shock_value,
        //         resist_thermal: this.resist_thermal_value,
        // name: 'mob',
        // health: 20,
        // armor: 0,
        // damage: 5,
        // resist_bleed: 0,
        // resist_kenetic: 0,
        // resist_poison: 0,
        // resist_shock: 0,
        // resist_thermal: 0,
        //     }
        // });
        // console.log("MOB--CREATE--------------MOB_SCHEMA:\n\n", mob_schema);
    }





    update(time, delta, width, height, data) {

        if (this.is_dead) return;

        this.scene.physics.moveTo(this, this.scene.player.x, this.scene.player.y, 100);

        // if (this.y > this.height + 50) {
        //     this.destroy();
        // }



    }




    on_death() {
        this.is_dead = true;
        this.destroy();
    }
}