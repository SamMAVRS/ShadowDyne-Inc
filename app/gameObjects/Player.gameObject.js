import Bullet from "./Bullet.gameObject";


export default class Player extends Phaser.GameObjects.Image {
    // constructor (scene, x, y, img = "player_n") {
    constructor (scene, x, y, img) {
        super(scene, x, y, img);
        this.img = img;
        // this.setTexture(this.img);

        // this.setTexture({ key: this.img });
        // this.setTexture(key: this.img);


        // console.log("\n PLAYER_OBJ--------------IMG:\n", this.img);
        // Phaser Stuff
        this.setScale(2);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.body.setAllowGravity(false);
        this.body.setImmovable(true);
        this.body.setSize(this.body.width / 7, this.body.height / 2.3);         // HITBOX

        // Static Base Values
        this.health_value = 100;

        // Object State
        this.is_dead = false;
        this.is_invincible = true;
        this.is_shooting = false;

        // Event Triggers
        this.on_hit;
        this.on_shooting = new Bullet(scene, x, y);

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


    shooting() {
        this.on_shooting();
    }






    update() {
        // if (this.is_dead) return;
        // this.setTexture(this.img);
        // this.body.setTexture(this.img);
        // console.log("\n PLAYER_OBJ--------------UPDATE:\n", this.img);


        // if (Phaser.Input.Keyboard.JustDown(this.SPACE)) {
        //     console.log("PEW PEW\n\n");
        // }
        // if (Phaser.Input.Keyboard.JustDown(this.A)) {
        //     console.log("LEFT\n\n");
        // }
        // if (Phaser.Input.Keyboard.JustDown(this.D)) {
        //     console.log("RIGHT\n\n");
        // }
        // if (Phaser.Input.Keyboard.JustDown(this.W)) {
        //     console.log("UP\n\n");
        // }
        // if (Phaser.Input.Keyboard.JustDown(this.S)) {
        //     console.log("DOWN\n\n");
        // }

    }
}