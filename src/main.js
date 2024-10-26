import Phaser, { Physics } from "phaser";
import TitleScreen from "./scenes/TitleScene.js";
import Game from "./scenes/Game.js";

const config = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      //   debug: true,
    },
  },
};

const game = new Phaser.Game(config);

// each scene should have a unique name

// game.scene.add("titlescreen", TitleScreen);
// game.scene.start("titlescreen");

game.scene.add("game", Game);
game.scene.start("game");
