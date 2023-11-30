import { StateSetter, butterfly } from 'butterfloat'
import { Observable } from 'rxjs'
import { GameVm } from './gamevm'

export class ClassVm {
  readonly #game: GameVm

  readonly #className: Observable<string>
  readonly #setClassName: (className: StateSetter<string>) => void
  get className() {
    return this.#className
  }

  constructor(game: GameVm) {
    this.#game = game
    ;[this.#className, this.#setClassName] = butterfly('')
  }

  restart() {
    this.#setClassName('')
  }

  sjw() {
    this.#setClassName('Social Justice Warrior')
    this.#game.nextNode('gender')
  }

  enchanter() {
    this.#setClassName('Enchanter')
    this.#game.nextNode('gender')
  }

  chef() {
    this.#setClassName('Chef')
    this.#game.nextNode('gender')
  }
}
