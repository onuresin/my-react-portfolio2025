import { useState } from "react";

// 1. Örnek veri
const projectCategories = [
  {
    name: "Kişisel Projeler",
    projects: [
      {
        title: "Memory Game",
        img: "/projects/memorygame/cover.png", // opsiyonel görsel
        desc: "Kendi geliştirdiğim klasik hafıza oyunu.",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/memorygame"
      },
      {
        title: "Memory Game",
        img: "/projects/memorygame/cover.png", // opsiyonel görsel
        desc: "Kendi geliştirdiğim klasik hafıza oyunu.",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/memorygame"
      },
      {
        title: "Memory Game",
        img: "/projects/memorygame/cover.png", // opsiyonel görsel
        desc: "Kendi geliştirdiğim klasik hafıza oyunu.",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/memorygame"
      },
      {
        title: "Memory Game",
        img: "/projects/memorygame/cover.png", // opsiyonel görsel
        desc: "Kendi geliştirdiğim klasik hafıza oyunu.",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/memorygame"
      },
    ]
  },
  {
    name: "Ücretli Projeler",
    projects: [
      {
        title: "Müşteri Projesi 1",
        img: "/projects/client1/cover.png",
        desc: "Bir müşteri için hazırladığım özel web uygulaması.",
        demo: "/projects/client1/index.html",
        github: ""
      },
    ]
  }
];

export default function Projects() {
  // 2. Kategori/tabs state
  const [activeTab, setActiveTab] = useState(0);

  // 3. Seçili kategoriye göre projeleri al
  const currentProjects = projectCategories[activeTab].projects;

  return (
    <section className="projects-container">
      {/* Slider / Tab menü */}
      <div className="projects-tabs">
        {projectCategories.map((cat, idx) => (
          <button
            key={cat.name}
            className={activeTab === idx ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab(idx)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {currentProjects.map((proj, i) => (
          <div className="project-card" key={proj.title + i}>
            {proj.img && <img src={proj.img} alt={proj.title} />}
            <h4>{proj.title}</h4>
            <p>{proj.desc}</p>
            <div className="project-links">
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
