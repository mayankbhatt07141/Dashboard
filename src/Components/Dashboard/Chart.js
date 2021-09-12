import { React, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";
function Chart() {
  const [btnclick, setBtnclick] = useState(1);
  const state = {
    labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
    datasets: [
      {
        // fill: false,
        lineTension: 0.5,
        borderColor: "red",
        borderWidth: 2,
        data: [10, 30, 25, 40, 45, 50, 75],
      },
    ],
  };
  return (
    <div className="bottom-container">
      <div className="labelss">
        <button className="btn" onClick={() => setBtnclick(!btnclick)}>
          <div className={btnclick ? "first" : "scndbtn"}>
            <h4>Course Impression</h4>
          </div>
        </button>
        <div className="first">
          <h4>Per Session Earning</h4>
        </div>
        <div className="first">
          <h4>Top students</h4>
        </div>
        <div className="drop-down">
          <select name="dropdown" className="dropdown" defaultValue="WEEK">
            <option value="WEEK">Week</option>
            <option className="option-text" value="DAY">
              Day
            </option>
          </select>
        </div>
      </div>
      <div className="charts1">
        <Line
          className="line"
          data={state}
          options={{
            animation: {
              duration: 0,
            },
            responsive: {
              type: false,
            },
            options: {
              plugins: {
                legend: {
                  display: false,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Chart;
