import "./Experience.css";
import experience1 from "../../assets/images/google.png";
import experience2 from "../../assets/images/youtube.png";
import experience3 from "../../assets/images/apple.png";

function Experience() {
  return (
    <section className="experience">
      <h2>
        My <span>Experience</span>
      </h2>

      <div className="experience-box">
      
        <div className="experience-card">
          <div className="card-header">
            <div className="left">
              <img src={experience1} alt="Google" />
              <h3>Lead Software Engineer at Google</h3>
            </div>
            <span className="date">Nov 2019 – Present</span>
          </div>
          <p>
            As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
          </p>
        </div>

      
        <div className="experience-card gray">
          <div className="card-header">
            <div className="left">
              <img src={experience2} alt="Youtube" />
              <h3>Software Engineer at Youtube</h3>
            </div>
            <span className="date">Jan 2017 – Oct 2019</span>
          </div>
          <p>
            At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.
          </p>
        </div>

       
        <div className="experience-card">
          <div className="card-header">
            <div className="left">
              <img src={experience3} alt="Apple" />
              <h3>Junior Software Engineer at Apple</h3>
            </div>
            <span className="date">Jan 2016 – Dec 2017</span>
          </div>
          <p>
            During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
