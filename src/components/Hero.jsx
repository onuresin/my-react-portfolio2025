import SendMailBlack from "../assets/send-mail-black.svg";
import LinkedInBlack from "../assets/linkedIn-black.svg";
import UpWorkBlack from "../assets/upwork-black.svg";
import GitHubBlack from "../assets/github-black.svg";

export default function Hero () {
    return (
        <div className="hero-container">
            <div className="hero-inner">
                <div className="hero-info">
                    <div className="info-1">
                        <h5>Merhaba, ben</h5>
                    </div>
                    <div className="info-2">
                        <h3>Onur ESİN</h3>
                        <p>
                            Lisans eğitimimi Balıkesir Üniversitesi'nde İktisat bölümünü okuyarak tamamladım. İş hayatına dış ticaret sektöründe hava ihracat departmanında çalışarak başladım. Devamında pazarlama sektörüne yöneldim. 2017-2023 yılları arasında bu sektörde edindiğim tecrübelerle birlikte kariyerimin farklı bir çizgide ilerlemesini istedim. Acun Medya Akademi'de ‘Gelişmiş Yazılım Uzmanlığı’ eğitimini aldım. Bu eğitimle birlikte HTML, CSS, Javascript ve React konularında güçlü bilgi ve beceri kazandım. Öğrenmeye olan tutkum, analitik düşünme yeteneğim, problem çözme kapasitem, ekip çalışmasına yatkınlığım ve yüksek iletişim becerilerimle kariyerime Frontend Developer olarak yeni bir sayfa açmayı ve yeni tecrübeler edinmeyi amaçlıyorum. Şuan Aka Koleji çatısı altında IT bölümünde çalışıyorum.
                        </p>
                    </div>
                </div>
                <div className="hero-links">
                    <a href="#" target="blank" className="social-links mailSend"><img src={SendMailBlack} alt="send mail"/>Mail Gönder</a>
                    <a href="https://www.linkedin.com/in/onuresin/" target="blank" className="social-links linkedIn"><img src={LinkedInBlack} alt="linkedin" />Linked In</a>
                    <a href="#" target="blank" className="social-links up-work"><img src={UpWorkBlack} alt="upwork" />Upwork</a>
                    <a href="https://github.com/onuresin" target="blank" className="social-links gitHub"><img src={GitHubBlack} alt="github"/>Github</a>
                </div>
            </div>
        </div>
    )
};