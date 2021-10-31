import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash"> # </span>{" "}
      <p> {topic} </p>{" "}
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1612392062798-4117917fcc50?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <Avatar
          src={user.phootoUrl}
          className="sidebar__avatar"
        >
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>{" "}
        <h4>{user.email}</h4>{" "}
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> who viewed you </p>{" "}
          <p className="sidebar__statNumber">
            2, 543{" "}
          </p>{" "}
        </div>{" "}
        <div className="sidebar__stat">
          <p> views on post </p>{" "}
          <p className="sidebar__statNumber">
            2, 448{" "}
          </p>{" "}
        </div>{" "}
      </div>
      <div className="sidebar__bottom">
        <p> recent </p> {recentItem("reactjs")}{" "}
        {recentItem("priogramming")}{" "}
        {recentItem("softwareengineering")}{" "}
        {recentItem("design")}{" "}
        {recentItem("developer")}{" "}
      </div>{" "}
    </div>
  );
}

export default Sidebar;
