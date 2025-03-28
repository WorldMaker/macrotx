import {
  ComponentContext,
  Empty,
  Fragment,
  ObservableEvent,
  jsx,
} from 'butterfloat'
import { map } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import { GameProps, GameVm } from '../models/gamevm'

export function NodeNotFound() {
  return <p>Game node not found.</p>
}

export function GetStarted() {
  return <p>Please select a character race to get started.</p>
}

export function CharacterType({ game }: GameProps) {
  return (
    <p>
      You are <span bind={{ innerText: game.a }}></span>{' '}
      <span bind={{ innerText: game.gender }}></span>{' '}
      <span bind={{ innerText: game.race }}></span>{' '}
      <span bind={{ innerText: game.className }}></span>.
    </p>
  )
}

export function Weapon({ game }: GameProps) {
  return (
    <p>
      You are wielding your <span bind={{ innerText: game.weapon }}></span>.
    </p>
  )
}

interface GamePageProps {}

interface GamePageEvents {
  restart: ObservableEvent<MouseEvent>
}

export default function GamePage(
  _props: GamePageProps,
  { bindEffect, events }: ComponentContext<GamePageEvents>,
) {
  const game = new GameVm()

  const nodeComponent = game.nodeComponent.pipe(
    map((nodeComponent) => nodeComponent ?? NodeNotFound),
    tag('game-node-component'),
  )

  const characterType = game.race.pipe(
    map((race) =>
      !race || race === '' ? GetStarted : () => <CharacterType game={game} />,
    ),
  )

  const ap = game.ap.pipe(map((ap) => ap.toLocaleString()))

  const weapon = game.weapon.pipe(
    map((weapon) =>
      !weapon || weapon === '' ? Empty : () => <Weapon game={game} />,
    ),
  )

  bindEffect(events.restart, () => {
    game.restart()
  })

  return (
    <>
      <div
        className="col-md-10"
        childrenBind={nodeComponent}
        childrenBindMode="replace"
      ></div>

      <div className="col-md-2">
        <h3 bind={{ innerText: game.playerName }}></h3>

        <div childrenBind={characterType} childrenBindMode="replace" />

        <h3>Assets</h3>
        <p>
          You currently have{' '}
          <span className="label label-danger">
            0 <span className="fa fa-btc"></span>
          </span>{' '}
          space bucks.
        </p>

        <div childrenBind={weapon} childrenBindMode="replace" />

        <p>
          You have{' '}
          <span className="label label-info" bind={{ innerText: ap }}></span>{' '}
          action points remaining today.
        </p>

        <h3>Game Options</h3>
        <button
          type="button"
          className="btn btn-danger btn-block"
          events={{ click: events.restart }}
        >
          <span className="fa fa-refresh"></span> Restart Game
        </button>
      </div>
    </>
  )
}
