import { StateSetter, butterfly } from 'butterfloat'
import { Observable, map } from 'rxjs'

export class GameVm {
  readonly #node: Observable<string>
  readonly #setNode: (node: StateSetter<string>) => void
  get node() {
    return this.#node
  }

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

  readonly #race: Observable<string>
  readonly #setRace: (race: StateSetter<string>) => void
  get race() {
    return this.#race
  }

  readonly #className: Observable<string>
  readonly #setClassName: (className: StateSetter<string>) => void
  get className() {
    return this.#className
  }

  readonly #pronoun: Observable<string>
  readonly #setPronoun: (pronoun: StateSetter<string>) => void
  get pronoun() {
    return this.#pronoun
  }

  readonly #honorific: Observable<string>
  get honorific() {
    return this.#honorific
  }

  readonly #playerName: Observable<string>
  readonly #setPlayerName: (playerName: StateSetter<string>) => void
  get playerName() {
    return this.#playerName
  }

  readonly #weapon: Observable<string>
  readonly #setWeapon: (weapon: StateSetter<string>) => void
  get weapon() {
    return this.#weapon
  }

  readonly #ap: Observable<number>
  readonly #setAp: (ap: StateSetter<number>) => void
  get ap() {
    return this.#ap
  }

  constructor() {
    ;[this.#node, this.#setNode] = butterfly('race')
    ;[this.#a, this.#setA] = butterfly('a')
    ;[this.#gender, this.#setGender] = butterfly('')
    ;[this.#race, this.#setRace] = butterfly('')
    ;[this.#className, this.#setClassName] = butterfly('')
    ;[this.#pronoun, this.#setPronoun] = butterfly('')
    ;[this.#playerName, this.#setPlayerName] = butterfly('You')
    ;[this.#weapon, this.#setWeapon] = butterfly('')
    ;[this.#ap, this.#setAp] = butterfly(5)

    this.#honorific = this.pronoun.pipe(
      map((pronoun) => (pronoun === 'she' ? 'Ms.' : 'Mr.')),
    )
  }

  nextNode(node: string) {
    this.#setNode(node)
    this.#setAp((ap) => ap - 1)
  }
}
