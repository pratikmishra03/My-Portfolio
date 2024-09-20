import React, { useState } from "react";
import "./education.css";
const Education = () => {
  const [toggleState, settoggleState] = useState(1);

  const toggleTab = (index) => {
    settoggleState(index);
  };
  return (
    <section id="qualification">
      <h5>My personel journey</h5>
      <h2>Qualification</h2>

      <div className=" qualification_container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <h4>
              <i className="uil uil-graduation-cap qualification_icon"> </i>
              Education
            </h4>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <h4>
              <i className="uil uil-briefcase-alt qualification_icon"> </i>
              Experience
            </h4>
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">B.tech</h3>
                <small className="qualification_subtitle">
                  Lucknow Institute
                </small>
                <div className="qualification_calender">
                  <small>
                    <i className="uil uil-calendar-alt">2020-2024</i>
                  </small>
                </div>
              </div>
              <div>
                <small className="qualification_rounder"></small>
                <small className="qualification_line"></small>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <div>
                  <small className="qualification_rounder"></small>
                  <small className="qualification_line"></small>
                </div>
              </div>
              <div>
                <h3 className="qualification_title">Intermediate</h3>
                <small className="qualification_subtitle">
                  M.L.I.C. Amanpur
                </small>
                <div className="qualification_calender">
                  <small>
                    <i className="uil uil-calendar-alt">2017-2019</i>
                  </small>
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">HighSchool</h3>
                <small className="qualification_subtitle">
                  M.L.I.C. Amanpur
                </small>
                <div className="qualification_calender">
                  <small>
                    <i className="uil uil-calendar-alt">2015-2017</i>
                  </small>
                </div>
              </div>
              <div>
                <small className="qualification_rounder"></small>
                <small className="qualification_line"></small>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Developer</h3>
                <small className="qualification_subtitle">IfStatic Pvt Lmt</small>
                <div className="qualification_calender">
                  <small>
                    <i className="uil uil-calendar-alt">Oct 2023- March 2024</i>
                  </small>
                </div>
              </div>
              <div>
                <small className="qualification_rounder"></small>
                <small className="qualification_line"></small>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <div>
                  <small className="qualification_rounder"></small>
                  <small className="qualification_line"></small>
                </div>
              </div>
              <div>
                <h3 className="qualification_title">Software Developer Trainee</h3>
                <small className="qualification_subtitle">Acmegrade</small>
                <div className="qualification_calender">
                  <small>
                    <i className="uil uil-calendar-alt">July 2023- September 2023</i>
                  </small>
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Full Stack Developer</h3>
                <small className="qualification_subtitle">Udemy</small>
                <div className="qualification_calender">
                  <small>
                    <i className="uil uil-calendar-alt">2022-2023</i>
                  </small>
                </div>
              </div>
              <div>
                <small className="qualification_rounder"></small>
                <small className="qualification_line"></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
