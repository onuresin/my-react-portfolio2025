import LinkedInBlack from "../assets/linkedIn-black.svg";
import GitHubBlack from "../assets/github-black.svg";

export default function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-left">
                <h4>Coded by Onur Esin</h4>
                <h5>2025</h5>
            </div>
            <div className="footer-right">
                <a href="https://www.linkedin.com/in/onuresin/"><img src={LinkedInBlack} alt="LinkedIn Profil"/></a>
                <a href="https://github.com/onuresin"><img src={GitHubBlack} alt="Github Profili"/></a>
            </div>
            </div>
        </footer>
    )
}