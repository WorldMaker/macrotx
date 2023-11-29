/// <amd-dependency path="text!./boss.html" />
import ko = require('knockout')
import game = require('../components/game-page/game')
export var template: string = require('text!./boss.html')

export class viewModel {
  game = ko.observable<game.Game>()
  tea = ko.observable(false)

  constructor(params) {
    if (params && params.game) {
      this.game = params.game
    }
  }

  nextTea() {
    this.tea(true)
  }
}
