import { Observable, fromEvent, map, shareReplay } from 'rxjs'

const Routes: Record<string, string> = {
  '': 'home',
  '#play': 'game',
  '#about': 'about',
}

export class Router {
  readonly #page: Observable<string>
  get page() {
    return this.#page
  }

  constructor() {
    const hashChange = fromEvent<HashChangeEvent>(window, 'hashchange')
    this.#page = hashChange.pipe(
      map((event) => Routes[event.newURL] ?? 'home'),
      shareReplay(1),
    )
  }
}
