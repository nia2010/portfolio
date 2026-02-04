import "./Project.css"
import img1 from "./../../assets/images/image1.png"
import img2 from "./../../assets/images/image2.png"
import img3 from "./../../assets/images/image3.png"
import btn from "./../../assets/images/Read more.png"


function Project() {
  

  return (
    <div className="project-container">
        <h1 className="title">My <span>Projects</span></h1>
        <div className="project-card grid1">
            <img src={img1} alt="Project 1" className="image" />
            <div className="content">
                <h2 className="heading">01</h2>
                <span className="pr-title">Crypto Screener Application</span>
                <p className="description">I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                <img src={btn} alt="Read more button" className="btn" />
            </div>
        </div>
        <div className="project-card grid2">
            <img src={img2} alt="Project 2" className="image" />
            <div className="content span">
                <h2 className="heading">02</h2>
                <span className="pr-title">Euphoria - Ecommerce (Apparels) Website Template</span>
                <p className="description">I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                <img src={btn} alt="Read more button" className="btn" />
            </div>
            
        </div>
        <div className="project-card grid3">
            <img src={img3} alt="Project 3"  className="image"/>
            <div className="content">
                <h2 className="heading">03</h2>
                <span className="pr-title">Blog Website Template</span>
                <p className="description">I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                <img src={btn} alt="Read more button" className="btn" />
            </div>
        </div>
    </div>
  )
}

export default Project