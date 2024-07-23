const COLORS = {
    yellow: { color: 0xffcb36, radius: 8, intensity: 0.5 }
};


// export default class Bullet extends Phaser.GameObjects.Image {
//     constructor (scene, x, y, img) {
//         super(scene, x, y, img);
//         this.img = img;

export default class Bullet extends Phaser.GameObjects.PointLight {
    constructor (scene, x, y, type = "yellow", player, velocityX, velocityY) {
        const { color, radius, intensity } = COLORS[type];
        super(scene, x, y, color, radius, intensity);

        this.name = "bullet";
        this.player = player;
        this.velocityX = velocityX;
        this.velocityY = velocityY;


        // Phaser Stuff
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setAllowGravity(false);
        this.body.setVelocityX(this.velocityX);
        this.body.setVelocityY(this.velocityY);
        this.body.setCircle(6);
        this.body.setOffset(2, 1);

        this.body.setCollideWorldBounds(true);
        this.body.onWorldBounds = true;


        // Handlers
        this.init();
        this.shooting();
    }



    init() {
        this.scene.tweens.add({
            targets: this,
            duration: 200,
            intensity: { from: 0.3, to: 0.7 },
            repeat: -1,
        });
    }



    shooting() {

    }


}