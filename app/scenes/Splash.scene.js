import Button from "../gameObjects/Button.gameObject";



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


        this.add_images();
        this.add_button();
    }



    add_images() {
        this.add.image(this.center_width / 2, this.center_height / 2, 'player_neutral_01_img')
            .setOrigin(0, 0)
            .setScale(3);
    }


    add_button() {
        this.add.rectangle();
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: UPDATE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    update() { }






}