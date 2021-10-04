import React from "react";
import Course from "../../Course/Course";
import data from "../../data";
import UseCourses from "../../hooks/UseCourses";
import "./Services.css";

const Services = () => {
  const [courses] = UseCourses(data);

  const handleDetails = (key) => {};
  return (
    <>
      <section className="services-section">
        <div className="courses">
          {courses.map((course) => (
            <Course
              key={course.id}
              course={course}
              handleDetails={handleDetails}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
