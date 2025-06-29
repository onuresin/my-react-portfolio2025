import LinkedInBlack from "../assets/linkedIn-black.svg";
import UpWorkBlack from "../assets/upwork-black.svg";
import GitHubBlack from "../assets/github-black.svg";
import { useTranslation } from "react-i18next";
import '../assets/darkMode.css';

export default function Hero () {
    const { t } = useTranslation();

    return (
        <div className="hero-container">
            <div className="hero-inner">
                <div className="hero-info">
                    <div className="info-1">
                        <h5>{t("hero.hi")}</h5>
                    </div>
                    <div className="info-2">
                        <h3>{t("hero.name")}</h3>
                        <p>{t("hero.desc")}</p>
                    </div>
                </div>
                <div className="hero-links">
                    <a href="https://www.linkedin.com/in/onuresin/" target="_blank" rel="noopener noreferrer" className="social-links linkedIn">
                        <img src={LinkedInBlack} alt="LinkedIn" />{t("hero.linkedin")}
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="social-links up-work">
                        <img src={UpWorkBlack} alt="Upwork" />{t("hero.upwork")}
                    </a>
                    <a href="https://github.com/onuresin" target="_blank" rel="noopener noreferrer" className="social-links gitHub">
                        <img src={GitHubBlack} alt="Github"/>{t("hero.github")}
                    </a>
                </div>
            </div>
        </div>
    );
}
