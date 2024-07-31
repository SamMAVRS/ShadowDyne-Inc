import Player from "../gameObjects/Player.gameObject";
import Mob from "../gameObjects/Mob.gameObject";
// import Boss from "../gameObjects/Boss.gameObject";
// import Bullet from "../gameObjects/Bullet.gameObject";
import Button from "../gameObjects/Button.gameObject";






export default class Game extends Phaser.Scene {
    constructor () {
        super({ key: 'game' });
        this.player = null;
        // this.mob = null;
        // this.bullets = null;
        this.loot_value;
        this.loot_text;

        this.timedspawn;



        // this.init();

    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: INIT ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    init(data) {
        // this.name = 
        this.dataset = this.registry.getAll();

        console.log("\n GAMESCENE--INIT--------------DATASET:\n\n", this.dataset);
        // console.log("\n GAMESCENE--INIT--------------DATASET_WEAP:\n\n", this.dataset.weap_types);
        // console.log("\n GAMESCENE--INIT--------------DATASET_PLAYER:\n\n", this.dataset.player_schema);
        // console.log("\n GAMESCENE--INIT--------------DATASET_MOB:\n\n", this.dataset.mob_schema);

        this.player_data = this.dataset.player_schema;
        this.mob_data = this.dataset.mob_schema;
        this.weap_data = this.dataset.weap_types;

        console.log("\n GAMESCENE--INIT--------------DATASET_PLAYER__SET:\n\n", this.player_data);
        console.log("\n GAMESCENE--INIT--------------DATASET_MOB__SET:\n\n", this.mob_data);
        console.log("\n GAMESCENE--INIT--------------DATASET_WEAP__SET:\n\n", this.weap_data);


        // this.mob_armor = this.mob.data.get('mob_armor');
        // this.mob_damage = this.mob.data.get('mob_damage');
        // this.mob_health = this.mob.data.get('mob_health');
        // this.mob_name = this.mob.data.get('mob_name');
        // this.mob_resist_bleed = this.mob.data.get('mob_resist_bleed');
        // this.mob_resist_kenetic = this.mob.data.get('mob_resist_kenetic');
        // this.mob_resist_poison = this.mob.data.get('mob_resist_poison');
        // this.mob_resist_shock = this.mob.data.get('mob_resist_shock');
        // this.mob_resist_thermal = this.mob.data.get('mob_resist_thermal');

    }







    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: CREATE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    create() {
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.center_width = this.width / 2;
        this.center_height = this.height / 2;
        this.camera_width = this.cameras.main.width;
        this.camera_height = this.cameras.main.height;
        this.cameras.main.setBackgroundColor('#585858');

        this.timedspawn = this.time.delayedCall(2000, this.handle_enemies, [], this);


        this.add_background();
        this.handle_button();
        this.handle_player();
        this.handle_enemies();
        this.handle_bullets();
        this.handle_colliders();
    }


    add_background() {
        const bg = this.add
            .image(0, 0, 'game_scene')
            .setOrigin(0);

        bg.setScale(Math.max(this.camera_width / bg.width, this.camera_height / bg.height));
        bg.setDepth(0);
    }



    handle_button() {
        this.button = new Button(this, this.center_width * 1.8, this.center_height * 1.85, 300, 80);
        this.button.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.start('gameover');
        });


        this.set_text = this.add.bitmapText(0, 0, 'global_font', 'END IT', 35);
        Phaser.Display.Align.In.Center(this.set_text, this.button, 0, -4);
    }





    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: H_PLAYER ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_player() {
        this.player = new Player(this, this.center_width, this.center_height, "player_n");

        this.player.setDataEnabled();

        this.player.data.set('player_armor', this.player_data.armor);
        this.player.data.set('player_credits', this.player_data.credits);
        this.player.data.set('player_health', this.player_data.health);
        this.player.data.set('player_name', this.player_data.name);
        this.player.data.set('player_weap', this.player_data.primary_weap);
        this.player.data.set('player_weap_type', this.player_data.primary_weap.name);
        this.player.data.set('player_weap_ap', this.player_data.primary_weap.ap);
        this.player.data.set('player_damage', this.player_data.primary_weap.damage);
        this.player.data.set('player_resist_bleed', this.player_data.resist_bleed);
        this.player.data.set('player_resist_kenetic', this.player_data.resist_kenetic);
        this.player.data.set('player_resist_poison', this.player_data.resist_poison);
        this.player.data.set('player_resist_shock', this.player_data.resist_shock);
        this.player.data.set('player_resist_thermal', this.player_data.resist_thermal);
        this.player.data.set('player_upgrade_points', this.player_data.upgrade_points);
        this.player.data.set('player_isDead', this.player_data.is_dead);



        this.player_armor = this.player.data.get('player_armor');
        this.player_credits = this.player.data.get('player_credits');
        this.player_health = this.player.data.get('player_health');
        this.player_name = this.player.data.get('player_name');
        this.player_weap = this.player.data.get('player_weap');
        this.player_weap_type = this.player.data.get('player_weap_type');
        this.player_weap_ap = this.player.data.get('player_weap_ap');
        this.player_damage = this.player.data.get('player_damage');
        this.player_resist_bleed = this.player.data.get('player_resist_bleed');
        this.player_resist_kenetic = this.player.data.get('player_resist_kenetic');
        this.player_resist_poison = this.player.data.get('player_resist_poison');
        this.player_resist_shock = this.player.data.get('player_resist_shock');
        this.player_resist_thermal = this.player.data.get('player_resist_thermal');
        this.player_upgrade_points = this.player.data.get('player_upgrade_points');



        // console.log("HANDLE_PLAYER--GAMESCENE--------PLAYER_HEALTH:\n\n", this.player_health);
        // console.log("HANDLE_PLAYER--GAMESCENE--------PLAYER_DAM_TYPE:\n\n", this.player_weap_type);
        // console.log("HANDLE_PLAYER--GAMESCENE--------PLAYER_DAM:\n\n", this.player_damage);



        // -------------- FOR 2 PLAYERS - I MIGHT NOT DO THIS - IDK - MAYBE FUTURE ME ---------------------------------

        // this.player_layer = this.add.layer();
        // this.player_group = this.add.group();
        // this.player = new Player(this, this.center_width, this.center_height, "player_n");
        // this.player_group.add(this.player);

        // console.log("HANDLE_PLAYER--GAMESCENE--------PLAYER_HEALTH:\n\n", this.player.data.get('player_health'));
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: H_ENEMIES ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_enemies() {
        this.mob_group = this.add.group();



        // this.mob = new Mob(this, this.center_width + 10, this.center_height + 10, 'mob_chase_04', this.player.x, this.player.y);
        // this.mob = new Mob(this, this.center_width / 2, this.center_height, 'mob_chase_04', this.player.x, this.player.y);

        this.mob = new Mob(this, this.handle_randomX(), this.center_height, 'mob_chase_04', this.player.x, this.player.y);




        // this.timedspawn = this.time.delayedCall(3000, this.mob, [], this);

        // console.log("MOOOOOB", this.mob);


        this.mob.setDataEnabled();

        this.mob.data.set('mob_armor', this.mob_data.armor);
        this.mob.data.set('mob_damage', this.mob_data.damage);
        this.mob.data.set('mob_health', this.mob_data.health);
        // this.mob.data.set('mob_name', this.mob_data.name);
        // this.mob.data.set('mob_resist_bleed', this.mob_data.resist_bleed);
        // this.mob.data.set('mob_resist_kenetic', this.mob_data.resist_kenetic);
        // this.mob.data.set('mob_resist_poison', this.mob_data.resist_poison);
        // this.mob.data.set('mob_resist_shock', this.mob_data.resist_shock);
        // this.mob.data.set('mob_resist_thermal', this.mob_data.resist_thermal);
        this.mob.data.set('mob_isDead', this.mob_data.is_dead);

        this.mob_isDead = this.mob.data.get('mob_isDead');


        // this.mob_armor = this.mob.data.get('mob_armor');
        // this.mob_damage = this.mob.data.get('mob_damage');
        // this.mob_health = this.mob.data.get('mob_health');
        // this.mob_name = this.mob.data.get('mob_name');
        // this.mob_resist_bleed = this.mob.data.get('mob_resist_bleed');
        // this.mob_resist_kenetic = this.mob.data.get('mob_resist_kenetic');
        // this.mob_resist_poison = this.mob.data.get('mob_resist_poison');
        // this.mob_resist_shock = this.mob.data.get('mob_resist_shock');
        // this.mob_resist_thermal = this.mob.data.get('mob_resist_thermal');


        // console.log("HANDLE_ENEMY--GAMESCENE--------MOB_HEALTH:\n\n", this.mob_health);
        // console.log("HANDLE_ENEMY--GAMESCENE--------MOB_DAMAGE:\n\n", this.mob_damage);



        this.mob_group.add(this.mob);


        // ----------- WISHLIST ------------- //
        // console.log("HANDLE_ENEMY--GAMESCENE--------MOB:\n\n", this.mob);
        // this.mob.data.set('mob_weap', this.mob_data.primary_weap);
        // this.mob.data.set('mob_weap_type', this.mob_data.primary_weap.name);
        // this.mob.data.set('mob_weap_ap', this.mob_data.primary_weap.ap);
    }




    handle_randomX() {
        return Math.floor(Math.random() * (this.width - 5));
    }
    // handle_randomY() {
    //     return Math.floor(Math.random() * (this.height + 50));
    // }






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

        // this.physics.add.collider(this.bullet_group, this.mob_group, this.on_hitting, () => {            // MOBS go flying off screen --- WISHLIST --- //
        this.physics.add.overlap(this.bullet_group, this.mob_group, this.on_hitting, () => {
            return true;
        },
            this);


        this.physics.add.overlap(this.bullet_group, this.newmob, this.on_hitting, () => {
            return true;
        },
            this);
        // this.physics.world.on('worldbounds', this.on_world_collide);
    }



    on_colliding(obj1, obj2) {
        // console.log("ON_COLLIDING--GAMESCENE--------OBJ1:\n\n", obj1);
        // console.log("ON_COLLIDING--GAMESCENE--------OBJ2:\n\n", obj2);
        // let obj2_health = obj2.data.get('mob_health');

        let player_health = obj1.data.get('player_health');
        let obj2_damage = obj2.data.get('mob_damage');
        let obj1_hit = player_health - obj2_damage;
        this.player.data.set('player_health', obj1_hit);
        let update_health = obj1.data.get('player_health');

        // console.log("ON_COLLIDING--GAMESCENE--------OBJ2__HEALTH:\n\n", mob_health);
        console.log("ON_COLLIDING--GAMESCENE--------OBJ1__HEALTH:\n\n", player_health);
        console.log("ON_COLLIDING--GAMESCENE--------OBJ2__DAMAGE:\n\n", obj2_damage);
        console.log("ON_COLLIDING--GAMESCENE--------OBJ1__HIT:\n\n", obj1_hit);
        console.log("ON_COLLIDING--GAMESCENE--------OBJ1__UPDATE_HEALTH:\n\n", update_health);


        if (update_health <= 0) {

            this.player.data.set('player_isDead', true);
            obj1.is_dead = true;
            // obj1.handle_player_texture(true);
            // obj2.is_dead = true;
            // console.log("ON_COLLIDING--GAMESCENE--------ON_DEAD:\n\n", obj1.is_dead);

            // obj1.once('destroy', () => {
            //     obj1.on_death();
            // }, this);

            obj1.on_death();
            // obj1.destroy();
            // obj2.destroy();
        }
    }



    on_hitting(obj1, obj2) {
        let bullet_damage = this.player_damage;
        let obj2_health = obj2.data.get('mob_health');
        // let obj2_health = this.mob_group.data('mob_health');
        // let obj2_health = this.mob.data.get('mob_health');
        // console.log("ON_HITTING--GAMESCENE--------OBJ2__GETTTTT:\n\n", this.mob.data.get('mob_health'));
        let obj2_hit = obj2_health - bullet_damage;
        this.mob.data.set('mob_health', obj2_hit);
        let update_health = obj2.data.get('mob_health');

        console.log("ON_HITTING--GAMESCENE--------OBJ2__HEALTH:\n\n", obj2_health);
        console.log("ON_HITTING--GAMESCENE--------OBJ2__BULLET_DAMAGE:\n\n", bullet_damage);
        console.log("ON_HITTING--GAMESCENE--------OBJ2__HIT:\n\n", obj2_hit);
        console.log("ON_HITTING--GAMESCENE--------OBJ2__UPDATE_HEALTH:\n\n", update_health);

        if (update_health <= 0) {
            obj2.on_death();

            // this.mob = new Mob(this, this.handle_randomX(), this.center_height, 'mob_chase_04', this.player.x, this.player.y);
            // this.mob_group.add(this.mob);
            this.handle_enemies();
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
            this.player.update(time, delta, this.width, this.height, this.player_data);
            // this.player.update(time, delta, this.width, this.height, this.player_weap_type);
        }

        this.mob.update(time, delta, this.width, this.height);

    }



    update_credits(credits) {
        const previous_credits = this.registry.get('player_credits');
        const updated_credits = previous_credits + credits;

        this.registry.set('player_credits', updated_credits);
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: DESTROY ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    shutdown_scene() {
        this.mob_group.children.entries.forEach((mob) => mob.destroy());
        this.time.delayedCall(2000, () => {
            this.end_scene();
        }, null, this);
    }



    end_scene() {
        this.game.sound.stopAll();
        this.scene.stop('game');
        this.scene.start('gameover');
    }

}