export default class Game extends Phaser.Scene {
    constructor () {
        super({ key: 'game' });
        this.TEST_CARD;
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


        this.TEST_CARD = this.add.bitmapText(this.center_width, this.center_height / 2, 'global_font', "TEEEEEEEST", 54).setOrigin(0.5, 0.5);
        this.TEST_CARD = this.add.bitmapText(this.center_width, this.center_height / 1.2, 'global_font', "The RE:TESTESTESTEST 2", 32).setOrigin(0.5, 0.5);



    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: UPDATE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    update() { }






}