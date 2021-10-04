import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  const { course_name, img, rating, rating_count, full_name, available_Seats } =
    props.course;
  return (
    <>
      <div className="course-container">
        <Card className="courses-card" style={{ width: "20rem" }}>
          <Card.Img className="course-img " variant="top" src={img} />{" "}
          <Card.Body>
            <Card.Title> {course_name} </Card.Title>{" "}
            <Card.Text>
              <Rating
                readonly
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                className="text-warning"
              />
              <span className="ms-4">
                {" "}
                {rating_count}
                Reviews{" "}
              </span>{" "}
            </Card.Text>{" "}
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor{" "}
            </Card.Text>{" "}
            <Link to={`/coursedetails/${course_name}`}>
              <Button
                onClick={() => props.handleDetails(course_name)}
                variant="primary"
                className="btn custom-btn"
              >
                Course Details{" "}
              </Button>{" "}
            </Link>{" "}
          </Card.Body>{" "}
          <Card.Footer class="card-footer text-muted d-flex justify-content-between align-items-center">
            <div className="">
              <i class="far fa-user"> </i> <small>{full_name}</small>
            </div>{" "}
            <small>
              Total {available_Seats}
              Seats{" "}
            </small>{" "}
          </Card.Footer>{" "}
        </Card>{" "}
      </div>{" "}
    </>
  );
};

export default Course;
