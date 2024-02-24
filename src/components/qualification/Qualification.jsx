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
                  Microsoft Certified: Security, Compliance,
                  and Identity Fundamentals
                </h3>
                <span className="qualification__subtitle">Microsoft</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2024
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
                Certified in Cybersecurity - CC
                </h3>
                <span className="qualification__subtitle">
                  ISC2
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>

            {/* 3 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                Certified Cloud Practitioner
                </h3>
                <span className="qualification__subtitle">AWS</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
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
                Networking Basics
                </h3>
                <span className="qualification__subtitle">CISCO</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            {/* 5 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                Cybersecurity Essentials
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
            {/* 6 Right */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                Ethical Hacking Essentials (EHE)
                </h3>
                <span className="qualification__subtitle">EC-Council</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>
            {/* 7 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Application Security - The Complete Guide</h3>
                <span className="qualification__subtitle">EC-Council</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024
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
                AWS Knowledge: Cloud Essentials
                </h3>
                <span className="qualification__subtitle">AWS</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            {/* 9 Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Networking Essentials</h3>
                <span className="qualification__subtitle">CISCO</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
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
                <h3 className="qualification__title">Frontend Engineer</h3>
                <span className="qualification__subtitle">Movable-Ink</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Oct 2022 - Present
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
                <h3 className="qualification__title">Frontend Engineer</h3>
                <span className="qualification__subtitle">Equifax</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jun 2021 - Oct 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                Full-Stack Engineer
                </h3>
                <span className="qualification__subtitle">Space Engineering</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>Jul 2021 - Present
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
                  <i className="uil uil-calendar-alt"></i> Jan 2020 - May 2021
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
