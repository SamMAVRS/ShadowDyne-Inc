export default class Button extends Phaser.GameObjects.Rectangle {
    constructor (scene, x, y, width, height, color = 0xCCCCCC) {
        super(scene, x, y, width, height, color);
        this.scene.add.existing(this);
        this.rectangle_fx = this.postFX;
        this.rectangle_fx.addShadow(0.5, 1, 0.2, 3, 0x222222, 5, 0.4);

        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.setFillStyle('0x555555');
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.setFillStyle('0xCCCCCC');
            });
    }
}