/// <amd-dependency path="text!./race.html" />
import ko = require('knockout')
import game = require('../components/gamevm')
export var template: string = require('text!./race.html')

export class viewModel {
  game = ko.observable<game.Game>()

  constructor(params) {
    if (params && params.game) {
      this.game = params.game
    }
  }

  rabbit() {
    this.game().race('Gamma Rabbit')
    this.game().node('node!class')
  }

  seductrix() {
    this.game().race('Seductrix')
    this.game().node('node!class')
  }

  darkstar() {
    this.game().race('Darkstar Orc')
    this.game().node('node!class')
  }
}
