import { Fragment, jsx, run } from 'butterfloat'
import { Router } from './router'
import { NavBar } from './components/nav-bar'

function Main() {
  const router = new Router()

  return (
    <>
      <NavBar router={router} />
      <div
        id="page"
        className="container"
        data-bind="component: { name: route().page, params: route }"
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
