import Button from "../gameObjects/Button.gameObject";


export default class GameOver extends Phaser.Scene {
    constructor () {
        super({ key: 'gameover' });
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

        // this.cameras.main.setBackgroundColor('#585858');

        this.add_background();
        this.handle_button();
    }




    add_background() {
        const bg = this.add
            .image(0, 0, 'gameover_scene')
            .setOrigin(0);

        bg.setScale(Math.max(this.camera_width / bg.width, this.camera_height / bg.height));
    }





    handle_button() {
        // this.button = new Button(this, this.center_width, this.center_height * 1.3, 190, 40, 0xCCCCCC);
        // this.button = new Button(this, this.center_width, this.center_height * 1.3, 190, 40);
        this.button = new Button(this, this.center_width, this.center_height * 1.3, 380, 120);
        this.button.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.start('splash');
        });


        // this.set_text = this.add.bitmapText(0, 0, 'global_font', 'START', 28);
        this.set_text = this.add.bitmapText(0, 0, 'global_font', 'RESTART', 50);
        Phaser.Display.Align.In.Center(this.set_text, this.button, 0, -4);
    }









    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: UPDATE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    update() { }






}