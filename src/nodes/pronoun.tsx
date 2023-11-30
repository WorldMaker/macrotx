import { ComponentContext, Fragment, ObservableEvent, jsx } from 'butterfloat'
import { map } from 'rxjs'
import { GameProps } from '../models/gamevm'
import { PronounVm } from '../models/pronounvm'

export default function PronounNode({ game }: GameProps) {
  const pronounChoice = game.pronoun.pipe(
    map((pronoun) =>
      !pronoun || pronoun === ''
        ? () => <PronounChoice pronounVm={game.pronounVm} />
        : () => <AfterPronoun pronounVm={game.pronounVm} />,
    ),
  )

  return (
    <>
      <h1>Welcome to the Macro Transaction Force HQ!</h1>

      <p>
        The building secretary robot eyeballs you just enough to feel like it
        knows everything about you, audibly sighs, and then presses an intercom
        button on its button-covered chest, not even bothering to try to catch
        your name.
      </p>

      <p>
        "Mr. Gravel?" the robot mechanically chirps to itself. You cannot hear
        the reply, only the robot continuing to itself, "You had an interview
        scheduled this space afternoon?" The robot nods in frustration,
        presumably while Mr. Gravel on the other end of the intercom remembers
        his agenda for the day. "Well, <em>she</em>'s here&hellip;" The tone of
        the robot's pronoun choice sounds rather condescending for a machine.
      </p>

      <div childrenBind={pronounChoice} childrenBindMode="replace" />
    </>
  )
}

interface PronounChoiceProps {
  pronounVm: PronounVm
}

interface PronounChoiceEvents {
  she: ObservableEvent<MouseEvent>
  he: ObservableEvent<MouseEvent>
  they: ObservableEvent<MouseEvent>
}

function PronounChoice(
  { pronounVm }: PronounChoiceProps,
  { bindImmediateEffect, events }: ComponentContext<PronounChoiceEvents>,
) {
  const { she, he, they } = events

  bindImmediateEffect(she, (e) => {
    e.preventDefault()
    pronounVm.she()
  })

  bindImmediateEffect(he, (e) => {
    e.preventDefault()
    pronounVm.he()
  })

  bindImmediateEffect(they, (e) => {
    e.preventDefault()
    pronounVm.they()
  })

  return (
    <div className="list-group">
      <a className="list-group-item" href="#" events={{ click: she }}>
        <h4 className="list-group-item-heading">"She" is fine</h4>
        <p className="list-group-item-text">
          Even if the tone was suspect, you are ok with "she".
        </p>
      </a>
      <a className="list-group-item" href="#" events={{ click: he }}>
        <h4 className="list-group-item-heading">"HE"</h4>
        <p className="list-group-item-text">
          You attempt to forcefully correct the robot.
        </p>
      </a>
      <a className="list-group-item" href="#" events={{ click: they }}>
        <h4 className="list-group-item-heading">
          "I'm sorry, but it is 'they'&hellip;"
        </h4>
        <p className="list-group-item-text">This robot is truly mistaken.</p>
      </a>
      <div className="list-group-item disabled">
        <h4 className="list-group-item-heading">"Xie"</h4>
        <p className="list-group-item-text">
          <em>Module not found.</em>
        </p>
      </div>
    </div>
  )
}

interface AfterPronounEvents {
  next: ObservableEvent<MouseEvent>
}

function RobotResponseToShe() {
  return (
    <p>
      You don't bother to correct the robot's pronoun usage, but you do give
      some wicked side-eye for its choice of tone.
    </p>
  )
}

function RobotResponseToHe() {
  return (
    <p>
      "HE" you loudly point out to the robot. The robot huffs into its intercom,
      "<em>He</em> is here&hellip;".
    </p>
  )
}

function RobotResponseToThey() {
  return (
    <p>
      "I'm sorry, but it is 'they'&hellip;" you politely try to correct the
      robot. The robot glares at you and snarks back to the intercom, "They{' '}
      <em>is</em> here&hellip;".
    </p>
  )
}

function AfterPronoun(
  { pronounVm }: PronounChoiceProps,
  { bindImmediateEffect, events }: ComponentContext<AfterPronounEvents>,
) {
  const { next } = events

  const robotResponse = pronounVm.pronoun.pipe(
    map((pronoun) => {
      switch (pronoun) {
        case 'he':
          return RobotResponseToHe
        case 'they':
          return RobotResponseToThey
        case 'she':
        default:
          return RobotResponseToShe
      }
    }),
  )

  bindImmediateEffect(next, (e) => {
    e.preventDefault()
    pronounVm.next()
  })

  return (
    <>
      <hr />

      <div childrenBind={robotResponse} childrenBindMode="replace" />

      <p>
        "Mr. Gravel will see you in a few moments," the robot comes back to you.
      </p>

      <div className="list-group">
        <div className="list-group-item disabled">
          <h4 className="list-group-item-heading">
            Shoot the Robot{' '}
            <span className="label label-info">Collector's Edition</span>
          </h4>
          <p className="list-group-item-text">
            In addition to the robot's rudeness, you finally notice the robot
            wears the insignia of the Devices of Devastation, a galactic gang of
            murderous robots you've sworn to destroy on sight.
          </p>
        </div>
        <a className="list-group-item" href="#" events={{ click: next }}>
          <h4 className="list-group-item-heading">Wait Patiently</h4>
          <p className="list-group-item-text">
            You can wait patiently for the interview.
          </p>
        </a>
      </div>
    </>
  )
}
