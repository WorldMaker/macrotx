/// <amd-dependency path="text!./class.html" />
import ko = require('knockout')
import game = require('../components/gamevm')
export var template: string = require('text!./class.html')

export class viewModel {
  game = ko.observable<game.Game>()

  constructor(params) {
    if (params && params.game) {
      this.game = params.game
    }
  }

  sjw() {
    this.game().className('Social Justice Warrior')
    this.game().node('node!gender')
  }

  enchanter() {
    this.game().className('Enchanter')
    this.game().node('node!gender')
  }

  chef() {
    this.game().className('Chef')
    this.game().node('node!gender')
  }
}
