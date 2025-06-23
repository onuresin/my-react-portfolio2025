import Logo from "./Logo";
import sunIconBlack from "../assets/sun-fill-blck.svg";
import sunIconWhite from "../assets/sun-fill-white.svg";
import { useEffect, useState } from "react";


export default function Header () {
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
                    <Logo />
                </div>
                <div className="links-header">
                    <a href="#" className="nav-link" id="projects"> Projeler</a>
                    <a href="#" className="nav-link" id="resume">CV</a>
                    <a href="#" className="nav-link" id="contact">İletişim</a>
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