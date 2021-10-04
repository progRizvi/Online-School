import React from "react";
import { NavLink } from "react-router-dom";
import Course from "../../Course/Course";
import data from "../../data";
import UseCourses from "../../hooks/UseCourses";
import { banner } from "../../images";
import "./Home.css";

const Home = () => {
  const [courses] = UseCourses(data);
  const handleDetails = (key) => {};
  return (
    <>
      <section className="home-section">
        <header>
          <div className="banner w-100">
            <img src={banner} alt="" />
          </div>{" "}
        </header>{" "}
        <div className="course-main-section">
          <section className="course-section">
            <h1 className="courses-heading text-light"> Our Courses </h1>{" "}
            <p className="courses-para text-light">
              Designed by English experts, our online English classes and
              courses provide a safe, inclusive learning community.{" "}
            </p>{" "}
            <div className="courses">
              {" "}
              {courses.slice(0, 3).map((course) => (
                <Course
                  key={course.id}
                  course={course}
                  handleDetails={handleDetails}
                />
              ))}{" "}
            </div>{" "}
            <NavLink to="/services" className="see-more-btn">
              <button className="btn custom-btn"> See More </button>{" "}
            </NavLink>{" "}
          </section>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
};

export default Home;
