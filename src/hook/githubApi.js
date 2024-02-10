import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [blacklist] = useState(["KitoMCVN"]);

  useEffect(() => {
    fetch("https://api.github.com/users/KitoMCVN/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);

  const filteredProjects = projects.filter((project) => !blacklist.includes(project.name));

  return (
    <>
      {filteredProjects.map((project) => {
        return (
          <Link to={`/projects/${project.name}`} key={project.name}>
            <div className='p-6 rounded-xl bg-slate-100'>
              <div>{project.name}</div>
              <p>{project.stargazers_count}</p>
              <p>{project.forks_count}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default GitHubProjects;
