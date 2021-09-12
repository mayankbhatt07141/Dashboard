import React from "react";
import "./Top.css";
import { useState } from "react";
function Top(props) {
  const [btnclicked, setBtnclicked] = useState(1);
  return (
    <div className="first-container">
      <button
        className={btnclicked ? "btn1" : "btn2"}
        onClick={() => {
          setBtnclicked(!btnclicked);
          console.log("bat");
        }}
      >
        <div className="upper-half">
          <div>
            <p>{props.name}</p>
          </div>
          <div>
            <p>...</p>
          </div>
        </div>
        <div className="lower-half">
          <div>{props.icon}</div>
          <div>{props.number}</div>
        </div>
      </button>
    </div>
  );
}

export default Top;
