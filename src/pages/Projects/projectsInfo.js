import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./readme.scss";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);
  const [readme, setReadme] = useState(null);
  const [error, setError] = useState(null);
  const [languages, setLanguages] = useState(null);
  const userGithub = "KitoMCVN";

  const fetchReadme = useCallback(
    async (projectUrl) => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/${userGithub}/${projectName}/main/README.md`);
        const data = await response.text();
        const formattedReadme = <ReactMarkdown>{data}</ReactMarkdown>;
        setReadme(formattedReadme);
      } catch (error) {
        setError(error);
      }
    },
    [projectName, userGithub]
  );

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${userGithub}/${projectName}`);
        const data = await response.json();
        setProject(data);
        await fetchReadme(data.html_url);
      } catch (error) {
        setError(error);
      }
    };

    fetchProjectDetails();
  }, [projectName, fetchReadme, userGithub]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${userGithub}/${projectName}/languages`);
        const data = await response.json();
        setLanguages(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchLanguages();
  }, [projectName, userGithub]);

  let totalLines = 0;
  if (languages) {
    totalLines = Object.values(languages).reduce((acc, cur) => acc + cur, 0);
  }

  useEffect(() => {
    document.title = `📂/${projectName} Ι KitoMC`;
  }, [projectName]);

  return (
    <div className='w-full font-bold text-slate-900'>
      <h2 className='text-2xl mb-1'>{projectName}</h2>
      {error ? (
        <p>Lỗi: {error.message}</p>
      ) : project ? (
        <div>
          <p>Mô tả: {project.description}</p>
          {languages ? (
            <div>
              <h3>Ngôn ngữ:</h3>
              <div className='w-full flex mt-1 rounded-full overflow-hidden'>
                {Object.keys(languages).map((language, index) => (
                  <div key={index} className={`${getLanguageColor(language)} h-4`} style={{ width: `${(languages[language] / totalLines) * 100}%` }}></div>
                ))}
              </div>
              <div className='flex gap-x-8 mt-2 flex-wrap'>
                {Object.keys(languages).map((language, index) => (
                  <div key={index} className='text-sm'>
                    {language} <span className='text-slate-600'>({((languages[language] / totalLines) * 100).toFixed(2)}%)</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className='w-full rounded-xl bg-slate-300 animate-pulse h-12 mt-2'></div>
          )}
          {readme ? (
            <div className='mt-6 rounded-xl bg-slate-100 w-full'>
              <h3 className='ml-2 pt-2'>📄 README.md</h3>
              <div className='p-6 readme'>{readme}</div>
            </div>
          ) : (
            <div className='w-56 rounded-full bg-slate-300 animate-pulse h-4 mt-2'></div>
          )}
        </div>
      ) : (
        <div className='w-56 rounded-full bg-slate-300 animate-pulse h-4 mt-2'></div>
      )}
    </div>
  );
};

export default ProjectDetails;

const getLanguageColor = (language) => {
  switch (language.toLowerCase()) {
    case "javascript":
      return "bg-[#F1E05A]";
    case "html":
      return "bg-[#E34C26]";
    case "css":
      return "bg-[#563D7B]";
    case "scss":
      return "bg-[#C6538C]";
    case "python":
      return "bg-[#3472A5]";
    case "c++":
      return "bg-[#F34B7D]";
    case "typescript":
      return "bg-[#3078C6]";
    case "pug":
      return "bg-[#A86454]";
    case "java":
      return "bg-[#B07219]";
    case "objective-c":
      return "bg-[#448DFB]";
    case "objective-c++":
      return "bg-[#6866FA]";
    case "kotlin":
      return "bg-[#AA7AFA]";
    case "ruby":
      return "bg-[#701516]";
    case "cmake":
      return "bg-[#DA3434]";
    case "c":
      return "bg-[#13171D]";
    case "c#":
      return "bg-[#16861F]";
    case "php":
      return "bg-[#4F5D95]";
    case "shell":
      return "bg-[#8AE053]";
    default:
      return "bg-[bg-gray-300]";
  }
};
