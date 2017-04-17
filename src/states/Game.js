import Phaser from 'phaser'

export default class GameState extends Phaser.State {
  preload () {
    this.game.load.image('background', 'assets/images/background.png')
  }

  create () {
    this.game.add.image(0, 0, 'background')
  }
}