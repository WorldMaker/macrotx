import { jsx } from 'butterfloat'
import { map } from 'rxjs'
import { Router } from '../router'

interface NavBarProps {
  router: Router
}

export function NavBar({ router }: NavBarProps) {
  const homeClassName = router.page.pipe(
    map((page) => (page === 'home' ? 'active' : '')),
  )

  const aboutClassName = router.page.pipe(
    map((page) => (page === 'about' ? 'active' : '')),
  )

  return (
    <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">
            macrotx
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li bind={{ className: homeClassName }}>
              <a href="#">Home</a>
            </li>

            <li bind={{ className: aboutClassName }}>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
