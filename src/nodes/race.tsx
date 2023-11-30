import { Fragment, ComponentContext, ObservableEvent, jsx } from 'butterfloat'
import { GameProps } from '../models/gamevm'

interface RaceEvents {
  darkstar: ObservableEvent<MouseEvent>
  rabbit: ObservableEvent<MouseEvent>
  seductrix: ObservableEvent<MouseEvent>
}

export default function RaceNode(
  { game }: GameProps,
  { bindImmediateEffect, events }: ComponentContext<RaceEvents>,
) {
  const { darkstar, rabbit, seductrix } = events
  const { raceVm } = game

  bindImmediateEffect(darkstar, (e) => {
    e.preventDefault()
    raceVm.darkstar()
  })
  bindImmediateEffect(rabbit, (e) => {
    e.preventDefault()
    raceVm.rabbit()
  })
  bindImmediateEffect(seductrix, (e) => {
    e.preventDefault()
    raceVm.seductrix()
  })

  return (
    <>
      <h1>Choose Your Race</h1>

      <div className="list-group">
        <a className="list-group-item" href="#" events={{ click: darkstar }}>
          <h4 className="list-group-item-heading">Darkstar Orc</h4>
          <p className="list-group-item-text">
            Outwardly terrifying, the Darkstar Orcs were once the unpaid labor
            force of the Galaxy due to their good work ethic, even if few people
            will pay them that compliment.
          </p>
        </a>
        <a className="list-group-item" href="#" events={{ click: rabbit }}>
          <h4 className="list-group-item-heading">Gamma Rabbit</h4>
          <p className="list-group-item-text">
            Meak and nearly extinct, the Gamma Rabbit is a quiet, friendly and
            fluffy species.
          </p>
        </a>
        <div className="list-group-item disabled">
          <h4 className="list-group-item-heading">
            Human{' '}
            <span className="label label-primary">
              6000 <span className="fa fa-btc"></span>
            </span>
          </h4>
          <p className="list-group-item-text">
            One of the most dangerous species in the Galaxy.
          </p>
        </div>
        <a className="list-group-item" href="#" events={{ click: seductrix }}>
          <h4 className="list-group-item-heading">Seductrix</h4>
          <p className="list-group-item-text">
            Wily and sly, the Seductrix people fill the galaxy with both
            desirable dreams and endless lies.
          </p>
        </a>
      </div>
    </>
  )
}
