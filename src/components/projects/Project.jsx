import "./Project.css"


function Project() {
  

  return (
    <div className="project-container">
        <h1 className="title">My Projects</h1>
        <div className="project-card grid1">
            <img src="" alt="" />
            <div className="content">
                <h2 className="heading">Project 1</h2>
                <p className="description">This is a description of Project 1.</p>
                <img src="" alt="" className="btn" />
            </div>
        </div>
        <div className="project-card grid2">
            <div className="content">
                <h2 className="heading">Project 2</h2>
                <p className="description">This is a description of Project 2.</p>
                <img src="" alt="" className="btn" />
            </div>
            <img src="" alt="" />
        </div>
        <div className="project-card grid3">
            <img src="" alt="" />
            <div className="content">
                <h2 className="heading">Project 3</h2>
                <p className="description">This is a description of Project 3.</p>
                <img src="" alt="" className="btn" />
            </div>
        </div>
    </div>
  )
}

export default Project