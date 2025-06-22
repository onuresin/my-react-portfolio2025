import Logo from "./Logo";



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
                </div>
                <div className="hamburger-menu">

                </div>
            </div>
        </div>
    )
}