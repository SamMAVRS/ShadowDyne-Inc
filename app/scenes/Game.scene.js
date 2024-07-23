import Button from "../gameObjects/Button.gameObject";
import Player from "../gameObjects/Player.gameObject";
import Mob from "../gameObjects/Mob.gameObject";
import Boss from "../gameObjects/Boss.gameObject";
import Bullet from "../gameObjects/Bullet.gameObject";



const PLAYER_SPEED = 2;





export default class Game extends Phaser.Scene {
    constructor () {
        super({ key: 'game' });
        this.player = null;
        this.bullet = null;
        this.loot_value;
        this.loot_text;
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

        this.handle_player();
        this.handle_enemies();
        this.handle_colliders();
        this.handle_keyboard_input();
        this.handle_player_texture();
        this.handle_bullet();
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: H_PLAYER ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_player() {
        this.player = new Player(this, this.center_width, this.center_height, "player_n");
    }






    handle_player_texture(is_moving) {
        if (is_moving) {
            this.player.setTexture("player_a");
        }

        if (!is_moving) {
            setTimeout(() => {
                this.player.setTexture("player_n");
            }, 200);
        }
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: H_ENEMIES ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_enemies() { }



    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: H_BULLET ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_bullet() { }



    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: H_COLLIDERS ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_colliders() { }



    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: CONTROLS ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    handle_keyboard_input() {
        this.curser = this.input.keyboard.createCursorKeys();
        this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.SPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.SHIFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
    }






    ///////////////////////////////////////////////////////////////////////////////////////////
    // ------------- MARK: UPDATE ------------- // 
    //////////////////////////////////////////////////////////////////////////////////////////

    update() {
        if (this.curser.left.isDown || this.A.isDown) {
            this.handle_player_texture(true);
            this.player.flipX = true;
            this.player.x -= PLAYER_SPEED;
        }
        if (this.curser.right.isDown || this.D.isDown) {
            this.handle_player_texture(true);
            this.player.flipX = false;
            this.player.x += PLAYER_SPEED;
        }
        if (this.curser.up.isDown || this.W.isDown) {
            this.handle_player_texture(true);
            this.player.y -= PLAYER_SPEED;
        }
        if (this.curser.down.isDown || this.S.isDown) {
            this.handle_player_texture(true);
            this.player.y += PLAYER_SPEED;
        }
        if (this.curser.space.isDown || this.SPACE.isDown) {
            this.handle_player_texture(true);
        }



        if (Phaser.Input.Keyboard.JustUp(this.SPACE)) {
            this.handle_player_texture(false);
        }
        if (Phaser.Input.Keyboard.JustUp(this.A)) {
            this.handle_player_texture(false);
        }
        if (Phaser.Input.Keyboard.JustUp(this.D)) {
            this.handle_player_texture(false);
        }
        if (Phaser.Input.Keyboard.JustUp(this.W)) {
            this.handle_player_texture(false);
        }
        if (Phaser.Input.Keyboard.JustUp(this.S)) {
            this.handle_player_texture(false);
        }

    }
}