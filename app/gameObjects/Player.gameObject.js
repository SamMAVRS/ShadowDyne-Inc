import Bullet from "./Bullet.gameObject";

const PLAYER_SPEED = 2;

export default class Player extends Phaser.GameObjects.Image {
    constructor (scene, x, y, img, resist = 'kenetic', name = 'player') {
        super(scene, x, y, img);
        this.img = img;
        this.resist = resist;
        this.name = name;
        // this.name = 'player';

        // --- PHASER STUFF --- //
        this.setScale(2);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.body.setAllowGravity(false);
        this.body.setSize(this.body.width / 7, this.body.height / 2.3);         // HITBOX SIZE
        // this.body.setImmovable(true);

        // --- STATIC VALUES --- //
        this.health_value = 100;

        // --- STATE --- //
        this.is_dead = false;
        this.is_invincible = true;
        this.is_damaged = false;
        this.is_hit = false;

        // --- EVENT TRIGGERS --- //
        // this.on_hit;
        this.on_keyboard_input();

        // --- OBJECT RESISTENCES --- //
        this.resist_kenetic_value = 0;
        this.resist_thermal_value = 0;
        this.resist_shock_value = 0;
        this.resist_poison_value = 0;
        this.resist_bleed_value = 0;

        // --- OBJECT GEAR --- //
        this.damage_primary_value = 5;
        this.damage_super_value = 10;
        this.armor_value = 0;

        // --- HANDLERS --- //
        this.handle_player_texture();

        // --- ACTION DELAY --- So player doesnt shoot a billion times a second --- //
        this.interval = 150;            // TIME IN MILLISECONDS BETWEEN ACTIONS
        this.last_shot = -1;            // ALLOWS ACTION TO FIRE IF NEVER HAVE
        this.current_delta = 1;         // BECOMES INTERVAL AFTER INITIAL CALL
    }






    handle_shooting(x, y, time, width, height) {

        // MAKE OBJ GO TOWARDS DIRECTION OF MOUSE POINTER //
        // --- MOUSE_POINTER - PLAYER_OBJECT === COORD --- //
        const vectorX = x - this.x;
        const vectorY = y - this.y;

        // --- VECTOR2 === THE ANGLE OF WHERE THE OBJ SHOULD GO IN 2D SPACE --- //
        let vector = new Phaser.Math.Vector2(vectorX, vectorY);

        // --- SET_LENGTH === FORCES WHATEVER DESIRED SPEED OF OBJ --- //
        vector.setLength(200);

        // DELAY FUNCTION CALL --- FN get called 60x per sec without delay
        // let elapsed_time = (time / 1000).toFixed(0);        // TIME IN SECONDS SINCE SCENE START

        if (this.last_shot == -1 || this.last_shot + this.current_delta <= time) {
            this.last_shot = time;
            this.current_delta = this.interval;

            this.bullet = new Bullet(this.scene, this.x, this.y, this.resist, vector.x, vector.y, width, height);
            // console.log("PLAYER_OBJ--SHOOTING--------BULLET:\n\n", this.bullet);



            // --- Adds the new BULLET to the scenes BULLET_GROUP for collision purposes --- //
            this.scene.bullet_group.add(this.bullet);
        }
    }






    on_keyboard_input() {
        this.curser = this.scene.input.keyboard.createCursorKeys();
        this.W = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.A = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.S = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.D = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.SPACE = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);



        // ------- MAYBE I MIGHT USE THIS??? ----------------------------- //
        // this.SHIFT = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
        // this.MMOVE = this.scene.input.mousePointer.angle;
        // this.MCLICK = this.scene.input.mousePointer.getAngle;
    }






    handle_player_texture(event) {
        if (event) {
            this.setTexture("player_a");
        }

        if (!event) {
            setTimeout(() => {
                this.setTexture("player_n");
            }, 200);
        }
    }



    update(time, delta, width, height) {
        if (this.is_dead) return;



        if (this.curser.left.isDown || this.A.isDown) {
            this.handle_player_texture(true);
            this.flipX = true;
            this.x -= PLAYER_SPEED;
        }
        if (this.curser.right.isDown || this.D.isDown) {
            this.handle_player_texture(true);
            this.flipX = false;
            this.x += PLAYER_SPEED;
        }
        if (this.curser.up.isDown || this.W.isDown) {
            this.handle_player_texture(true);
            this.y -= PLAYER_SPEED;
        }
        if (this.curser.down.isDown || this.S.isDown) {
            this.handle_player_texture(true);
            this.y += PLAYER_SPEED;
        }
        if (this.curser.space.isDown || this.SPACE.isDown) {
            this.handle_player_texture(true);
        }



        if (Phaser.Input.Keyboard.JustUp(this.SPACE)) {
            this.handle_player_texture(false);
        }
        if (Phaser.Input.Keyboard.JustUp(this.A)) {
            this.handle_player_texture(false);
        }
        if (Phaser.Input.Keyboard.JustUp(this.D)) {
            this.handle_player_texture(false);
        }
        if (Phaser.Input.Keyboard.JustUp(this.W)) {
            this.handle_player_texture(false);
        }
        if (Phaser.Input.Keyboard.JustUp(this.S)) {
            this.handle_player_texture(false);
        }




        if (this.scene.input.mousePointer.isDown) {
            console.log("PEW PEW\n\n");
            this.handle_player_texture(true);
            this.handle_shooting(this.scene.input.mousePointer.x, this.scene.input.mousePointer.y, time, width, height);

            if (this.bullet) {
                this.bullet.update(time, delta, width, height);             // --- FOR DESTROYING OBJ - Not working --- //
            }
            setTimeout(() => {
                this.handle_player_texture(false);

            }, 200);
        }




        // ----------------- SPACE KEYBOARD SHOOTY SHOOTY --------------------- //
        // ------ IF TIME, SET THIS TO PEW PEW ALSO --------------------------- //


        // if (Phaser.Input.Keyboard.JustDown(this.SPACE)) {
        //     console.log("PEW PEW\n\n");
        //     this.handle_shooting();
        // }


        // -------------------------------------------------------------- //
        // ------------------------------------------------------------- //

    }






    on_death() {
        console.log("\n\n PLAYER_OBJ--ON_DEATH----------------:\n\n");
        this.is_dead = true;
        super.destroy();
    }


}