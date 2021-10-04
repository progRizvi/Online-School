import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useHistory, useParams } from "react-router";
import data from "../../data";
import UseCourses from "../../hooks/UseCourses";
import "./PageDetails.css";

const PageDetails = () => {
  const [courses] = UseCourses(data);
  const [courseInfo, setCourseInfo] = useState({});
  let { detailsId } = useParams();
  const history = useHistory();
  useEffect(() => {
    if (courses.length) {
      const newData = courses.find(
        (course) => course.course_name === detailsId
      );
      setCourseInfo(newData);
    }
  }, [courses]);

  const {
    img,
    full_name,
    available_Seats,
    schedule,
    difficulty_level,
    fee,
    rating,
    rating_count,
  } = courseInfo;
  return (
    <>
      {!courseInfo ? (
        history.push("/notfound")
      ) : (
        <section className="page-details-section">
          <h3 className="text-center text-light mb-4">Course Details: </h3>
          <div className="page-details-container">
            <div className="image-section">
              <img src={img} alt="" />
            </div>
            <div className="details-section">
              <h3> </h3>
              <div className="mt-3 d-flex justify-content-between">
                <h6>Course Name:</h6>
                <span>{detailsId}</span>
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <span>
                  <i className="far fa-user"></i> Trainer’s Name:
                </span>
                <span>{full_name}</span>
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <span>
                  <i className="fas fa-tags"></i> Course Fee:
                </span>{" "}
                <span>${fee}</span>
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <span>
                  <i className="far fa-user"></i> Available Seats{" "}
                </span>
                <span>{available_Seats}</span>
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <span>
                  <i className="far fa-clock"></i> Schedule:
                </span>{" "}
                <span>{schedule}</span>
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <span>
                  <i className="fas fa-signal"></i> Difficulty Level
                </span>
                <span>{difficulty_level}</span>
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <span>
                  <i className="fas fa-ribbon"></i> Reviews
                </span>
                <span>
                  <Rating
                    readonly
                    initialRating={rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    className="text-danger"
                  />{" "}
                  ({rating_count})
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PageDetails;
