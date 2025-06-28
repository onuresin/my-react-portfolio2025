import LinkedInBlack from "../assets/linkedIn-black.svg";
import UpWorkBlack from "../assets/upwork-black.svg";
import GitHubBlack from "../assets/github-black.svg";
import '../assets/darkMode.css';

export default function Hero () {
    return (
        <div className="hero-container">
            <div className="hero-inner">
                <div className="hero-info">
                    <div className="info-1">
                        <h5>Merhaba, ben</h5>
                    </div>
                    <div className="info-2">
                        <h3>Onur Esin</h3>
                        <p>
                           Farklı sektörlerde edindiğim deneyimleri teknolojiyle birleştirerek kariyerime Frontend Developer olarak yeni bir yön vermeyi hedefliyorum. 
                            Lisans eğitimimi Balıkesir Üniversitesi İktisat bölümünde tamamladıktan sonra dış ticaret ve pazarlama alanlarında çalıştım. 2017-2023 yılları arasında bu sektörlerde kazandığım deneyimler, teknolojiye olan ilgim ve üretme tutkum beni yazılıma yöneltti.
                            Acun Medya Akademi’de aldığım Gelişmiş Yazılım Uzmanlığı eğitimi sayesinde HTML, CSS, JavaScript ve React konularında sağlam bir temel kazandım. Bu süreçte birçok proje geliştirerek öğrendiklerimi pratiğe döktüm. (Detaylı projelerime portfolyomdan ulaşabilirsiniz.)
                            Şu anda Aka Koleji IT departmanında çalışıyor, aynı zamanda frontend alanında kendimi sürekli geliştiriyorum. Takım çalışmasına yatkınlığım, analitik düşünme becerim ve çözüm odaklı yaklaşımım sayesinde yeni projelerde aktif rol almaya hazırım.
                            Amacım, kullanıcı deneyimini önemseyen, performans odaklı ve sürdürülebilir arayüzler geliştiren bir frontend geliştirici olarak sektörde kalıcı ve fark yaratan işler üretmek.
                        </p>
                    </div>
                </div>
                <div className="hero-links">
                    <a href="https://www.linkedin.com/in/onuresin/" target="blank" className="social-links linkedIn"><img src={LinkedInBlack} alt="linkedin" />Linked In</a>
                    <a href="#" target="blank" className="social-links up-work"><img src={UpWorkBlack} alt="upwork" />Upwork</a>
                    <a href="https://github.com/onuresin" target="blank" className="social-links gitHub"><img src={GitHubBlack} alt="github"/>Github</a>
                </div>
            </div>
        </div>
    )
};