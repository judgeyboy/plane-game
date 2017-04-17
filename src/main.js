import 'pixi'
import 'p2'
import Phaser from 'phaser'

class Game extends Phaser.Game {
  constructor(){
    super(960, 600, Phaser.AUTO, 'game')
  }
}

window.onload = function(){
  window.game = new Game()
}