import config from "../config";

import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Games from "../pages/Games";
import Specs from "../pages/Specs";
import Projects from "../pages/Projects";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.skill, component: Skills },
  { path: config.routes.games, component: Games },
  { path: config.routes.projects, component: Projects },
  { path: config.routes.specs, component: Specs },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
