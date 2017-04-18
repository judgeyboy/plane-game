import Phaser from 'phaser'

export default class Plane extends Phaser.Sprite {
  constructor (game, x, y) {
    super(game, x, y, 'plane')
    this.anchor.set(0.5, 0.5)
  }
}