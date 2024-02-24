import config from "../config";

import About from "../pages/About";
import Skills from "../pages/Skills";
import Music from "../pages/Music";
import Games from "../pages/Games";
import Specs from "../pages/Specs";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/Projects/projectsInfo";

const publicRoutes = [
  { path: config.routes.home, component: About },
  { path: config.routes.skill, component: Skills },
  { path: config.routes.games, component: Games },
  { path: config.routes.projects, component: Projects },
  { path: config.routes.specs, component: Specs },
  { path: config.routes.music, component: Music },
  {
    path: "/projects/:projectName",
    component: ProjectDetails,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
