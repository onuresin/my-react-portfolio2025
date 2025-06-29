import { useState, useEffect, useRef } from "react";
import Attachment from "../assets/attachment.svg";
import GitHubBlack from "../assets/github-black.svg";
import projectsData from "../data/projects.json"; // DİKKAT! Doğru json dosyasını import et
import { useTranslation } from "react-i18next";

const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [activeTab, setActiveTab] = useState(0);
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const [animIndices, setAnimIndices] = useState([]);
  const timeoutRef = useRef();

  // Doğru kategoriyi ve projeleri çek
  const currentCategory = projectsData[activeTab];
  const currentProjects = currentCategory.projects;
  const visibleProjects = currentProjects.slice(0, visibleCount);
  const hasMore = visibleCount < currentProjects.length;

  const handleTabClick = (idx) => {
    setActiveTab(idx);
    setVisibleCount(PROJECTS_PER_PAGE);
    setAnimIndices([]);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleLoadMore = () => {
    const nextCount = Math.min(visibleCount + PROJECTS_PER_PAGE, currentProjects.length);
    const newIndices = [];
    for (let i = visibleCount; i < nextCount; i++) {
      newIndices.push(i);
    }
    setVisibleCount(nextCount);
    setAnimIndices(newIndices);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setAnimIndices([]);
    }, 500);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section id="projects-page" className="projects-container">
      <div className="projects-tabs">
        {projectsData.map((cat, idx) => (
          <button
            key={cat.name.tr}
            className={activeTab === idx ? "tab-btn active" : "tab-btn"}
            onClick={() => handleTabClick(idx)}
          >
            {cat.name[lang]}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((proj, i) => (
          <div
            className={`project-card${animIndices.includes(i) ? " new-card" : ""}`}
            key={proj.title.tr + i}
          >
            {proj.img && <img src={proj.img} alt={proj.title[lang]} />}
            <h4>{proj.title[lang]}</h4>
            <p>{proj.desc[lang]}</p>
            <h5>{proj.tech[lang]}</h5>
            <div className="project-links">
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  <img src={Attachment} alt="Attachment" />
                  {t("projects.demo")}
                </a>
              )}
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <img src={GitHubBlack} alt="GitHub" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
          <button className="load-more-button" onClick={handleLoadMore}>
            {t("projects.loadMore")}
          </button>
        </div>
      )}
    </section>
  );
}
