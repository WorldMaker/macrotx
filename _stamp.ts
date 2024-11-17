import { JSDOM } from 'jsdom'
import { writeFile } from 'node:fs/promises'
import { Main, PageNotFound } from './src/main.js'
import {
  buildStamp,
  makeTestComponentContext,
  makeTestEvent,
} from 'butterfloat'
import { Router } from './src/router.js'
import { NavBar } from './src/nav-bar.js'
import HomePage from './src/pages/home.js'
import AboutPage from './src/pages/about.js'
import GamePage, {
  CharacterType,
  Empty,
  GetStarted,
  NodeNotFound,
  Weapon,
} from './src/pages/game.js'
import { NEVER, race } from 'rxjs'
import { GameVm } from './src/models/gamevm.js'
import RaceNode from './src/nodes/race.js'

const dom = new JSDOM(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>macrotx</title>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <link href="main.css" rel="stylesheet" />
    <script type="module" src="index-stamps.js"></script>
  </head>
  <body id="container"></body>
</html>
`)
const { window } = dom
const { document } = window
const container = document.querySelector('#container')!

globalThis.location = window.location
globalThis.window = window as unknown as any

const mainStamp = buildStamp(Main(), document)
container.append(mainStamp.content)

const pageNotFoundStamp = buildStamp(PageNotFound(), document)
pageNotFoundStamp.id = 'page-not-found'
container.append(pageNotFoundStamp)

const router = new Router()
const navBarStamp = buildStamp(NavBar({ router }), document)
navBarStamp.id = 'navbar'
container.append(navBarStamp)

const homeStamp = buildStamp(HomePage(), document)
homeStamp.id = 'home-page'
container.append(homeStamp)

const aboutStamp = buildStamp(AboutPage(), document)
aboutStamp.id = 'about-page'
container.append(aboutStamp)

const { context: gameContext } = makeTestComponentContext({
  restart: makeTestEvent<MouseEvent>(NEVER),
})
const gameStamp = buildStamp(GamePage({}, gameContext), document)
gameStamp.id = 'game-page'
container.append(gameStamp)

const nodeNotFoundStamp = buildStamp(NodeNotFound(), document)
nodeNotFoundStamp.id = 'node-not-found'
container.append(nodeNotFoundStamp)

const getStartedStamp = buildStamp(GetStarted(), document)
getStartedStamp.id = 'get-started'
container.append(getStartedStamp)

const game = new GameVm()
const characterTypeStamp = buildStamp(CharacterType({ game }), document)
characterTypeStamp.id = 'character-type'
container.append(characterTypeStamp)

const emptyStamp = buildStamp(Empty(), document)
emptyStamp.id = 'empty'
container.append(emptyStamp)

const weaponStamp = buildStamp(Weapon({ game }), document)
weaponStamp.id = 'weapon'
container.append(weaponStamp)

const { context: raceContext } = makeTestComponentContext({
  darkstar: makeTestEvent<MouseEvent>(NEVER),
  rabbit: makeTestEvent<MouseEvent>(NEVER),
  seductrix: makeTestEvent<MouseEvent>(NEVER),
})
const raceStamp = buildStamp(RaceNode({ game }, raceContext), document)
raceStamp.id = 'race'
container.append(raceStamp)

await writeFile('dist/index.html', dom.serialize())
