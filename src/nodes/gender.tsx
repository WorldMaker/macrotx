import { ComponentContext, Fragment, ObservableEvent, jsx } from 'butterfloat'
import { GameProps } from '../models/gamevm'

interface GenderEvents {
  agender: ObservableEvent<MouseEvent>
  female: ObservableEvent<MouseEvent>
  herm: ObservableEvent<MouseEvent>
  transfemale: ObservableEvent<MouseEvent>
  transmale: ObservableEvent<MouseEvent>
}

export default function GenderNode(
  { game }: GameProps,
  { bindImmediateEffect, events }: ComponentContext<GenderEvents>,
) {
  const { agender, female, herm, transfemale, transmale } = events
  const { genderVm } = game

  bindImmediateEffect(agender, (e) => {
    e.preventDefault()
    genderVm.agender()
  })

  bindImmediateEffect(female, (e) => {
    e.preventDefault()
    genderVm.female()
  })

  bindImmediateEffect(herm, (e) => {
    e.preventDefault()
    genderVm.herm()
  })

  bindImmediateEffect(transfemale, (e) => {
    e.preventDefault()
    genderVm.transfemale()
  })

  bindImmediateEffect(transmale, (e) => {
    e.preventDefault()
    genderVm.transmale()
  })

  return (
    <>
      <h1>Choose Your Gender</h1>

      <div className="list-group">
        <a className="list-group-item" href="#" events={{ click: agender }}>
          <h4 className="list-group-item-heading">Agender</h4>
          <p className="list-group-item-text">Dymorphism is not for you.</p>
        </a>
        <a className="list-group-item" href="#" events={{ click: female }}>
          <h4 className="list-group-item-heading">Female</h4>
          <p className="list-group-item-text">Woman; lady; girl.</p>
        </a>
        <a className="list-group-item" href="#" events={{ click: herm }}>
          <h4 className="list-group-item-heading">Hermaphrodite</h4>
          <p className="list-group-item-text">Be all that you can be.</p>
        </a>
        <div className="list-group-item disabled">
          <h4 className="list-group-item-heading">
            Male{' '}
            <span className="label label-primary">
              6000 <span className="fa fa-btc"></span>
            </span>
          </h4>
          <p className="list-group-item-text">Man; guy; dude; bro; broham.</p>
        </div>
        <a className="list-group-item" href="#" events={{ click: transfemale }}>
          <h4 className="list-group-item-heading">Transfemale</h4>
          <p className="list-group-item-text">
            You have succesfully navigated the over-complicated gender divide.
          </p>
        </a>
        <a className="list-group-item" href="#" events={{ click: transmale }}>
          <h4 className="list-group-item-heading">Transmale</h4>
          <p className="list-group-item-text">
            You have succesfully navigated the over-complicated gender divide.
          </p>
        </a>
      </div>
    </>
  )
}
