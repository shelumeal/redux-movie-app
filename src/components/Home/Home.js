import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "../Header/Header.scss";

function Home() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user"></img>
      </div>
    </div>
  );
}

export default Home;
