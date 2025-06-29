import { useState } from "react";
import experienceTR from "../data/experience-tr.json";
import experienceEN from "../data/experience-en.json";
import { useTranslation } from "react-i18next";

export default function Experience() {
    const [activeIdx, setActiveIdx] = useState(0);
    const { i18n, t } = useTranslation();
    const lang = i18n.language;
    const experienceData = lang === "tr" ? experienceTR : experienceEN;

     return (
        <section className="experience-container">
            <div className="wrapper-title">
                <h3>{t("experience.title")}</h3>
            </div>
            <div className="experience-wrapper">
                {/*SOL MENÜ */}
                <div className="company-list">
                    {experienceData.map((item, idx) => (
                        <button
                            key={item.company}
                            className={`company-btn${activeIdx === idx ? " active" : ""}`}
                            onClick={() => setActiveIdx(idx)}>
                            {item.company}
                        </button>
                    ))}
                </div>
                {/*SAĞ TARAF */}
                <div className="experience-detail">
                    <div className="detail-top">
                        <h3>{experienceData[activeIdx].position}</h3>
                        <span className="date">{experienceData[activeIdx].date}</span>
                    </div>
                    <div className="detail-bot">
                        <div className="company-title">
                            <h6>{experienceData[activeIdx].company} / {experienceData[activeIdx].location}</h6>
                        </div>
                        <ul>
                            {experienceData[activeIdx].details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
