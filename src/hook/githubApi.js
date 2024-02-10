import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faStar, faBook } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faJs, faPython, faJava, faPhp, faSwift, faCss3 } from "@fortawesome/free-brands-svg-icons";

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [blacklist] = useState(["KitoMCVN"]);

  useEffect(() => {
    fetch("https://api.github.com/users/facebook/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);

  const langIcon = {
    JavaScript: <FontAwesomeIcon icon={faJs} />,
    HTML: <FontAwesomeIcon icon={faHtml5} />,
    Python: <FontAwesomeIcon icon={faPython} />,
    Java: <FontAwesomeIcon icon={faJava} />,
    PHP: <FontAwesomeIcon icon={faPhp} />,
    Swift: <FontAwesomeIcon icon={faSwift} />,
    CSS: <FontAwesomeIcon icon={faCss3} />,
  };

  const filteredProjects = projects.filter((project) => !blacklist.includes(project.name));

  return (
    <>
      {filteredProjects.map((project) => {
        return (
          <Link to={`/projects/${project.name}`} key={project.name}>
            <div className='p-6 rounded-xl bg-slate-100 h-full'>
              <div className='flex gap-2 items-center text-cyan-600 mb-2'>
                <FontAwesomeIcon icon={faBook} />
                <p>{project.name}</p>
              </div>
              <p className='text-sm truncate overflow-hidden text-ellipsis'>Mô tả: {project.description}</p>
              <div className='flex gap-3 text-sm'>
                {project.language && (
                  <p>
                    {langIcon[project.language]} {project.language}
                  </p>
                )}
                <p>
                  <FontAwesomeIcon icon={faCodeFork} /> {project.forks_count}
                </p>
                <p>
                  <FontAwesomeIcon icon={faStar} /> {project.stargazers_count}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default GitHubProjects;
