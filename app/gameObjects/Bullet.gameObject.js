const RESISTENCES = {
    kenetic: { name: 'kenetic', color: 0xf7f7f7, radius: 8, intensity: 0.5 },
    thermal: { name: 'thermal', color: 0xffcb36, radius: 8, intensity: 0.5 },
    shock: { name: 'shock', color: 0x1AA7EC, radius: 8, intensity: 0.5 },
    poison: { name: 'poison', color: 0x00FF00, radius: 8, intensity: 0.5 },
    bleed: { name: 'bleed', color: 0xf70505, radius: 8, intensity: 0.5 },
};






export default class Bullet extends Phaser.GameObjects.PointLight {
    constructor (scene, x, y, resist = "kenetic", velocityX, velocityY, width, height, name = 'bullet') {

        const { color, radius, intensity } = RESISTENCES[resist];
        super(scene, x, y, color, radius, intensity);

        this.name = 'bullet';
        // this.name = name;
        this.width = width;
        this.height = height;
        this.resist = resist;

        console.log("BULLET-----------RESISTENCE_RESIST:\n\n", RESISTENCES[resist]);
        console.log("BULLET-----------THIS_RESIST:\n\n", this.resist);


        // this.bullet_resist = {
        //     kenetic: RESISTENCES.kenetic,
        //     thermal: RESISTENCES.thermal,
        //     shock: RESISTENCES.shock,
        //     poison: RESISTENCES.poison,
        //     bleed: RESISTENCES.bleed,
        // };



        // --- PHASER STUFF ---
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.physics.world.enableBody(this);
        this.body.setAllowGravity(false);
        this.body.setCircle(6);
        this.body.setOffset(2, 1);


        this.body.setCollideWorldBounds(false);
        // this.body.setCollideWorldBounds(true);          // ------ FOR TESTING ONLY ------ //
        this.body.onWorldBounds = true;
        // this.body.on_world_collide = true;
        this.body.setVelocityX(velocityX);
        this.body.setVelocityY(velocityY);

        // this.body.mass = 1;

        // --- STATE ---
        this.is_dead = false;



        // --- HANDLERS ---
        this.init();
        this.shooting(velocityX, velocityY, RESISTENCES[resist]);
        setTimeout(() => this.destroy(), 3500);             // DESTROYS BULLETS AFTER SET TIME
    }






    shooting(x, y, resistence) {
        // console.log("ON_SHOOTING-----------X:\n\n", x);
        // console.log("ON_SHOOTING-----------Y:\n\n", y);
        // console.log("ON_SHOOTING-----------RESISTENCE:\n\n", resistence);

        if (resistence.name === 'kenetic') {
            this.on_kenetic(x, y, resistence);
        }
        if (resistence.name === 'thermal') {
            this.on_thermal(x, y, resistence);
        }
        if (resistence.name === 'shock') {
            this.on_shock(x, y, resistence);
        }
        if (resistence.name === 'poison') {
            this.on_poision(x, y, resistence);
        }
        if (resistence.name === 'bleed') {
            this.on_bleed(x, y, resistence);
        }
    }



    on_kenetic(x, y, resistence) {

        // console.log("ON_KENETIC-----------X:\n\n", x);
        // console.log("ON_KENETIC-----------Y:\n\n", y);
        // console.log("ON_KENETIC-----------RESISTENCE:\n\n", resistence);

        RESISTENCES.kenetic;
        // this.RESISTENCES.kenetic;

        this.body.setVelocityX(x * 5);
        this.body.setVelocityY(y * 5);
        // this.body.setVelocityX(x * 2.5);
        // this.body.setVelocityY(y * 2.5);
        // this.body.setVelocityX(x);
        // this.body.setVelocityY(y);

    }



    on_thermal(x, y, resistence) {
        // console.log("ON_THERMAL-----------RESISTENCE:\n\n", resistence);
        this.body.setVelocityX(x * 1.5);
        this.body.setVelocityY(y * 1.5);
    }



    on_shock(x, y, resistence) {
        this.body.setVelocityX(x / 1.2);
        this.body.setVelocityY(y / 1.2);

    }
    on_poision(x, y, resistence) {
        this.body.setVelocityX(x / 2);
        this.body.setVelocityY(y / 2);
    }
    on_bleed(x, y, resistence) {
        this.body.setVelocityX(x);
        this.body.setVelocityY(y);

    }






    init() {
        this.scene.tweens.add({
            targets: this,
            duration: 200,
            intensity: { from: 0.1, to: 0.9 },
            repeat: -1,
        });
    }




    update(time, delta, width, height) {
        if (this.y >= this.height + 10) {
            this.destroy();
        }

    }




    shot() {
        this.destroy();
    }


    destroy() {
        super.destroy();
    }
}