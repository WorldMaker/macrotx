/// <amd-dependency path="text!./game.html" />
import ko = require('knockout')
export var template: string = require('text!./game.html')

export class Game {
  node = ko.observable<string>('node!race')

  a = ko.observable<string>('a')
  gender = ko.observable<string>('')
  race = ko.observable<string>()
  className = ko.observable<string>('')
  pronoun = ko.observable<string>('')
  honorific = ko.computed(() => (this.pronoun() == 'she' ? 'Ms.' : 'Mr.'))
  playerName = ko.observable<string>('You')
  weapon = ko.observable<string>()

  ap = ko.observable<number>(5)

  constructor() {
    this.node.subscribe((value) => this.ap(this.ap() - 1))
  }
}

export class viewModel {
  game = ko.observable<Game>()

  constructor() {
    this.restart()
  }

  restart() {
    this.game(new Game())
  }
}
