/// <amd-dependency path="text!./gender.html" />
import ko = require('knockout')
import game = require('../components/game-page/game')
export var template: string = require('text!./gender.html')

export class viewModel {
  game = ko.observable<game.Game>()

  constructor(params) {
    if (params && params.game) {
      this.game = params.game
    }
  }

  agender() {
    this.game().a('an')
    this.game().gender('agender')
    this.game().node('node!pronoun')
  }

  female() {
    this.game().gender('female')
    this.game().node('node!pronoun')
  }

  herm() {
    this.game().gender('hermaphrodite')
    this.game().node('node!pronoun')
  }

  transfemale() {
    this.game().gender('transfemale')
    this.game().node('node!pronoun')
  }

  transmale() {
    this.game().gender('transmale')
    this.game().node('node!pronoun')
  }
}
