import { Observable } from 'rxjs'
import { GameVm } from './gamevm'
import { StateSetter, butterfly } from 'butterfloat'

export class GenderVm {
  readonly #game: GameVm

  readonly #a: Observable<string>
  readonly #setA: (a: StateSetter<string>) => void
  get a() {
    return this.#a
  }

  readonly #gender: Observable<string>
  readonly #setGender: (gender: StateSetter<string>) => void
  get gender() {
    return this.#gender
  }

  constructor(game: GameVm) {
    this.#game = game
    ;[this.#a, this.#setA] = butterfly('a')
    ;[this.#gender, this.#setGender] = butterfly('')
  }

  restart() {
    this.#setA('a')
    this.#setGender('')
  }

  agender() {
    this.#setA('an')
    this.#setGender('agender')
    this.#game.nextNode('pronoun')
  }

  female() {
    this.#setGender('female')
    this.#game.nextNode('pronoun')
  }

  herm() {
    this.#setGender('hermaphrodite')
    this.#game.nextNode('pronoun')
  }

  transfemale() {
    this.#setGender('transfemale')
    this.#game.nextNode('pronoun')
  }

  transmale() {
    this.#setGender('transmale')
    this.#game.nextNode('pronoun')
  }
}
