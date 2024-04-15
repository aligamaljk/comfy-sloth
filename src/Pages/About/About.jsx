import { NavLink } from "react-router-dom"
import img from "../../assets/hero-bcg.a876f19f6786a3aca992 (1).jpeg"
import "./About.scss"
const About = () => {
  return (
    <>
      <div className="about">
        <div className="header-about">
          <NavLink to="/" className="title-about" >
            Home
          </NavLink>
          <h2 className="sup-title-about">/ About</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="img">
              <img src={img} alt="" />
            </div>
            <div className="info">
              <div className="info-title">
                <h2>Our Story </h2>
              </div>
              <div className="info-text">
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About