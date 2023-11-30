import { StateSetter, butterfly } from 'butterfloat'
import { Observable } from 'rxjs'

export class BossVm {
  readonly #tea: Observable<boolean>
  readonly #setTea: (tea: StateSetter<boolean>) => void
  get tea() {
    return this.#tea
  }

  constructor() {
    ;[this.#tea, this.#setTea] = butterfly(false)
  }

  nextTea() {
    this.#setTea(true)
  }
}
