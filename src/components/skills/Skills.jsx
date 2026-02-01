import "./Skills.css";
import skill1 from "./../../assets/images/icon-git.png";
import skill2 from "./../../assets/images/icon-javscript.png";
import skill3 from "./../../assets/images/icon-nest.png"; 
import skill4 from "./../../assets/images/icon-sass.png";
import skill5 from "./../../assets/images/icon-socket.png";
import skill6 from "./../../assets/images/icon-storybook.png";  


function Skills() {
  

  return (
    <>
        <div className="skills-container">
            <h2>My <span className="bold">Skills</span></h2>
            <div className="row-1">
                <div className="skills-item">
                    <img src={skill1} alt="Git" />
                    <h3>Git</h3>
                </div>
                <div className="skills-item-span">
                    <img src={skill2} alt="JavaScript" />
                    <h3>JavaScript</h3>
                </div>
                <div className="skills-item">
                    <img src={skill4} alt="NestJS" />
                    <h3>NestJS</h3>
                </div>
                <div className="skills-item">
                    <img src={skill3} alt="Sass" />   
                    <h3>Sass</h3>
                </div>
                <div className="skills-item">
                    <img src={skill6} alt="Socket.io" />
                    <h3>Socket.io</h3>
                </div>
            </div>
            <div className="row-2">
                <div className="skills-item">
                    <img src={skill3} alt="Storybook" />
                    <h3>Storybook</h3>
                </div>
                <div className="skills-item">
                    <img src={skill1} alt="Git" />
                    <h3>Git</h3>
                </div>
                <div className="skills-item">
                    <img src={skill6} alt="JavaScript" />
                    <h3>JavaScript</h3>   
                </div>
                <div className="skills-item">
                    <img src={skill5} alt="NestJS" />
                    <h3>NestJS</h3>
                </div>
                <div className="skills-item">
                    <img src={skill4} alt="Sass" />
                    <h3>Sass</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills