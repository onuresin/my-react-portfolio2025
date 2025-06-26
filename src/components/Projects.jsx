import { useState } from "react";
import Attachment from "../assets/attachment.svg";
import GitHubBlack from "../assets/github-black.svg";
// 1. Örnek veri
const projectCategories = [
  {
    name: "Kişisel Projeler",
    projects: [
      {
        title: "Stream Web App",
        img: "/myProjects/entertainment-web.png",
        desc: "React Router ile geliştirilmiş. Google Firebase alt yapısı kullanılarak yapılmış. WebStream Projesi",
        tech: "React / Router - Responsive - Firebase",
        demo: "https://streamapp.onuresin.net/",
        github: "https://github.com/onuresin/Stream-Web-App"
      },
      {
        title: "DevJobs Web App",
        img: "/myProjects/devJobs.png",
        desc: "Kendi geliştirdiğim klasik hafıza oyunu.",
        tech: "React / Router - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/memorygame"
      },
      {
        title: "İngilizce Sözlük",
        img: "/myProjects/dictionary.png",
        desc: "İngilizce kelimelerin okunuşlarını ve yazılışlarını öğreten uygulama.",
        tech: "React - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/memorygame"
      },
      {
        title: "Memory Game",
        img: "/myProjects/memoryGame.png",
        desc: "Bu projede react kullanılarak emojilerle hafıza oyunu kodlandı. Her oyun sonunda yeniden başlattığınızda farklı emojiler, farklı sırada olacak şekilde oynayabilirsiniz.",
        tech: "React - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/memorygame"
      },
      {
        title: "Front-End QuizApp (Türkçe)",
        img: "/myProjects/quizApp.png",
        desc: "4 Kategoriden oluşan, her kategoride 10 soru bulunan Front-End Soru-Cevap Uygulaması",
        tech: "React - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/memorygame"
      },
      {
        title: "Detaylı Yaş Hesaplayıcı",
        img: "/myProjects/age-calculator.png",
        desc: "İçinde bulunduğunuz tarihe göre yaşınızı gün, ay ve yıl olarak size hesaplar",
        tech: "React - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/memorygame"
      },
      {
        title: "Bülten Kaydı",
        img: "/myProjects/havadis.png",
        desc: "Basit bir bültene kayıt olma örneği. Doğru yazılmış bir mail adresi ile kayıt ekranına geçebildiğiniz bir örnek.",
        tech: "React - Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/memorygame"
      },
      {
        title: "PhotoSnap",
        img: "/myProjects/photosnap.png",
        desc: "PhotoSnap,ücretli bir uygulama. Her fotoğrafın içinde bir öykü gizlidir.Bu gizli öyküleri sizi takip edenlerle paylaşabileceğiniz bir platformdur.",
        tech: " Java Script - CSS Responsive",
        demo: "/projects/memorygame/index.html",
        github: "https://github.com/onuresin/memorygame"
      },
      {
        title: "VKE Hesaplama",
        img: "/myProjects/BMI_Calculate.png",
        desc: "Vücut kitle indeksinizi hesaplayabileceğiniz bir araç.",
        tech: "React - Responsive",
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

  const [activeTab, setActiveTab] = useState(0);
  const currentProjects = projectCategories[activeTab].projects;

  return (
    <section className="projects-container">
      {/* Slider / Tab menü */}
      <div className="projects-tabs">
        {projectCategories.map((cat, idx) => (
          <button
            key={cat.name}
            className={activeTab === idx ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab(idx)} > {cat.name}
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
            <h5>{proj.tech}</h5>
            <div className="project-links">
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  <img src={Attachment} alt="Attachment" />Live Demo
                </a>
              )}
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <img src={GitHubBlack} alt="" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
