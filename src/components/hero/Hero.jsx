import "./Hero.css"
import bannerImage from "./../../assets/images/banner.png"

function Hero() {
  

  return (
    <div className="hero-container">
        <div className="paragraph"> 
            <h1>Hello I’am <span className="bold">Nia Khoperia. Frontend</span> <span className="border">Developer</span> Based In <span className="bold">Georgia.</span></h1>
            <p>I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
            <div className="icons">

            <span className="black"><div></div></span>
            <div></div>
            <div></div>
            <div></div>
            
            </div>
        </div>

        <div className="banner">
            <img src={bannerImage} alt="Hero Banner" />
        </div>

      
    </div>
  )
}

export default Hero
