import React from "react";
import "./User.css";
import maple from "../../../src/circle.png";

import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import DateRangeIcon from "@material-ui/icons/DateRange";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const Card = () => {
  return (
    <div className="Container">
      <div className="box">
        <div className="chat-btn">
          <ChatBubbleRoundedIcon className="chat-btn" />
        </div>
        <div className="chat-btn">
          <NotificationsIcon />
        </div>
      </div>
      <div className="profile">
        <div className="photo-welcome">
          <div>
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Admin"
              className="image"
              width="80"
            ></img>
          </div>
          <div>
            <h4>Welcome Aayush!</h4>
          </div>
        </div>
        <h2>
          <strong>Upcoming Class</strong>
        </h2>
      </div>
      <div className="schedule-time">
        <div className="language">
          <div>
            <img
              src={maple}
              alt="Admin"
              className="rounded-circle"
              height="35px"
            />
          </div>
          <div>
            <h1>French</h1>
          </div>
        </div>
        <hr />
        <div className="time">
          <div className="status">
            <DateRangeIcon />
            <h6>12 september 2021</h6>
          </div>
          <div className="status">
            <QueryBuilderIcon />
            <h6>11:00AM</h6>
          </div>
          <div className="status">
            <TimelapseIcon />
            <h6>60 Minute</h6>
          </div>
          <div className="status">
            <AttachMoneyIcon />
            <h6>$10</h6>
          </div>
          <div className="join">
            <button className="button">Join Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
