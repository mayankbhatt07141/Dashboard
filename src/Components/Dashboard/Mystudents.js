import React from "react";
import "./Mystudent.css";
function Mystudents() {
  return (
    <div className="student-container">
      <div className="student-heading">
        <h4>My students</h4>
      </div>
      <div className="img">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar7.png"
          alt="Admin"
          className="image"
        ></img>
      </div>
      <hr />
      <div className="last">
        <a href="/" className="a">
          <p>See all students</p>
        </a>
      </div>
    </div>
  );
}

export default Mystudents;
