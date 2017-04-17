import 'pixi'
import 'p2'
import Phaser from 'phaser'

import GameState from './states/Game'

class Game extends Phaser.Game {
  constructor(){
    super(800, 480, Phaser.AUTO, 'game')
    this.state.add('game', GameState)
    this.state.start('game')
  }
}

window.game = new Game()