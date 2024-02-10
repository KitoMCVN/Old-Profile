import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/KitoMCVN/${projectName}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error(`Lỗi ${projectName}:`, error));
  }, [projectName]);

  return (
    <div>
      <h2>Project Details: {projectName}</h2>
      {project ? (
        <div>
          <p>Description: {project.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProjectDetails;
