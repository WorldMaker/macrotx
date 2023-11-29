import { Fragment, jsx, run } from 'butterfloat'
import { map } from 'rxjs'
import { create } from 'rxjs-spy'
import { NavBar } from './components/nav-bar'
import { Router } from './router'

create()

function PageNotFound() {
  return <p>Page not found</p>
}

function Main() {
  const router = new Router()

  const pageComponent = router.component.pipe(
    map((component) => component ?? PageNotFound),
  )

  return (
    <>
      <NavBar router={router} />
      <div
        id="page"
        className="container"
        childrenBind={pageComponent}
        childrenBindMode="replace"
      ></div>
      <hr />
      <footer className="container">
        <small>Copyright &copy; 2014 Max Battcher. Some rights reserved.</small>
      </footer>
    </>
  )
}

const container = document.getElementById('container')!
run(container, Main)
