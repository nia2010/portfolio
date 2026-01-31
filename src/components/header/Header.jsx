import "./Header.css"
import logo from "./../../assets/images/logo.png"
import download from "./../../assets/images/download.png"


function Header() {
  
  return (
    <>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="" />
                <span>Personal</span>
            </div>

            <nav className="nav-bar">
                <ul>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Project</li>
                    <li>Contact Me</li>
                </ul>
            </nav>

            <div className="button">
                <button>Resume <img src={download} alt="" /></button>
            </div>
        </div>
    </>
  )
}

export default Header