import SendMailBlack from "../assets/send-mail-black.svg";
import LinkedInBlack from "../assets/linkedIn-black.svg";
import UpWorkBlack from "../assets/upwork-black.svg";
import GitHubBlack from "../assets/upwork-black.svg";

export default function Hero () {
    return (
        <div className="hero-container">
            <div className="hero-info">
                <div className="info-1">
                    <h5>Merhaba, ben</h5>
                </div>
                <div className="info-2">
                    <h3>Onur ESİN</h3>
                </div>
            </div>
            <div className="hero-links">
                <a href="#" target="blank" className="social-links"><img src={SendMailBlack} alt="send mail"/>Mail Gönder</a>
                <a href="https://www.linkedin.com/in/onuresin/" target="blank" className="social-links"><img src={LinkedInBlack} alt="linkedin" />Linked In</a>
                <a href="#" target="blank" className="social-links"><img src={UpWorkBlack} alt="upwork" />Upwork</a>
                <a href="https://github.com/onuresin" target="blank" className="social-links"><img src={GitHubBlack} alt="github"/>Github</a>
            </div>
        </div>
    )
};