import Button from "../gameObjects/Button.gameObject";





export default class Upgrade extends Phaser.Scene {
    constructor () {
        super({ key: 'workshop' });

        // this.dataset = this.registry.get('player_shcema');
        // this.player_data = this.dataset.player_schema;

        // this.player.data.set('player_armor', this.player_data.armor);
        // this.player.data.set('player_credits', this.player_data.credits);
        // this.player.data.set('player_health', this.player_data.health);
        // this.player.data.set('player_name', this.player_data.name);
        // this.player.data.set('player_weap', this.player_data.primary_weap);
        // this.player.data.set('player_weap_type', this.player_data.primary_weap.name);
        // this.player.data.set('player_weap_ap', this.player_data.primary_weap.ap);
        // this.player.data.set('player_damage', this.player_data.primary_weap.damage);
        // this.player.data.set('player_resist_bleed', this.player_data.resist_bleed);
        // this.player.data.set('player_resist_kenetic', this.player_data.resist_kenetic);
        // this.player.data.set('player_resist_poison', this.player_data.resist_poison);
        // this.player.data.set('player_resist_shock', this.player_data.resist_shock);
        // this.player.data.set('player_resist_thermal', this.player_data.resist_thermal);
        // this.player.data.set('player_upgrade_points', this.player_data.upgrade_points);
        // this.player.data.set('player_isDead', this.player_data.is_dead);

        // this.player_health = this.data('player_health');
        // this.init();
    }


    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: UPGRADE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    // init() {
    // this.dataset = this.registry.getAll();
    // this.player_data = this.dataset.player_schema;
    // this.data.set('player_health', this.player_data.health);

    //     this.player.data.set('player_armor', this.player_data.armor);
    //     this.player.data.set('player_credits', this.player_data.credits);
    //     this.player.data.set('player_health', this.player_data.health);
    //     this.player.data.set('player_name', this.player_data.name);
    //     this.player.data.set('player_weap', this.player_data.primary_weap);
    //     this.player.data.set('player_weap_type', this.player_data.primary_weap.name);
    //     this.player.data.set('player_weap_ap', this.player_data.primary_weap.ap);
    //     this.player.data.set('player_damage', this.player_data.primary_weap.damage);
    //     this.player.data.set('player_resist_bleed', this.player_data.resist_bleed);
    //     this.player.data.set('player_resist_kenetic', this.player_data.resist_kenetic);
    //     this.player.data.set('player_resist_poison', this.player_data.resist_poison);
    //     this.player.data.set('player_resist_shock', this.player_data.resist_shock);
    //     this.player.data.set('player_resist_thermal', this.player_data.resist_thermal);
    //     this.player.data.set('player_upgrade_points', this.player_data.upgrade_points);
    //     this.player.data.set('player_isDead', this.player_data.is_dead);
    // }






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


        this.add_background();
        this.handle_player_data();
        this.handle_button();
        this.handle_upgrade_damage();
        this.handle_upgrade_health();
        this.handle_upgrade_armor();

    }



    add_background() {
        const bg = this.add
            .image(0, 0, 'workshop_scene')
            .setOrigin(0);

        bg.setScale(Math.max(this.camera_width / bg.width, this.camera_height / bg.height));
    }


    handle_button() {
        // this.button = new Button(this, this.center_width, this.center_height * 1.3, 190, 40, 0xCCCCCC);
        // this.button = new Button(this, this.center_width, this.center_height * 1.3, 190, 40);
        this.button = new Button(this, this.center_width, this.center_height * 1.8, 500, 120);
        this.button.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.start('splash');
        });
        // this.set_text = this.add.bitmapText(0, 0, 'global_font', 'START', 28);
        this.set_text = this.add.bitmapText(0, 0, 'global_font', 'BACK TO WORK', 50);
        Phaser.Display.Align.In.Center(this.set_text, this.button, 0, -4);
    }










    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: PLAYER ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_player_data() {
        this.dataset = this.registry.getAll();
        // this.player_data = this.game.registry.values.player_schema;
        this.player_data = this.game.registry.values.player_schema;


        console.log("WORKSHOP--PLAYER_DATA--------------DATASET:\n\n", this.dataset);
        console.log("WORKSHOP--PLAYER_DATA--------------PLAYER_DATA:\n\n", this.player_data);

        // this.player.data.set('player_armor', this.player_data.armor);
        // this.player.data.set('player_credits', this.player_data.credits);
        // this.player.data.set('player_health', this.player_data.health);
        // this.player.data.set('player_damage', this.player_data.primary_weap.damage);

        // console.log("WORKSHOP--PLAYER_DATA--------------PLAYER_DATA:\n\n", this.player_data);
        // console.log("WORKSHOP--PLAYER_DATA--------------PLAYER_DATA:\n\n", this.player_data);
        // console.log("WORKSHOP--PLAYER_DATA--------------PLAYER_DATA:\n\n", this.player_data);
        // console.log("WORKSHOP--PLAYER_DATA--------------PLAYER_DATA:\n\n", this.player_data);


        this.player_armor = this.player_data.armor;
        this.player_credits = this.player_data.credits;
        this.player_health = this.player_data.health;
        this.player_isDead = this.player_data.is_dead;
        this.player_name = this.player_data.name;
        this.player_weap = this.player_data.primary_weap;
        this.player_weap_type = this.player_data.primary_weap.name;
        this.player_weap_ap = this.player_data.primary_weap.ap;
        this.player_damage = this.player_data.primary_weap.damage;
        this.player_resist_bleed = this.player_data.resist_bleed;
        this.player_resist_kenetic = this.player_data.resist_kenetic;
        this.player_resist_poison = this.player_data.resist_poison;
        this.player_resist_shock = this.player_data.resist_shock;
        this.player_resist_thermal = this.player_data.resist_thermal;
        this.player_upgrade_points = this.player_data.upgrade_points;

        console.log("WORKSHOP--PLAYER_DATA--------------PLAYER_ARMOR:\n\n", this.player_armor);
        console.log("WORKSHOP--PLAYER_DATA--------------PLAYER_DAM:\n\n", this.player_damage);
        // console.log("WORKSHOP--PLAYER_DATA--------------PLAYER_ARMOR:\n\n", this.player_weap);
        // console.log("WORKSHOP--PLAYER_DATA--------------PLAYER_ARMOR:\n\n", this.player_weap_type);
        // console.log("WORKSHOP--PLAYER_DATA--------------PLAYER_ARMOR:\n\n", this.player_weap_ap);
        // this.player_armor = this.dataset.player_schema.armor;
        // this.player_credits = this.dataset.player_schema.credits;
        // this.player_health = this.dataset.player_schema.health;
        // this.player_isDead = this.dataset.player_schema.is_dead;
        // this.player_name = this.dataset.player_schema.name;
        // this.player_weap = this.dataset.player_schema.primary_weap;
        // this.player_weap_type = this.dataset.player_schema.primary_weap.name;
        // this.player_weap_ap = this.dataset.player_schema.primary_weap.ap;
        // this.player_damage = this.dataset.player_schema.primary_weap.damage;
        // this.player_resist_bleed = this.dataset.player_schema.resist_bleed;
        // this.player_resist_kenetic = this.dataset.player_schema.resist_kenetic;
        // this.player_resist_poison = this.dataset.player_schema.resist_poison;
        // this.player_resist_shock = this.dataset.player_schema.resist_shock;
        // this.player_resist_thermal = this.dataset.player_schema.resist_thermal;
        // this.player_upgrade_points = this.dataset.player_schema.upgrade_points;

        // console.log("WORKSHOP--PLAYER_DATA--------------DATASET:\n\n", this.player_health);

        // this.player.data.set('player_armor', this.player_data.armor);
        // this.player.data.set('player_credits', this.player_data.credits);
        // this.player.data.set('player_health', this.player_data.health);
        // this.player.data.set('player_name', this.player_data.name);
        // this.player.data.set('player_weap', this.player_data.primary_weap);
        // this.player.data.set('player_weap_type', this.player_data.primary_weap.name);
        // this.player.data.set('player_weap_ap', this.player_data.primary_weap.ap);
        // this.player.data.set('player_damage', this.player_data.primary_weap.damage);
        // this.player.data.set('player_resist_bleed', this.player_data.resist_bleed);
        // this.player.data.set('player_resist_kenetic', this.player_data.resist_kenetic);
        // this.player.data.set('player_resist_poison', this.player_data.resist_poison);
        // this.player.data.set('player_resist_shock', this.player_data.resist_shock);
        // this.player.data.set('player_resist_thermal', this.player_data.resist_thermal);
        // this.player.data.set('player_upgrade_points', this.player_data.upgrade_points);
        // this.player.data.set('player_isDead', this.player_data.is_dead);


    }









    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: UPGRADE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_upgrade_damage() {
        this.button = new Button(this, this.center_width / 2.5, this.center_height * 1.1, 500, 120);
        this.button.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            // this.scene.start('splash');
            // this.registry.get('health');
            this.registry.get('health');
            // this.data.set('player_damage', this.player_damage + 1);
            const previous_damage = this.registry.get();
            // let previous_damage = this.game.registry.values.player_schema.primary_weap.damage;
            const current_damage = previous_damage + 1;
            // this.player_data.set('player')

            console.log("WORKSHOP--UPGRADE_DAM--------------DATA:\n\n", this.game.registry.values.player_schema);
            // console.log("WORKSHOP--UPGRADE_DAM--------------DATA:\n\n", this.game.registry.);
            // console.log("WORKSHOP--UPGRADE_DAM--------------SCENE:\n\n", this.scene);
            console.log("WORKSHOP--UPGRADE_DAM--------------PLAYER_DAM:\n\n", this.player_damage);
            console.log("WORKSHOP--UPGRADE_DAM--------------PLAYER_DAM--PREV:\n\n", previous_damage);
            console.log("WORKSHOP--UPGRADE_DAM--------------PLAYER_DAM--CURRR:\n\n", current_damage);



        });
        this.set_text = this.add.bitmapText(0, 0, 'global_font', '+1 DAM / $10', 50);
        Phaser.Display.Align.In.Center(this.set_text, this.button, 0, -4);
    }



    handle_upgrade_health() {
        this.button = new Button(this, this.center_width, this.center_height * 1.1, 500, 120);
        this.button.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            // this.scene.start('splash');
        });
        this.set_text = this.add.bitmapText(0, 0, 'global_font', '+1 HEALTH / $10', 50);
        Phaser.Display.Align.In.Center(this.set_text, this.button, 0, -4);
    }



    handle_upgrade_armor() {
        this.button = new Button(this, this.center_width * 1.6, this.center_height * 1.1, 500, 120);
        this.button.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            // this.scene.start('splash');
        });
        this.set_text = this.add.bitmapText(0, 0, 'global_font', '+1 ARMR / $10', 50);
        Phaser.Display.Align.In.Center(this.set_text, this.button, 0, -4);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: UPDATE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    update() { }






}