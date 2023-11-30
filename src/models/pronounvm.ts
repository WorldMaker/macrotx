import { StateSetter, butterfly } from 'butterfloat'
import { Observable } from 'rxjs'
import { GameVm } from './gamevm'

export class PronounVm {
  readonly #game: GameVm

  readonly #pronoun: Observable<string>
  readonly #setPronoun: (pronoun: StateSetter<string>) => void
  get pronoun() {
    return this.#pronoun
  }

  constructor(game: GameVm) {
    this.#game = game
    ;[this.#pronoun, this.#setPronoun] = butterfly('')
  }

  restart() {
    this.#setPronoun('')
  }

  she() {
    this.#setPronoun('she')
  }

  he() {
    this.#setPronoun('he')
  }

  they() {
    this.#setPronoun('they')
  }

  next() {
    this.#game.nextNode('weapon')
  }
}
