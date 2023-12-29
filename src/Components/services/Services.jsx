import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
          <li>
              <BiCheck className="service_list-icon" />
              <p>Prioritize user needs through a meticulous understanding of personas and feedback</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Enhance overall user experience through thoughtful design..</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Apply color theory, typography, and layout principles..</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Work closely with cross-functional teams..</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Ensure a seamless user experience across devices.</p>
            </li>
          </ul>
        </article>

        {/*!=========  Second ========*/}
        <article className="service">
          <div className="service_head">
            <h3>FrontEnd Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Craft engaging interfaces based on user behaviors for optimal user experience</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Proficient in React.js and component-based development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Ensure compatibility across different browsers.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Implement engaging animations and interactive features.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Optimize performance using best practices.</p>
            </li>
          </ul>
        </article>

        {/*!=========  Third ========*/}
        <article className="service">
          <div className="service_head">
            <h3>BackEnd Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Develop robust server-side logic using Node.js and Express.js.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Design and implement efficient database structures.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Build and maintain RESTful APIs for seamless communication..</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Enforce security measures, including data encryption and authentication..</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Debug and troubleshoot issues for seamless backend functionality.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
