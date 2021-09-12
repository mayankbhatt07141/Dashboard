import React from "react";
import "./Earning.css";
function Earning(props) {
  return (
    <div className="earn">
      <div className="earning">
        <div className="heading-earning">
          <h3>My earnings</h3>
          <hr />
        </div>
        <div className="internal">
          <div className="internal1">
            <h4>Todays Earning</h4>
            <h4>{props.amount}</h4>
          </div>
          <hr width="0.05" size="63" />
          <div className="internal2">
            <h4>Pending</h4>
            <h4>{props.pending}</h4>
          </div>
        </div>
        <div className="withdraw-btn-container">
          <button className="withdraw-btn">Withdraw</button>
        </div>
      </div>
    </div>
  );
}

export default Earning;
