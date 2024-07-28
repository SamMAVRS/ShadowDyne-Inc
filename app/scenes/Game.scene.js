import Player from "../gameObjects/Player.gameObject";
import Mob from "../gameObjects/Mob.gameObject";
// import Boss from "../gameObjects/Boss.gameObject";
// import Bullet from "../gameObjects/Bullet.gameObject";
// import Button from "../gameObjects/Button.gameObject";






export default class Game extends Phaser.Scene {
    constructor () {
        super({ key: 'game' });
        this.player = null;
        // this.mob = null;
        // this.bullets = null;
        this.loot_value;
        this.loot_text;
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: CREATE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    create() {
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.center_width = this.width / 2;
        this.center_height = this.height / 2;
        this.cameras.main.setBackgroundColor('#585858');

        this.handle_player();
        this.handle_enemies();
        this.handle_bullets();
        this.handle_colliders();
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: H_PLAYER ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_player() {
        this.player = new Player(this, this.center_width, this.center_height, "player_n");



        // -------------- FOR 2 PLAYERS - I MIGHT NOT DO THIS - IDK - MAYBE FUTURE ME ---------------------------------

        // this.player_layer = this.add.layer();
        // this.player_group = this.add.group();
        // this.player = new Player(this, this.center_width, this.center_height, "player_n");
        // this.player_group.add(this.player);
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: H_ENEMIES ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_enemies() {
        this.mob_group = this.add.group();
        this.mob = new Mob(this, this.center_width / 2, this.center_height / 2, 'mob_chase_04');
        this.mob_group.add(this.mob);
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: H_BULLET ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_bullets() {
        // --- This creates the BULLET_GROUP for the Scene then in PLAYER_OBJ the BULLET is added to this group --- //
        this.bullet_group = this.add.group();

        // console.log("HANDLE_BULLET--GAMESCENE--------GROUP:\n\n", this.bullet_group);
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: H_COLLIDERS ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_colliders() {
        this.physics.add.collider(this.player, this.mob_group, this.on_colliding, () => {
            return true;
        },
            this);

        this.physics.add.overlap(this.bullet_group, this.mob_group, this.on_hitting, () => {
            return true;
        },
            this);



        // this.physics.world.on('worldbounds', this.on_world_collide);
    }



    on_colliding(obj1, obj2) {
        // console.log("ON_COLLIDING--GAMESCENE--------OBJ1:\n\n", obj1);
        // console.log("ON_COLLIDING--GAMESCENE--------OBJ2:\n\n", obj2);
        obj1.is_dead = true;
        obj2.is_dead = true;
        obj1.destroy();
        obj2.destroy();
    }



    on_hitting(obj1, obj2) {
        // console.log("ON_HITTING--GAMESCENE--------OBJ1:\n\n", obj1);
        // console.log("ON_HITTING--GAMESCENE--------OBJ2:\n\n", obj2);

        // --- TODO: SETDATA MANAGER FOR DATA STORE VALUES AND STUFF
        // obj2.is_hit = true;
        // obj2.health_value - this.player.damage_primary_value;

        if (obj2.health_value <= 0) {
            obj2.on_death();
        }
        obj1.destroy();
    }




    // -------------- TODO: DO I NEED THIS???? ---------------------------------------------------

    // on_world_collide(body, t) {
    // onWorldBounds(body, t) {
    //     console.log("ON_WORLD_COLLIDE--GAMESCENE--------BODY:\n\n", body);
    //     console.log("ON_WORLD_COLLIDE--GAMESCENE--------T:\n\n", t);

    //     const name = body.gameObjects.name.toString();
    //     console.log("ON_WORLD_COLLIDE--GAMESCENE--------NAME:\n\n", name);

    //     if (['bullet', 'mob'].includes(name)) {
    //         body.gameObjects.destroy();
    //     }
    // }





    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: GAMEOVER ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////








    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: UPDATE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    update(time, delta) {

        // Updating PLAYER_OBJ and passing Scenes Start TIME
        if (this.player) {
            this.player.update(time, delta, this.width, this.height);
        }

        this.mob.update(time, delta, this.width, this.height);

    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: DESTROY ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////



}