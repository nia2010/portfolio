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
            <img src={img1} alt="Project 1" />
            <div className="content">
                <h2 className="heading">01</h2>
                <span className="pr-title">qwerty</span>
                <p className="description">This is a description of Project 1.</p>
                <img src={btn} alt="Read more button" className="btn" />
            </div>
        </div>
        <div className="project-card grid2">
            <img src={img2} alt="Project 2" />
            <div className="content">
                <h2 className="heading">Project 2</h2>
                <span className="pr-title">asdfgh</span>
                <p className="description">This is a description of Project 2.</p>
                <img src={btn} alt="Read more button" className="btn" />
            </div>
            
        </div>
        <div className="project-card grid3">
            <img src={img3} alt="Project 3" />
            <div className="content">
                <h2 className="heading">Project 3</h2>
                <span className="pr-title">zxcvbn</span>
                <p className="description">This is a description of Project 3.</p>
                <img src={btn} alt="Read more button" className="btn" />
            </div>
        </div>
    </div>
  )
}

export default Project