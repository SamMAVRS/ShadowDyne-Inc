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
        this.set_load_events();
    }



    set_load_events() {
        this.load.on('complete', () => {
            this.scene.start('splash');
        });
    }




    load_fonts() {
        this.load.bitmapFont('global_font', 'assets/fonts/Orbitron.png', 'assets/fonts/Orbitron.xml');
    }



    load_images() { }



    load_sounds() { }

}