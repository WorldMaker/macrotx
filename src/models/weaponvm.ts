import { StateSetter, butterfly } from 'butterfloat'
import { Observable } from 'rxjs'
import { GameVm } from './gamevm'

export class WeaponVm {
  readonly #game: GameVm

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

  readonly #exciting: Observable<boolean>
  readonly #setExciting: (exciting: StateSetter<boolean>) => void
  get exciting() {
    return this.#exciting
  }

  constructor(game: GameVm) {
    this.#game = game
    ;[this.#playerName, this.#setPlayerName] = butterfly('You')
    ;[this.#weapon, this.#setWeapon] = butterfly('')
    ;[this.#exciting, this.#setExciting] = butterfly(false)
  }

  restart() {
    this.#setPlayerName('You')
    this.#setWeapon('')
    this.#setExciting(false)
  }

  changePlayerName(name: string) {
    this.#setPlayerName(name)
  }

  winks() {
    this.#setWeapon('Arsenal of Sly Winks')
  }

  clothes() {
    this.#setWeapon('Foppish Clothes')
  }

  swagger() {
    this.#setWeapon('Sophisticated Swagger')
  }

  nextExciting() {
    this.#setExciting(true)
  }

  nextPassion() {
    this.#game.nextNode('boss')
  }
}
