import Button from "../gameObjects/Button.gameObject";



export default class Info extends Phaser.Scene {
    constructor () {
        super({ key: 'info' });
        this.header1;
        this.header2;
        this.paragraph;
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


        // this.header1 = this.add.bitmapText(
        //     this.center_width,
        //     this.center_height,
        //     // this.center_width * 2,
        //     // this.center_height * 2,
        //     'global_font',
        //     'Another Drone, Another dollar ---',
        //     24)
        //     .setOrigin(0.5, 0.5)
        //     .setDepth(10)
        //     .setTintFill(0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF);



        this.add_background();
        this.handle_button();
    }



    add_background() {
        const bg = this.add
            .image(0, 0, 'info_scene')
            // .image(0, 0, 'info_scene')
            // .image(0, 0, 'dk_info_scene')
            .setOrigin(0);
        // .depth(1);

        bg.setScale(Math.max(this.camera_width / bg.width, this.camera_height / bg.height));
    }





    handle_button() {
        // this.button = new Button(this, this.center_width, this.center_height * 1.3, 190, 40, 0xCCCCCC);
        // this.button = new Button(this, this.center_width * 1.7, this.center_height * 1.4, 190, 40);
        this.button = new Button(this, this.center_width * 1.7, this.center_height * 1.4, 200, 60);
        this.button.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.start('game');
        });


        this.set_text = this.add.bitmapText(0, 0, 'global_font', 'START', 35);
        Phaser.Display.Align.In.Center(this.set_text, this.button, 0, -4);
    }





    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: UPDATE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    update() { }






}