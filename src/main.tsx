import { Fragment, jsx, run } from 'butterfloat'

function Main() {
  return (
    <>
      <nav-bar params="route: route"></nav-bar>
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
