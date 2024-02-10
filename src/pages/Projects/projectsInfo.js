import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./readme.scss";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);
  const [readme, setReadme] = useState(null);
  const [error, setError] = useState(null);

  const fetchReadme = async (projectUrl) => {
    try {
      const response = await fetch(`https://raw.githubusercontent.com/facebook/${projectName}/main/README.md`);
      const data = await response.text();
      const formattedReadme = <ReactMarkdown>{data}</ReactMarkdown>;
      setReadme(formattedReadme);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/facebook/${projectName}`);
        const data = await response.json();
        setProject(data);
        await fetchReadme(data.html_url);
      } catch (error) {
        setError(error);
      }
    };

    fetchProjectDetails();
  }, [projectName]);
  return (
    <div className='w-full'>
      <h2>Project: {projectName}</h2>
      {error ? (
        <p>Lỗi: {error.message}</p>
      ) : project ? (
        <div>
          <p>Mô tả: {project.description}</p>
          {readme ? (
            <>
              <h3>README</h3>
              <div className='p-6 rounded-xl bg-slate-100 w-full'>
                <div className='readme'>{readme}</div>
              </div>
            </>
          ) : (
            <p>Loading README...</p>
          )}
        </div>
      ) : (
        <p>Loading project details...</p>
      )}
    </div>
  );
};

export default ProjectDetails;
