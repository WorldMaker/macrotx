import { ComponentContext, Fragment, ObservableEvent, jsx } from 'butterfloat'
import { interval, map } from 'rxjs'
import { BossVm } from '../models/bossvm'
import { GameProps } from '../models/gamevm'

export default function BossNode({ game }: GameProps) {
  const bossVm = new BossVm()
  const teaChoice = bossVm.tea.pipe(
    map((tea) =>
      !tea
        ? () => <TeaChoice bossVm={bossVm} />
        : () => <AfterTea game={game} />,
    ),
  )

  return (
    <>
      <h1>Boss Stage!</h1>

      <p>
        Just as you utter the words, "I'm full of passion," the entire space
        station begins to shudder and shake. Very quickly a large laser beam
        blasts through station walls incinerating Mr. Gravel where he sat at his
        desk. Your emergency space suit activates just in time as the oxygen
        levels start to fall in the station.
      </p>

      <p>
        Through the hole in the hull of the station a giant cyborg in top to
        bottom unrevealing power armor flies in, sealing the hole with a flick
        of the wrist while passing. You quickly recognize the emblem as the
        symbol for
        <em>The Elucidator</em>. She is one of the most rogue of the Macro
        Transaction Force's rogue's gallery.
      </p>

      <p>
        You can feel The Elucidator's scanning beam examing you, and you prepare
        your <span bind={{ innerText: game.weapon }}></span> for a possible
        fight.
      </p>

      <div childrenBind={teaChoice} childrenBindMode="replace" />
    </>
  )
}

interface BossProps {
  bossVm: BossVm
}

interface TeaChoiceEvents {
  nextTea: ObservableEvent<MouseEvent>
}

function TeaChoice(
  { bossVm }: BossProps,
  { bindImmediateEffect, events }: ComponentContext<TeaChoiceEvents>,
) {
  const { nextTea } = events

  bindImmediateEffect(nextTea, (e) => {
    e.preventDefault()
    bossVm.nextTea()
  })

  return (
    <div className="list-group">
      <div className="list-group-item disabled">
        <h4 className="list-group-item-heading">
          Fight!{' '}
          <span className="label label-primary">
            6000 <span className="fa fa-btc"></span>
          </span>
        </h4>
        <p className="list-group-item-text">
          This would clearly be an amazing boss battle full of trying to find a
          weak point, exploiting said weak point, and then repeating those steps
          at least two more times.
        </p>
      </div>
      <a
        className="list-group-item"
        href="#"
        data-bind="click: nextTea"
        events={{ click: nextTea }}
      >
        <h4 className="list-group-item-heading">Invite to Tea</h4>
        <p className="list-group-item-text">
          It may not be your office, but there's no reason to be uncivil even to
          an uninvited guest.
        </p>
      </a>
    </div>
  )
}

function Empty() {
  return <></>
}

function ChefTea() {
  return (
    <>
      You manage to collect a couple biscotti from an emergency chef pouch and
      even work a small number of spaceberries into an impromptu spaceberry jam.
    </>
  )
}

function AfterTea({ game }: GameProps) {
  const chefTea = game.className.pipe(
    map((className) => (className === 'Chef' ? ChefTea : Empty)),
  )

  const rechargeDate = 23 /* h */ * 60 /* m */ * 60_000 /* ms */

  const recharge = interval(1_000 /* ms */).pipe(
    map((count) =>
      Math.max(rechargeDate - count * 1_000 /* ms */, 5_000 /* ms */),
    ),
    map((time) =>
      new Date(time).toLocaleTimeString(undefined, {
        hour12: false,
      }),
    ),
    map((formatted) => `AP ${formatted}`),
  )

  return (
    <>
      <hr />

      <p>
        "Would you mind a cup of tea, Ms. The Elucidator?" you ask cordially.
      </p>

      <p>
        Removing her helmet it becomes clear that The Elucidator is a fellow{' '}
        <span bind={{ innerText: game.race }}></span>, which you never would
        have guessed. She nods patiently and sits down in Mr. Gravel's slightly
        scorched chair. Presumably she was unworried about the bits and pieces
        of Mr. Gravel between her power armor and the chair.
      </p>

      <p>
        You prepare a couple cups of tea.{' '}
        <span childrenBind={chefTea} childrenBindMode="replace" /> The
        Elucidator smiles a broad smile, "Here to try to fill one of the Macro
        Transaction Force's diversity quotas?"
      </p>

      <p>
        Although unhappy with how blunt she was, you could only admit that she
        might have a point, "Seemed that way."
      </p>

      <p>
        "Getting the full spiel? Passion to save the galaxy from itself? Long
        hours, terrible pay, no free time?" She sips, a sly smile on her lips.
      </p>

      <p>You shrug, "We were working towards that. What is it to you?"</p>

      <p>
        "What has Macro Transaction Force done for <i>us</i> lately?"
      </p>

      <div className="list-group">
        <div className="list-group-item disabled">
          <h4 className="list-group-item-heading">
            "So Much!"{' '}
            <span className="label label-primary">
              6000 <span className="fa fa-btc"></span>
            </span>
          </h4>
          <p className="list-group-item-text">
            Macro Transaction Force is the best and I will start by destroying
            one of its nemeses right here!
          </p>
        </div>
        <div className="list-group-item disabled">
          <h4 className="list-group-item-heading">
            Did you bring a full presentation to help convince me?{' '}
            <span className="label label-danger">
              <span className="fa fa-clock-o"></span>{' '}
              <span bind={{ innerText: recharge }} />
            </span>
          </h4>
          <p className="list-group-item-text">
            I only join criminal organizations with killer slide decks.
          </p>
        </div>
        <div className="list-group-item disabled">
          <h4 className="list-group-item-heading">
            "Let's Join Forces!"{' '}
            <span className="label label-info">Coming Soon</span>
          </h4>
          <p className="list-group-item-text">
            Maybe The Elucidator is right and it is the Macro Transaction Force
            that should be taken down a peg! <em>Buy our Season Pass Today</em>{' '}
            and Get the <strong>Sidekick to The Elucidator Pack</strong> as soon
            as it releases.
          </p>
        </div>

        <div className="alert alert-info">
          <h3>Coming Soon</h3>
          <p>
            Spam your friends, acquaintances, and significant frenemies on
            social networks to acquire more action points!
          </p>
        </div>
      </div>
    </>
  )
}
