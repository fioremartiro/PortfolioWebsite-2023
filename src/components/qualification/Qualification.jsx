import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* Certifications Start */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* 1 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  The Complete JavaScript Course
                </h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 2 Right */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Desarrollo de aplicaciones web
                </h3>
                <span className="qualification__subtitle">
                  Cenfotec University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
            </div>

            {/* 3 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Introduction to Cybersecurity
                </h3>
                <span className="qualification__subtitle">CISCO</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 4 Right */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Introduction to Artificial Intelligence
                </h3>
                <span className="qualification__subtitle">LinkedIn</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            {/* 5 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  DevSecOps: Implementing Security in DevOps Processes
                </h3>
                <span className="qualification__subtitle">EC-Council</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* 6 Right */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Deep Web and Cybersecurity
                </h3>
                <span className="qualification__subtitle">EC-Council</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            {/* 7 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Crash Course on Python</h3>
                <span className="qualification__subtitle">Google</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* 8 Right */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  AWS Cloud Practitioner Essentials
                </h3>
                <span className="qualification__subtitle">Coursera</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            {/* 9 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SQL Essential Training</h3>
                <span className="qualification__subtitle">LinkedIn</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* 10 Right */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  OWASP Top 10 for Docker Containers and Kubernetes Security
                </h3>
                <span className="qualification__subtitle">EC-Council</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            {/* 11 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Networking Essentials</h3>
                <span className="qualification__subtitle">CISCO</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* 12 Right */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Cybersecurity Essentials
                </h3>
                <span className="qualification__subtitle">CISCO</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            {/* 13 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Cloud Networking Concepts: Solutions and Services
                </h3>
                <span className="qualification__subtitle">LinkedIn</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* 14 Right */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Ciberseguridad desde cero
                </h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            {/* 15 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  AWS Knowledge: Cloud Essentials
                </h3>
                <span className="qualification__subtitle">AWS</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* 16 Right */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  The Cybersecurity Threat Landscape
                </h3>
                <span className="qualification__subtitle">LinkedIn</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            {/* 17 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Networking Basics</h3>
                <span className="qualification__subtitle">CISCO</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* 18 Right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Getting started with AWS Pentesting
                </h3>
                <span className="qualification__subtitle">EC-Council</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            {/* 19 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  SC-900: Microsoft Security, Compliance, and Identity
                  Fundamentals
                </h3>
                <span className="qualification__subtitle">Microsoft</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* 20 Right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Cloud Practitioner</h3>
                <span className="qualification__subtitle">AWS</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>
            {/* End of education */}
          </div>

          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Movable-Ink</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> OTT 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Equifax</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> AGO 2021 - OTT 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Marketing Automation Developer
                </h3>
                <span className="qualification__subtitle">3M</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> GEN 2021 - AGO 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Azure DevOps Support Engineer
                </h3>
                <span className="qualification__subtitle">Tek-Experts</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> GEN 2020 - GEN 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
