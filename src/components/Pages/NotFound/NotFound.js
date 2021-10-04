import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <section className="not-found-section">
        <div className="not-found-container text-center text-light">
          <h1> 404 </h1> <p> Ooops!! </p>
          <p> THAT PAGE DOESN 'T EXIST OR UNAVAILABLE</p>
        </div>
      </section>
    </>
  );
};

export default NotFound;
