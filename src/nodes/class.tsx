import { ComponentContext, Fragment, ObservableEvent, jsx } from 'butterfloat'
import { GameProps } from '../models/gamevm'

interface ClassEvents {
  chef: ObservableEvent<MouseEvent>
  enchanter: ObservableEvent<MouseEvent>
  sjw: ObservableEvent<MouseEvent>
}

export default function ClassNode(
  { game }: GameProps,
  { bindImmediateEffect, events }: ComponentContext<ClassEvents>,
) {
  const { chef, enchanter, sjw } = events
  const { classVm } = game

  bindImmediateEffect(chef, (e) => {
    e.preventDefault()
    classVm.chef()
  })

  bindImmediateEffect(enchanter, (e) => {
    e.preventDefault()
    classVm.enchanter()
  })

  bindImmediateEffect(sjw, (e) => {
    e.preventDefault()
    classVm.sjw()
  })

  return (
    <>
      <h1>Choose Your Class</h1>

      <div className="list-group">
        <div className="list-group-item disabled">
          <h4 className="list-group-item-heading">
            Assassin{' '}
            <span className="label label-primary">
              6000 <span className="fa fa-btc"></span>
            </span>
          </h4>
          <p className="list-group-item-text">
            Once a specialized role of choice for dangerous people, there seems
            to be a new one every year.
          </p>
        </div>
        <a className="list-group-item" href="#" events={{ click: chef }}>
          <h4 className="list-group-item-heading">Chef</h4>
          <p className="list-group-item-text">
            A good meal can explode minds and save worlds.
          </p>
        </a>
        <a className="list-group-item" href="#" events={{ click: enchanter }}>
          <h4 className="list-group-item-heading">Enchanter</h4>
          <p className="list-group-item-text">
            Enchanters harness the powers of illusion.
          </p>
        </a>
        <div className="list-group">
          <div className="list-group-item disabled">
            <h4 className="list-group-item-heading">
              Gamer{' '}
              <span class="label label-primary">
                6000 <span class="fa fa-btc"></span>
              </span>
            </h4>
            <p className="list-group-item-text">
              Gamers can command the respect of the entire galaxy with their
              elite skills and monster hardcore abilities.
            </p>
          </div>
          <a className="list-group-item" href="#" events={{ click: sjw }}>
            <h4 className="list-group-item-heading">Social Justice Warrior</h4>
            <p className="list-group-item-text">
              The blind fury of Justice, these Warriors fight for a just
              society, or so they claim.
            </p>
          </a>
        </div>
      </div>
    </>
  )
}
