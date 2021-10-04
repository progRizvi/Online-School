import React from "react";
import "./Team.css";

const Team = (props) => {
  const { img, name, title } = props.person;
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="imgBox">
                <img src={img} alt={name} />
              </div>
              <div className="contentBox">
                <h3>
                  {name} <br />
                  <span>{title}</span>
                </h3>
              </div>
            </div>{" "}
            <ul className="social-icon">
              <li className="">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
