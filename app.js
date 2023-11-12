/**
* This just renders the projects page for now.
*/

import projects from "./src/projects.js";

const app = {};

app.start = () => {
  projects.render();
};

export default app;
