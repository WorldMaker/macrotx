import { runStamps, StampCollection } from 'butterfloat'
import { Main, PageNotFound } from './main.js'
import { NavBar } from './nav-bar.js'
import HomePage from './pages/home.js'
import AboutPage from './pages/about.js'
import GamePage, {
  CharacterType,
  Empty,
  GetStarted,
  NodeNotFound,
  Weapon,
} from './pages/game.js'
import RaceNode from './nodes/race.js'

const container = document.getElementById('container')!
const stamps = new StampCollection()

stamps
  .registerPrestamp(Main, container)
  .registerOnlyStamp(
    PageNotFound,
    container.querySelector('#page-not-found') as HTMLTemplateElement,
  )
  .registerOnlyStamp(
    NavBar,
    container.querySelector('#navbar') as HTMLTemplateElement,
  )
  .registerOnlyStamp(
    HomePage,
    container.querySelector('#home-page') as HTMLTemplateElement,
  )
  .registerOnlyStamp(
    AboutPage,
    container.querySelector('#about-page') as HTMLTemplateElement,
  )
  .registerOnlyStamp(
    GamePage,
    container.querySelector('#game-page') as HTMLTemplateElement,
  )
  .registerOnlyStamp(
    NodeNotFound,
    container.querySelector('#node-not-found') as HTMLTemplateElement,
  )
  .registerOnlyStamp(
    GetStarted,
    container.querySelector('#get-started') as HTMLTemplateElement,
  )
  .registerOnlyStamp(
    CharacterType,
    container.querySelector('#character-type') as HTMLTemplateElement,
  )
  .registerOnlyStamp(
    Empty,
    container.querySelector('#empty') as HTMLTemplateElement,
  )
  .registerOnlyStamp(
    Weapon,
    container.querySelector('#weapon') as HTMLTemplateElement,
  )
  .registerOnlyStamp(
    RaceNode,
    container.querySelector('#race') as HTMLTemplateElement,
  )

runStamps(container, Main, stamps)
