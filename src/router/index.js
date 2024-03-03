import config from "../config";

import About from "../pages/About";
import Skills from "../pages/Skills";
import Games from "../pages/Games";
import Specs from "../pages/Specs";
import NotFound from "../pages/404";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/Projects/projectsInfo";

const publicRoutes = [
  { path: config.routes.home, component: About },
  { path: config.routes.skill, component: Skills },
  { path: config.routes.games, component: Games },
  { path: config.routes.projects, component: Projects },
  { path: config.routes.specs, component: Specs },
  { path: config.routes.projectDetails, component: ProjectDetails },
  { path: config.routes.notfound, component: NotFound },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
