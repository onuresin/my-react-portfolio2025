import Logo from "./Logo";
import sunIconBlack from "../assets/sun-fill-blck.svg";
import sunIconWhite from "../assets/sun-fill-white.svg";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function Header({ onContactClick }) {
  const { i18n, t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    document.body.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <div className="header-container">
      <div className="inner-Header">
        <div className="logo-header">
          <a href="https://www.onuresin.net" target="_blank" rel="noopener noreferrer">
            <Logo />
          </a>
        </div>
        <div className="links-header">
          <a href="#projects-page" className="nav-link" id="projects">{t("header.projects")}</a>
          <a href="/cv/onuresincv.pdf" download className="nav-link" id="resume">{t("header.cv")}</a>
          <a href="#" onClick={e => { e.preventDefault(); onContactClick(); }} className="nav-link" id="contact">{t("header.contact")}</a>
          <button className="lang-button" onClick={() => i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr")}>
             {t("header.langBtn")}
          </button>
          <button className="theme-toggle" onClick={toggleTheme}>
            <img src={darkMode ? sunIconWhite : sunIconBlack} alt={t("header.themeAlt")} />
          </button>
        </div>
        <div className={`hamburger-menu${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(true)}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
        </div>
      </div>
      <div className={`side-menu-overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
        <nav className={`side-menu ${menuOpen ? "slide-in" : "slide-out"}`} onClick={e => e.stopPropagation()}>
          <a href="#projects-page" className="nav-link" id="projects" onClick={() => setMenuOpen(false)}>
            {t("header.projects")}
          </a>
          <a href="/cv/onuresincv.pdf" download className="nav-link" id="resume" onClick={() => setMenuOpen(false)}>
            {t("header.cv")}
          </a>
          <a href="#" onClick={e => { e.preventDefault(); onContactClick(); setMenuOpen(false); }} className="nav-link" id="contact"> 
            {t("header.contact")}
          </a>
          <button className="lang-button" onClick={() => { i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr"); setMenuOpen(false); }}>
            {t("header.langBtn")}   
          </button>
          <button className="theme-toggle" onClick={toggleTheme}>
            <img src={darkMode ? sunIconWhite : sunIconBlack} alt={t("header.themeAlt")} />
          </button>           
          <button onClick={() => setMenuOpen(false)} className="close-menu-btn">✕</button>
        </nav>
      </div>
    </div>
  );
}
