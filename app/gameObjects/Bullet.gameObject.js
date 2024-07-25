const RESISTENCES = {
    kenetic: { color: 0xf7f7f7, radius: 8, intensity: 0.5 },
    thermal: { color: 0xffcb36, radius: 8, intensity: 0.5 },
    shock: { color: 0x2688ff, radius: 8, intensity: 0.5 },
    poison: { color: 0x00d170, radius: 8, intensity: 0.5 },
    bleed: { color: 0xf70505, radius: 8, intensity: 0.5 },
};






export default class Bullet extends Phaser.GameObjects.PointLight {
    // constructor (scene, x, y, type = "kenetic", velocity) {
    // constructor (scene, x, y, type = "kenetic", pointerX, pointerY) {
    // constructor (scene, x, y, type = "kenetic", player, velocityX, velocityY) {
    // constructor (scene, x, y, type = "kenetic", velocityX, velocityY) {
    constructor (scene, x, y, type = "kenetic", velocityX = 0, velocityY = -300) {

        const { color, radius, intensity } = RESISTENCES[type];
        super(scene, x, y, color, radius, intensity);

        this.name = "bullet";



        // this.bullet_resist = {
        //     kenetic: this.on_kenetic(this),
        //     thermal: this.on_thermal(this),
        //     shock: this.on_shock(this),
        //     poison: this.on_poision(this),
        //     bleed: this.on_bleed(this),
        // };

        // this.bullet_resist = {
        //     kenetic: this.on_kenetic(this.type),
        //     thermal: this.on_thermal(this.type),
        //     shock: this.on_shock(this.type),
        //     poison: this.on_poision(this.type),
        //     bleed: this.on_bleed(this.type),
        // };

        // this.bullet_resist = {
        //     kenetic: this.on_kenetic(RESISTENCES),
        //     thermal: this.on_thermal(RESISTENCES),
        //     shock: this.on_shock(RESISTENCES),
        //     poison: this.on_poision(RESISTENCES),
        //     bleed: this.on_bleed(RESISTENCES),
        // };



        // Phaser Stuff
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setAllowGravity(false);

        this.body.setVelocityX(velocityX);
        this.body.setVelocityY(velocityY);

        this.body.setCircle(6);
        this.body.setOffset(2, 1);

        this.body.setCollideWorldBounds(false);
        // this.body.setCollideWorldBounds(true);          // ------ FOR TESTING ONLY ------ //
        this.body.onWorldBounds = true;

        // Handlers
        this.init();
        this.shooting(this.x, this.y, RESISTENCES[type]);
        setTimeout(() => this.destroy(), 3500);             // DESTROYS BULLETS AFTER SET TIME
    }






    shooting(x, y, resistence) {
        // this.bullet_resist[type](x, y, resistence);
    }



    on_kenetic(x, y, resistence) {
        // this.physics.add(x, y, resistence);
        // this.scene.add(this.scene, x, y, resistence);
    }
    on_thermal(x, y, resistence) { }
    on_shock(x, y, resistence) { }
    on_poision(x, y, resistence) { }
    on_bleed(x, y, resistence) { }





    init() {
        this.scene.tweens.add({
            targets: this,
            duration: 200,
            intensity: { from: 0.1, to: 0.9 },
            repeat: -1,
            // repeat: 3,
            // onComplete: () => {
            //     this.destroy();
            // }
        });
    }






    destroy() {
        super.destroy();
    }
}