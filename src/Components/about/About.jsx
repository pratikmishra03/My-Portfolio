import React from "react";
import "./about.css";
import ME from "../../Assets/IMG_20230119_140813-02.jpeg-removebg-preview.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { PiStudentDuotone } from "react-icons/pi";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icons" />
              <h5>Experience</h5>
              <small>Freshers</small>
            </article>
            {/* <article className="about_card">
              <FiUsers className="about_icons" />
              <h5>Clients</h5>
              <small>100+</small>
            </article> */}
            <article className="about_card">
              <PiStudentDuotone className="about_icons" />
              <h5>Education</h5>
              <small>B.tech Gratuated</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icons" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          Web developer with expertise in MERN (MongoDB, Express.js, React, Node.js) technology. Proficient in crafting dynamic and user-centric solutions, I bring a creative and analytical approach to projects. My hands-on experience and continuous learning drive my growth in the field. Eager to contribute my skills in full-stack development, problem-solving, and collaborative teamwork to innovative projects. Excited about the prospects of a fulfilling career in technology. Explore my portfolio to witness my proficiency in MERN stack development
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
