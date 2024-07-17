export default class Splash extends Phaser.Scene {
    constructor () {
        super({ key: 'splash' });
        this.TEMP_INIT_TEXT = null;
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

        this.TEMP_INIT_TEXT = this.add.bitmapText(this.center_width, this.center_height, 'global_font', "BOILERPLATE SETUP", 32).setOrigin(0.5, 0.5);
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: UPDATE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    update() { }






}