import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  preload() {}

  create() {
    const ball = this.add.circle(400, 250, 10, 0xfffff, 1);
    this.physics.add.existing(ball);
    ball.body.setBounce(1, 1);
    ball.body.setCollideWorldBounds(true, 1, 1);
    ball.body.setVelocity(-200, 0);

    const paddleLeft = this.add.rectangle(30, 250, 30, 100, 0xfffffff, 1);
    this.physics.add.existing(paddleLeft, true);
    this.physics.add.collider(paddleLeft, ball);

    const paddleRight = this.add.rectangle(770, 250, 30, 100, 0xfffffff, 1);
    this.physics.add.existing(paddleRight, true);
    this.physics.add.collider(paddleRight, ball);
  }
}
