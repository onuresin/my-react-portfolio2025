import Logo from "./Logo";
import sunIconBlack from "../assets/sun-fill-blck.svg"


export default function Header () {
    return (
        <div className="header-container">
            <div className="inner-Header">
                <div className="logo-header">
                    <Logo />
                </div>
                <div className="links-header">
                    <a href="#" id="projects"> Projeler</a>
                    <a href="#" id="resume">CV</a>
                    <a href="#" id="contact">İletişim</a>
                    <button><img src={sunIconBlack} alt="" /></button>
                </div>
                <div className="hamburger-menu">

                </div>
            </div>
        </div>
    )
}