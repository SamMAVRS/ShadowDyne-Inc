import Phaser from 'phaser';

import Bootloader from './scenes/Bootloader.scene';
import Game from './scenes/Game.scene';
import GameOver from './scenes/GameOver.scene';
import Splash from './scenes/Splash.scene';



const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 300,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    autoRound: false,
    parent: 'game_container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 150 },              // --- TEMP GRAVITY SETTING ---
            debug: true,
        },
    },

    scene: [Bootloader, Game, GameOver, Splash],
};



const game = new Phaser.Game(config);














