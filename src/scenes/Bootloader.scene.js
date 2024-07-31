export default class Bootloader extends Phaser.Scene {
    constructor () {
        super({ key: 'bootloader' });
    }



    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: PRELOAD ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    preload() {
        this.load_fonts();
        this.load_images();
        this.load_sounds();
        this.load_datasets();
        this.set_load_events();
    }



    set_load_events() {
        this.load.on('complete', () => {
            this.scene.start('splash');
            // this.scene.start('game');           // ---- !!! TESTING PURPOSES ONLY !!! ---- //
            // this.scene.start('gameover');           // ---- !!! TESTING PURPOSES ONLY !!! ---- //
            // this.scene.start('info');           // ---- !!! TESTING PURPOSES ONLY !!! ---- //
            // this.scene.start('workshop');           // ---- !!! TESTING PURPOSES ONLY !!! ---- //
        }, this);
    }




    load_fonts() {
        this.load.bitmapFont('global_font', 'assets/fonts/Orbitron.png', 'assets/fonts/Orbitron.xml');
    }



    load_images() {
        this.load.image('player_n', 'assets/images/player/Player_Img_Neutral__01.png');
        this.load.image('player_a', 'assets/images/player/Player_Img_Attacking__01.png');
        this.load.image('mob_chase_04', 'assets/images/mobs/Mob_Chasing__04.png');
        // this.load.image('boss_img', 'assets/images/bosses/Boss_Neutral__04.png');
        this.load.image('game_scene', 'assets/images/backgrounds/GameScene_Background.png');
        this.load.image('gameover_scene', 'assets/images/backgrounds/GameOverScene_Background.png');
        this.load.image('info_scene', 'assets/images/backgrounds/InfoScene_Background.png');
        this.load.image('infosvg_scene', 'assets/images/backgrounds/InfoScene_Background.svg');
        this.load.image('workshop_scene', 'assets/images/backgrounds/WorkshopScene_Background.png');
        this.load.image('dark_scene', 'assets/images/backgrounds/DarkScene_Background.png');
        this.load.image('dk_info_scene', 'assets/images/backgrounds/DarkInfoScene_Background.png');
    }





    load_sounds() { }



    load_datasets() {

        // --- MARK: BULLET_TYPES ---//
        let weap_types = this.registry.set({
            weap_types: {
                bleed: {
                    name: 'bleed',
                    damage: 8,
                    ap: 0.5
                },
                kenetic: {
                    name: 'kenetic',
                    damage: 5,
                    ap: 1.0
                },
                poison: {
                    name: 'poison',
                    damage: 6,
                    ap: 0
                },
                shock: {
                    name: 'shock',
                    damage: 7,
                    ap: 0
                },
                thermal: {
                    name: 'thermal',
                    damage: 9,
                    ap: 0.2
                },
            }
        });






        // --- MARK: PLAYER_SCHEMA ---//
        let player_schema = this.registry.set({
            player_schema: {
                name: 'player',
                credits: 100,
                upgrade_points: 0,
                health: 100,
                armor: 10,
                resist_bleed: 0,
                resist_kenetic: 0,
                resist_poison: 0,
                resist_shock: 0,
                resist_thermal: 0,
                is_dead: false,

                // primary_weap: weap_types.values.weap_types.bleed         // 3-4 Shots
                primary_weap: weap_types.values.weap_types.kenetic          // 13 Shots
                // primary_weap: weap_types.values.weap_types.poison        // 3 Shots
                // primary_weap: weap_types.values.weap_types.shock         // 3-4 Shots
                // primary_weap: weap_types.values.weap_types.thermal       // 5 Shots
            }
        });






        // --- MARK: MOB_SCHEMA ---//
        let mob_schema = this.registry.set({
            mob_schema: {
                name: 'mob',
                // health: 250,
                health: 50,
                armor: 0,
                damage: 5,
                resist_bleed: 0,
                resist_kenetic: 0,
                resist_poison: 0,
                resist_shock: 0,
                resist_thermal: 0,
                is_dead: false,
            }
        });






        // --- MARK: MOB_SCHEMA ---//
        let boss_schema = this.registry.set({
            boss_schema: {
                name: 'mob',
                // health: 250,
                health: 200,
                armor: 10,
                damage: 10,
                resist_bleed: 5,
                resist_kenetic: 5,
                resist_poison: 5,
                resist_shock: 5,
                resist_thermal: 5,
                is_dead: false,
            }
        });
    }
}