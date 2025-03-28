import {
  ComponentContext,
  Empty,
  Fragment,
  ObservableEvent,
  jsx,
} from 'butterfloat'
import { GameProps } from '../models/gamevm'
import { WeaponVm } from '../models/weaponvm'
import { map } from 'rxjs'

interface WeaponEvents {
  playerNameChanged: ObservableEvent<InputEvent>
}

export default function WeaponNode(
  { game }: GameProps,
  { bindEffect, events }: ComponentContext<WeaponEvents>,
) {
  const { playerNameChanged } = events
  const { weaponVm } = game

  const weaponChoice = game.weapon.pipe(
    map((weapon) =>
      !weapon || weapon === ''
        ? () => <WeaponChoice weaponVm={weaponVm} />
        : () => <AfterWeapon weaponVm={weaponVm} />,
    ),
  )

  const afterExciting = weaponVm.exciting.pipe(
    map((exciting) =>
      exciting ? () => <AfterExciting weaponVm={weaponVm} /> : Empty,
    ),
  )

  bindEffect(playerNameChanged, (e) => {
    weaponVm.changePlayerName((e.target as HTMLInputElement).value)
  })

  return (
    <>
      <h1>Mr. Gravel's Office</h1>

      <p>
        "Ah, <span bind={{ innerText: game.honorific }}></span>{' '}
        <input
          title="Player Name"
          type="text"
          bind={{ defaultValue: game.playerName }}
          events={{ change: playerNameChanged }}
        />
        , I see you have brought your&hellip;"
      </p>

      <div childrenBind={weaponChoice} childrenBindMode="replace" />

      <div childrenBind={afterExciting} childrenBindMode="replace" />
    </>
  )
}

interface WeaponProps {
  weaponVm: WeaponVm
}

interface WeaponChoiceEvents {
  winks: ObservableEvent<MouseEvent>
  clothes: ObservableEvent<MouseEvent>
  swagger: ObservableEvent<MouseEvent>
}

function WeaponChoice(
  { weaponVm }: WeaponProps,
  { bindImmediateEffect, events }: ComponentContext<WeaponChoiceEvents>,
) {
  const { winks, clothes, swagger } = events

  bindImmediateEffect(winks, (e) => {
    e.preventDefault()
    weaponVm.winks()
  })

  bindImmediateEffect(clothes, (e) => {
    e.preventDefault()
    weaponVm.clothes()
  })

  bindImmediateEffect(swagger, (e) => {
    e.preventDefault()
    weaponVm.swagger()
  })

  return (
    <>
      <h2>Choose Your Weapon</h2>

      <div className="list-group">
        <a className="list-group-item" href="#" events={{ click: winks }}>
          <h4 className="list-group-item-heading">Arsenal of Sly Winks</h4>
          <p className="list-group-item-text">
            Sometimes all you need is a well timed twitch of the eye.
          </p>
        </a>
        <div className="list-group-item disabled">
          <h4 className="list-group-item-heading">
            Blaster{' '}
            <span className="label label-primary">
              2000 <span className="fa fa-btc"></span>
            </span>
          </h4>
          <p className="list-group-item-text">
            The quintessential laser projectile weapon of this age.
          </p>
        </div>
        <a className="list-group-item" href="#" events={{ click: clothes }}>
          <h4 className="list-group-item-heading">Foppish Clothes</h4>
          <p className="list-group-item-text">
            Snazzy dress can be a devastating weapon on the right person.
          </p>
        </a>
        <a className="list-group-item" href="#" events={{ click: swagger }}>
          <h4 className="list-group-item-heading">Sophisticated Swagger</h4>
          <p className="list-group-item-text">
            Sometimes you start commanding an army, by commanding a room.
          </p>
        </a>
        <div className="list-group-item disabled">
          <h4 className="list-group-item-heading">
            Space Ninja Saber{' '}
            <span className="label label-primary">
              2100 <span className="fa fa-btc"></span>
            </span>
          </h4>
          <p className="list-group-item-text">
            <em>
              Coming soon in our <strong>Ninja Pack</strong> DLC.
            </em>
          </p>
        </div>
      </div>
    </>
  )
}

function AfterWeapon({ weaponVm }: WeaponProps) {
  const excitingChoice = weaponVm.exciting.pipe(
    map((exciting) =>
      !exciting ? () => <ExcitingChoice weaponVm={weaponVm} /> : Empty,
    ),
  )

  return (
    <>
      <hr />

      <p>
        "&hellip;<span bind={{ innerText: weaponVm.weapon }}></span>. Excellent.
        That should come in handy later during our 8 hour testing phase of the
        interview."
      </p>

      <div childrenBind={excitingChoice} childrenBindMode="replace" />
    </>
  )
}

interface ExcitingEvents {
  nextExciting: ObservableEvent<MouseEvent>
}

export function ExcitingChoice(
  { weaponVm }: WeaponProps,
  { bindImmediateEffect, events }: ComponentContext<ExcitingEvents>,
) {
  const { nextExciting } = events

  bindImmediateEffect(nextExciting, (e) => {
    e.preventDefault()
    weaponVm.nextExciting()
  })

  return (
    <>
      <div className="list-group">
        <a
          className="list-group-item"
          href="#"
          events={{ click: nextExciting }}
        >
          <h4 className="list-group-item-heading">"That sounds exciting."</h4>
          <p className="list-group-item-text">
            Of course a good interview would require plenty of testing time.
          </p>
        </a>
        <div className="list-group-item disabled">
          <h4 className="list-group-item-heading">
            "You've got to be kidding me!"
            <span className="label label-primary">
              9001 <span className="fa fa-btc"></span>
            </span>
          </h4>
          <p className="list-group-item-text">
            Mr. Gravel has clearly seen your extensive portfolio, detailed
            resume, years of study at respected institutions, and talked to at
            least a few of your many references. Does it really take 8 hours to
            prove that you aren't a liar with a giant ability to pull off a
            major conspiracy that will pass even the strictest of background
            checks?
          </p>
        </div>
      </div>
    </>
  )
}

interface AfterExcitingEvents {
  nextPassion: ObservableEvent<MouseEvent>
}

function AfterExciting(
  { weaponVm }: WeaponProps,
  { bindImmediateEffect, events }: ComponentContext<AfterExcitingEvents>,
) {
  const { nextPassion } = events

  bindImmediateEffect(nextPassion, (e) => {
    e.preventDefault()
    weaponVm.nextPassion()
  })

  return (
    <>
      <hr />

      <p>
        "That sounds exciting," you say, thinking about the upcoming 8 space
        hours for testing.
      </p>

      <p>
        Mr. Gravel nodded in that manner that clearly showed that he would not
        put up with anything less than excited for mandatory testing. "I like
        that passion. The Macro Transaction Force was founded on passion. When
        you spend 60 to 80 hours per space week working for the force you have
        to make sure that everyone shares the same passions. The team is so
        important to the galaxy!"
      </p>

      <div className="list-group">
        <a className="list-group-item" href="#" events={{ click: nextPassion }}>
          <h4 className="list-group-item-heading">"I'm full of passion."</h4>
          <p className="list-group-item-text">
            Or maybe it is angst. Hard to tell the difference sometimes.
          </p>
        </a>
        <div className="list-group-item disabled">
          <h4 className="list-group-item-heading">
            "What about balance?"
            <span className="label label-primary">
              9902 <span className="fa fa-btc"></span>
            </span>
          </h4>
          <p className="list-group-item-text">
            Why can't there be a reasonable work-life balance? Passion is no
            substitute for having a full life with friends outside work, maybe a
            family, and even some personal time.
          </p>
        </div>
      </div>
    </>
  )
}
