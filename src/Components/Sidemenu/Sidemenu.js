import React from "react";
import "./Sidemenu.css";
import { Sidebardata } from "./Sidebardata";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
function Sidemenu() {
  return (
    <div className="side-menu">
      <div className="logo-container">
        <div className="logo-icon">
          <MeetingRoomIcon />
        </div>
        <h3 className="logo">NEUROLINGA</h3>
      </div>

      <ul className="ul-dash">
        {Sidebardata.map((val, index) => {
          return (
            <li
              key={index}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <div className="btn-icon">
        <div id="btnicon">
          <ExitToAppIcon />
        </div>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default Sidemenu;
