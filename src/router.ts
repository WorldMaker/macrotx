import { Observable, concat, fromEvent, map, of, shareReplay, tap } from 'rxjs'

const Routes: Record<string, string> = {
  '': 'home',
  '#': 'home',
  '#play': 'game',
  '#about': 'about',
}

export class Router {
  readonly #page: Observable<string>
  get page() {
    return this.#page
  }

  constructor() {
    const hash = concat(
      of(location.hash),
      fromEvent<HashChangeEvent>(window, 'hashchange').pipe(
        map(() => location.hash),
      ),
    )
    this.#page = hash.pipe(
      map((hash) => Routes[hash] ?? 'home'),
      shareReplay(1),
    )
  }
}
