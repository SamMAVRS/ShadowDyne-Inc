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
        this.load_sprites();
        this.load_sounds();
        this.load_datasets();
        this.set_load_events();
    }



    set_load_events() {
        this.load.on('complete', () => {
            // this.scene.start('splash');
            this.scene.start('game');           // ---- !!! TESTING PURPOSES ONLY !!! ---- //
        });
    }




    load_fonts() {
        this.load.bitmapFont('global_font', 'assets/fonts/Orbitron.png', 'assets/fonts/Orbitron.xml');
    }



    load_images() {
        this.load.image('player_n', 'assets/images/player/Player_Img_Neutral__01.png');
        this.load.image('player_a', 'assets/images/player/Player_Img_Attacking__01.png');
        // this.load.image('mob_attacking_04_img', 'assets/images/mobs/Mob_Chasing__04.png');
        // this.load.image('boss_neutral_04_img', 'assets/images/bosses/Boss_Neutral__04.png');
        this.load.image('bullet', 'assets/images/objects/Bullet__01.png');
    }



    load_sprites() { }



    load_sounds() { }



    load_datasets() {
        this.load.json('resistences_data', 'data/resistences.json');
        this.load.json('mobs_data', 'data/mobs.json');
    }

}