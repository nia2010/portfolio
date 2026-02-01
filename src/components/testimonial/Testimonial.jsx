import "./Testimonial.css";
import testimonial1 from "./../../assets/images/google.png";
import testimonial2 from "./../../assets/images/youtube.png";
import testimonial3 from "./../../assets/images/apple.png";






function Testimonial() {
  

  return (
    <div className="testimonial-container">
        <h2>My <span className="bold"> Experience</span></h2>
        <div className="testimonial-item">
            <div>
                <img src={testimonial1} alt="Google" />
                <h3>Lead Software Engineer at Google</h3>
                <span>Nov 2019 - Present</span>
            </div>
            <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
        </div>
        <div className="testimonial-item-span">
            <div>
                <img src={testimonial2} alt="Youtube" />
                <h3>Software Engineer at Youtube</h3>
                <span>Jan 2017 - Oct 2019</span>
            </div>
            <p>At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.</p>
        </div>
        <div className="testimonial-item">
            <div>
                <img src={testimonial3} alt="Apple" />
                <h3>Junior Software Engineer at Apple</h3>
                <span>Jan 2016 - Dec 2017</span>
            </div>
            <p>During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.</p>
        </div>
    </div>
  )
}

export default Testimonial
