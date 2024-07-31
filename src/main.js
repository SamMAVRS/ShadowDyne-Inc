import Phaser from 'phaser';

// import Bootloader from 'src/scenes/Bootloader.scene.js';
// import Game from 'src/scenes/Game.scene.js';
// import GameOver from 'src/scenes/GameOver.scene.js';
// import Splash from 'src/scenes/Splash.scene.js';
// import Workshop from 'src/scenes/Workshop.scene.js';
// import Info from 'src/scenes/Info.scene.js';

import Bootloader from './scenes/Bootloader.scene';
import Game from './scenes/Game.scene';
import GameOver from './scenes/GameOver.scene';
import Splash from './scenes/Splash.scene';
import Workshop from './scenes/Workshop.scene';
import Info from './scenes/Info.scene';



const config = {
    type: Phaser.AUTO,
    render: { pixelArt: true },         // Prevents pixels from blurring when scaled up
    // width: 600,
    // height: 300,
    // width: 800,
    // height: 400,
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    autoRound: false,
    parent: 'game_container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
            // debug: true,
        },
    },

    scene: [Bootloader, Game, GameOver, Splash, Info, Workshop],
};



const game = new Phaser.Game(config);














