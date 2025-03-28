import { runStamps, StampCollection } from 'butterfloat'
import { Main, PageNotFound } from './main.js'
import { NavBar } from './nav-bar.js'
import HomePage from './pages/home.js'
import AboutPage from './pages/about.js'
import GamePage, {
  CharacterType,
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
    container.querySelector<HTMLTemplateElement>('#page-not-found')!,
  )
  .registerOnlyStamp(
    NavBar,
    container.querySelector<HTMLTemplateElement>('#navbar')!,
  )
  .registerOnlyStamp(
    HomePage,
    container.querySelector<HTMLTemplateElement>('#home-page')!,
  )
  .registerOnlyStamp(
    AboutPage,
    container.querySelector<HTMLTemplateElement>('#about-page')!,
  )
  .registerOnlyStamp(
    GamePage,
    container.querySelector<HTMLTemplateElement>('#game-page')!,
  )
  .registerOnlyStamp(
    NodeNotFound,
    container.querySelector<HTMLTemplateElement>('#node-not-found')!,
  )
  .registerOnlyStamp(
    GetStarted,
    container.querySelector<HTMLTemplateElement>('#get-started')!,
  )
  .registerOnlyStamp(
    CharacterType,
    container.querySelector<HTMLTemplateElement>('#character-type')!,
  )
  .registerOnlyStamp(
    Weapon,
    container.querySelector<HTMLTemplateElement>('#weapon')!,
  )
  .registerOnlyStamp(
    RaceNode,
    container.querySelector<HTMLTemplateElement>('#race')!,
  )

runStamps(container, Main, stamps)
