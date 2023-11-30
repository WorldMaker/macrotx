import { Component, StateSetter, butterfly } from 'butterfloat'
import { Observable, map, shareReplay } from 'rxjs'
import { NodeComponents } from '../nodes'
import { RaceVm } from './racevm'
import { ClassVm } from './classvm'
import { GenderVm } from './gendervm'
import { PronounVm } from './pronounvm'
import { WeaponVm } from './weaponvm'

export interface GameProps {
  game: GameVm
}

export class GameVm {
  readonly #node: Observable<string>
  readonly #setNode: (node: StateSetter<string>) => void
  get node() {
    return this.#node
  }

  readonly #nodeComponent: Observable<Component | null>
  get nodeComponent() {
    return this.#nodeComponent
  }

  readonly #genderVm: GenderVm
  get genderVm() {
    return this.#genderVm
  }
  get a() {
    return this.#genderVm.a
  }
  get gender() {
    return this.#genderVm.gender
  }

  readonly #raceVm: RaceVm
  get raceVm() {
    return this.#raceVm
  }
  get race() {
    return this.raceVm.race
  }

  readonly #classVm: ClassVm
  get classVm() {
    return this.#classVm
  }
  get className() {
    return this.classVm.className
  }

  readonly #pronounVm: PronounVm
  get pronounVm() {
    return this.#pronounVm
  }
  get pronoun() {
    return this.pronounVm.pronoun
  }

  readonly #honorific: Observable<string>
  get honorific() {
    return this.#honorific
  }

  readonly #weaponVm: WeaponVm
  get weaponVm() {
    return this.#weaponVm
  }
  get playerName() {
    return this.weaponVm.playerName
  }
  get weapon() {
    return this.weaponVm.weapon
  }

  readonly #ap: Observable<number>
  readonly #setAp: (ap: StateSetter<number>) => void
  get ap() {
    return this.#ap
  }

  constructor() {
    ;[this.#node, this.#setNode] = butterfly('race')
    ;[this.#ap, this.#setAp] = butterfly(5)

    this.#genderVm = new GenderVm(this)
    this.#raceVm = new RaceVm(this)
    this.#classVm = new ClassVm(this)
    this.#pronounVm = new PronounVm(this)
    this.#weaponVm = new WeaponVm(this)

    this.#nodeComponent = this.node.pipe(
      map((node) => {
        const component = NodeComponents[node]
        if (component) {
          return component(this)
        } else {
          return null
        }
      }),
      shareReplay(1),
    )

    this.#honorific = this.pronoun.pipe(
      map((pronoun) => (pronoun === 'she' ? 'Ms.' : 'Mr.')),
    )
  }

  restart() {
    this.#setNode('race')
    this.genderVm.restart()
    this.raceVm.restart()
    this.classVm.restart()
    this.pronounVm.restart()
    this.weaponVm.restart()
    this.#setAp(5)
  }

  nextNode(node: string) {
    this.#setNode(node)
    this.#setAp((ap) => ap - 1)
  }
}
