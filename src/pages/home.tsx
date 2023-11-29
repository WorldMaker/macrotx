import { jsx } from 'butterfloat'

export default function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Macro Transaction Force Go!</h1>

      <p>
        For as long as you can remember you've wanted to be a member of the
        universe-renowned Macro Transaction Force, one of the most elite forces
        in the galaxy. Their barrier to entry is rather high, but everyone knows
        it must be worth it.
      </p>

      <a className="btn btn-primary" href="#play">
        Play the Game
      </a>
    </div>
  )
}