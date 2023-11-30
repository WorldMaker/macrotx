import { StateSetter, butterfly } from 'butterfloat'
import { GameVm } from './gamevm'
import { Observable } from 'rxjs'

export class RaceVm {
  readonly #game: GameVm

  readonly #race: Observable<string>
  readonly #setRace: (race: StateSetter<string>) => void
  get race() {
    return this.#race
  }

  constructor(game: GameVm) {
    this.#game = game
    ;[this.#race, this.#setRace] = butterfly('')
  }

  restart() {
    this.#setRace('')
  }

  rabbit() {
    this.#setRace('Gamma Rabbit')
    this.#game.nextNode('class')
  }

  seductrix() {
    this.#setRace('Seductrix')
    this.#game.nextNode('class')
  }

  darkstar() {
    this.#setRace('Darkstar Orc')
    this.#game.nextNode('class')
  }
}
