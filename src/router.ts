import { Component } from 'butterfloat'
import { Observable, concat, fromEvent, map, of, shareReplay } from 'rxjs'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import GamePage from './pages/game'

const Routes: Record<string, string> = {
  '': 'home',
  '#': 'home',
  '#play': 'game',
  '#about': 'about',
}

const PageComponents: Record<string, Component> = {
  home: HomePage,
  about: AboutPage,
  game: GamePage,
}

export class Router {
  readonly #page: Observable<string>
  get page() {
    return this.#page
  }

  readonly #component: Observable<Component | undefined>
  get component() {
    return this.#component
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
    this.#component = this.page.pipe(
      map((pageName) => PageComponents[pageName]),
    )
  }
}
