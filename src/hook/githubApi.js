import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [blacklist] = useState(["KitoMCVN"]);

  useEffect(() => {
    fetch("https://api.github.com/users/KitoMCVN/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching GitHub projects:", error));
  }, []);

  const filteredProjects = projects.filter((project) => !blacklist.includes(project.name));

  return (
    <>
      {filteredProjects.map((project) => (
        <div className='p-6 rounded-xl bg-slate-100' key={project.id}>
          <Link to={`/projects/${project.name}`}>
            <div>{project.name}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default GitHubProjects;
