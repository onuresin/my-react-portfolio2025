import Logo from "./Logo";
import sunIconBlack from "../assets/sun-fill-blck.svg";
import sunIconWhite from "../assets/sun-fill-white.svg";
import { useEffect, useState } from "react";
import '../assets/darkMode.css';


export default function Header ({ onContactClick }) {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const isDark = savedTheme === "dark";
        setDarkMode(isDark);
        document.body.classList.toggle("dark",isDark)
    },[]);

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
                    <a href="www.onuresin.net"><Logo /></a>
                </div>
                <div className="links-header">
                    <a href="#projects-page" className="nav-link" id="projects"> Projeler</a>
                    <a href="/cv/onuresincv.pdf" download className="nav-link" id="resume">CV</a>
                    <a  href="#" onClick={(e) => {e.preventDefault();onContactClick();}} className="nav-link" id="contact">İletişim</a>
                    <button className="lang-button">EN</button>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        <img src={darkMode ? sunIconWhite : sunIconBlack} alt="tema değiştir"/>
                    </button>
                </div>
                <div className="hamburger-menu">

                </div>
            </div>
        </div>
    )
}