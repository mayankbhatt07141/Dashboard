import React from "react";
import "./Session.css";
function Session(props) {
  return (
    <div className="session-container">
      <div className="heading-session">
        <h4>Session overview</h4>
      </div>
      <div className="table">
        <div className="Schedule">
          <h4>Scheduled</h4>
          <br />
          <h4>{props.scheduled}</h4>
        </div>
        <div className="upcoming">
          <h4>Upcoming</h4>
          <br />
          <h4>{props.upcoming}</h4>
        </div>
        <div className="cancled">
          <h4>cancled</h4>
          <br />
          <h4>{props.cancled}</h4>
        </div>
      </div>
    </div>
  );
}

export default Session;
