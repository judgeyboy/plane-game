import Phaser from 'phaser'

import Plane from '../sprites/Plane'

export default class GameState extends Phaser.State {
  preload () {
    this.game.load.image('background', 'assets/images/background.png')

    // todo: I think the ground should be a sprite as it should have physics like the cliffs
    this.game.load.image('groundGrass', 'assets/images/groundGrass.png')
    this.game.load.image('rockGrass:Down', 'assets/images/rockGrassDown.png')
    this.game.load.image('rockGrass:Up', 'assets/images/rockGrass.png')
    this.game.load.image('plane', 'assets/images/planeRed1.png')

    // level data
    this.game.load.json('level:1', 'assets/data/level01.json')
  }

  create () {
    this.game.world.setBounds(0, 0, 3500, this.game.height)
    this.game.add.image(0, 0, 'background')
    //this.game.add.image(0, 409, 'groundGrass')
    this._loadLevel(this.game.cache.getJSON('level:1'))
  }

  _loadLevel (data) {
    data.rocks.forEach(this._spawnRock, this)
    this._spawnPlane()
  }

  _spawnPlane () {
    this.plane = new Plane(this.game, 50, 240)
    this.game.add.existing(this.plane)
  }

  _spawnRock (rock) {
    this.game.add.sprite(rock.x, rock.y, rock.image)
  }
}