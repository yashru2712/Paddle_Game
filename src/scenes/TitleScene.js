import Phaser from "phaser";

export default class TitleScreen extends Phaser.Scene {
  // every scene have a preload and a create function
  preload() {}

  create() {
    const text = this.add.text(400, 250, "hello world!");
    text.setOrigin(0.5, 0.5);
  }
}
