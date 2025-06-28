import { useState, useEffect, useRef } from "react";
import Attachment from "../assets/attachment.svg";
import GitHubBlack from "../assets/github-black.svg";

const projectCategories = [
  {
    name: "Kişisel Projeler",
    projects: [
      {
        title: "Stream Web App",
        img: "/myProjects/entertainment-web.png",
        desc: "React Router ve Firebase kullanılarak geliştirilen, kullanıcı dostu bir video izleme platformu.",
        tech: "React / Router - Responsive - Firebase",
        demo: "https://streamapp.onuresin.net/",
        github: "https://github.com/onuresin/Stream-Web-App"
      },
      {
        title: "DevJobs Web App",
        img: "/myProjects/devJobs.png",
        desc: "Frontend geliştiricilere yönelik ilanları filtreleyip listeleyen modern ve responsive iş ilanı uygulaması.",
        tech: "React / Router - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/DevJobs-WebApp"
      },
      {
        title: "İngilizce Sözlük",
        img: "/myProjects/dictionary.png",
        desc: "İngilizce kelimelerin doğru telaffuzlarını ve anlamlarını öğrenmenize yardımcı olan pratik web uygulaması.",
        tech: "React - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/Dictionary-WEB-APP"
      },
      {
        title: "Memory Game",
        img: "/myProjects/memoryGame.png",
        desc: "React ile geliştirilen, her oyunda farklı emojilerle hafızayı geliştirmeyi amaçlayan eğlenceli hafıza oyunu.",
        tech: "React - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/MemoryGame-React-Responsive"
      },
      {
        title: "Front-End QuizApp (Türkçe)",
        img: "/myProjects/quizApp.png",
        desc: "Frontend bilgilerinizi test edebileceğiniz 4 kategori ve toplam 40 sorudan oluşan interaktif quiz uygulaması.",
        tech: "React - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/QuizApp"
      },
      {
        title: "Detaylı Yaş Hesaplayıcı",
        img: "/myProjects/age-calculator.png",
        desc: "Güncel tarihe göre yaşınızı gün, ay ve yıl olarak hızlıca hesaplayan basit ve kullanışlı bir araç.",
        tech: "React - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/age-calculator"
      },
      {
        title: "Bülten Kaydı",
        img: "/myProjects/havadis.png",
        desc: "Kullanıcıların doğru e-posta adresi girerek bülten kaydı yapabileceği basit ve temiz arayüzlü bir örnek çalışma.",
        tech: "React - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/newsletter-signup"
      },
      {
        title: "PhotoSnap",
        img: "/myProjects/photosnap.png",
        desc: "Fotoğraflarınızın ardındaki hikâyeleri paylaşabileceğiniz modern, responsive ve kullanıcı odaklı bir fotoğraf paylaşım platformu.",
        tech: " Java Script - CSS Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/PhotoSnap"
      },
      {
        title: "VKE Hesaplama",
        img: "/myProjects/BMI_Calculate.png",
        desc: "Sağlık durumunuzu değerlendirebileceğiniz, vücut kitle indeksinizi (BMI) hızlıca hesaplayan kullanıcı dostu uygulama.",
        tech: "React - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/bmi-calculator.responsive-REACT"
      },
    ]
  },// Gelişim Projeleri
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
  } // Prof projeler
];
const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const [animIndices, setAnimIndices] = useState([]);
  const timeoutRef = useRef();

  const currentProjects = projectCategories[activeTab].projects;
  const visibleProjects = currentProjects.slice(0, visibleCount);
  const hasMore = visibleCount < currentProjects.length;

  const handleTabClick = (idx) => {
    setActiveTab(idx);
    setVisibleCount(PROJECTS_PER_PAGE);
    setAnimIndices([]);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }; // Tab değişince her şeyi resetle!

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
  }; // Animasyon class'ını 500ms sonra sil

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);// Component unmount olunca timeout temizle

return (
    <section id="projects-page" className="projects-container">
      <div className="projects-tabs">
        {projectCategories.map((cat, idx) => (
          <button
            key={cat.name}
            className={activeTab === idx ? "tab-btn active" : "tab-btn"}
            onClick={() => handleTabClick(idx)} > {cat.name}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((proj, i) => (
          <div
            className={`project-card${animIndices.includes(i) ? " new-card" : ""}`}
            key={proj.title + i}
          >
            {proj.img && <img src={proj.img} alt={proj.title} />}
            <h4>{proj.title}</h4>
            <p>{proj.desc}</p>
            <h5>{proj.tech}</h5>
            <div className="project-links">
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  <img src={Attachment} alt="Attachment" />Demo
                </a>
              )}
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <img src={GitHubBlack}/>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
          <button className="load-more-button" onClick={handleLoadMore}>
            Daha Fazlasını Yükle
          </button>
        </div>
      )}
    </section>
  );
}