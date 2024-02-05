import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [blacklist] = useState(["KitoMCVN"]);
  const [customThumbnails] = useState([
    { name: "KitoMC", thumbnail: "url1" },
    { name: "profile-ui", thumbnail: "url2" },
    {
      name: "Figma-Design-AI-Website",
      thumbnail:
        "https://camo.githubusercontent.com/1f2de64af0870cd6a966a29632e08ae52cff699512ec4607c8faf4bb7b63aa0d/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3939323633353533363139383037383531342f313139303836343832343833383636383331382f556e7469746c65642d312e706e673f65783d36356133356134622669733d363539306535346226686d3d3861653065623232643263666664656261313338333631373535373063356238633464356464616466636432353830376131613038376564343566343335306226",
    },
  ]);

  useEffect(() => {
    fetch("https://api.github.com/users/KitoMCVN/repos")
      .then((response) => response.json())
      .then((data) => {
        const githubProjects = data.map((project) => ({
          name: project.name,
          thumbnail: "https://dpcpa.com/app/uploads/2015/01/thumbnail-default.jpg",
        }));

        setProjects(githubProjects);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);

  const filteredProjects = projects.filter((project) => !blacklist.includes(project.name));

  return (
    <>
      {filteredProjects.map((project) => {
        const customThumbnail = customThumbnails.find((customProject) => customProject.name === project.name);

        return (
          <Link to={`/projects/${project.name}`}>
            <div className='p-6 rounded-xl bg-slate-100' key={project.name}>
              <img src={customThumbnail ? customThumbnail.thumbnail : project.thumbnail} alt={project.name} className='thumbnail' />
              <div>{project.name}</div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default GitHubProjects;
