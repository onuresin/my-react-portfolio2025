import { useState } from "react"
import experienceData from "../data/experience.json";

export default function Experience() {
    const [activeIdx, setActiveIdx] = useState(0);
    return (
        <section className="experience-container">
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
                    <h3>{experienceData[activeIdx].position}</h3>
                    <span className="date">{experienceData[activeIdx].date}</span>
                    <div className="company-title">
                        {experienceData[activeIdx].company} / {experienceData[activeIdx].location}
                    </div>
                    <ul>
                        {experienceData[activeIdx].details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
