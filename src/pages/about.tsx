import { jsx } from 'butterfloat'

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>

      <p>
        <em>Macro Transaction Force Go!</em> is a serious study in{' '}
        <a href="http://itch.io/jam/ruinjam2014">the ruination of videogames</a>{' '}
        by <a href="http://worldmaker.net">Max Battcher</a>.
      </p>

      <p>
        Nothing quite says <strong>videogames</strong> like a custom engine,
        because why should we share our nice toys? This unnamed semi-proprietary
        TypeScript game engine is cobbled together (in 2023) with{' '}
        <a href="https://github.com/WorldMaker/butterfloat">Butterfloat</a>{' '}
        components.
      </p>
    </div>
  )
}
