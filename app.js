/**
* This just renders the projects page for now.
*/

import projects from "./src/projects.js"
import funcs from "./lib/funcs.js"

const app = {}

app.start = () => {
  funcs.renderTemplate('main').then(html => {
    document.querySelector('body').insertAdjacentHTML('beforeEnd', html)
    projects.render()
  })
};

export default app
