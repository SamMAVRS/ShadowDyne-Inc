import Button from "../gameObjects/Button.gameObject";



export default class Splash extends Phaser.Scene {
    constructor () {
        super({ key: 'splash' });
        this.title_card;
        this.set_text;
        this.cursor;
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

        this.add_images();
        this.add_button();



        // ---- PLAYER CHARACTER LEFT OF TITLE CARD ---- //
        this.title_card = this.add.bitmapText(this.center_width, this.center_height / 2, 'global_font', "SHADOWDYNE", 54).setOrigin(0.5, 0.5);
        this.title_card = this.add.bitmapText(this.center_width, this.center_height / 1.2, 'global_font', "The RE:Shadowdynening 2", 32).setOrigin(0.5, 0.5);

        // ---- PLAYER CHARACTER ABOVER TITLE CARD ---- //
        // this.title_card = this.add.bitmapText(this.center_width, this.center_height / 1.1, 'global_font', "SHADOWDYNE", 54).setOrigin(0.5, 0.5);
        // this.title_card = this.add.bitmapText(this.center_width, this.center_height * 1.2, 'global_font', "The RE:Shadowdynening 2", 32).setOrigin(0.5, 0.5);



        this.cursor = this.input.mouse.enabled = true;
    }



    add_images() {
        // ---- PLAYER CHARACTER LEFT OF TITLE CARD ---- //
        this.add.image(this.center_width / 7.5, this.center_height * 1.4, 'player_neutral_01_img')
            .setOrigin(0.5, 0.5)
            .setScale(5);


        // ---- PLAYER CHARACTER ABOVER TITLE CARD ---- //
        // this.add.image(this.center_width / 2, this.center_height / 2, 'player_neutral_01_img')
        //     .setOrigin(0.5, 0.5)
        //     .setScale(4);
    }


    add_button() {
        // this.button = new Button(this, this.center_width, this.center_height * 1.3, 190, 40, 0xCCCCCC);
        this.button = new Button(this, this.center_width, this.center_height * 1.3, 190, 40);
        this.button.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.switch('game');
        });


        this.set_text = this.add.bitmapText(0, 0, 'global_font', 'START', 28);
        Phaser.Display.Align.In.Center(this.set_text, this.button, 0, -4);
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: UPDATE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    update() { }






}