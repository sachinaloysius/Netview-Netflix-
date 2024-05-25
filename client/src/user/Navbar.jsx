import React, { useEffect, useState } from "react";
import NetflixLogo from "./assets/netflixLogo.svg";
import "./Navbar.css";
import avatar from "./assets/avatar.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const history = useNavigate();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    GetUserDetails();
  }, []);

  const GetUserDetails = () => {
    axios
      .get("http://localhost:7556/UserDetails")
      .then((response) => response.data)
      .then((data) => {
        setUserDetails(data.user[0]);
      });
  };

  const Logout = () => {
    history("/");
    sessionStorage.clear();
  };
  const checkAuthentication = () => {
    // Check if user-related data exists in session storage or any other storage
    const userId = sessionStorage.getItem("uid");
    // Return true if the user is authenticated, false otherwise
    return !!userId;
  };

  useEffect(() => {
    // Check if the user is authenticated on the initial load
    const isAuthenticated = checkAuthentication();

    if (!isAuthenticated) {
      // Redirect to the login page if the user is not authenticated
      history("/");
    }
  }, [history]);
  return (
    <div>
      <div className="navbar">
        <div className="navbar_leftside_Holder">
          {" "}
          <a href="/User">
            <img
              src={NetflixLogo}
              alt="NetflixLogo"
              className="NetflixLogoStyle"
            />{" "}
          </a>
          <button>Home</button>
          <button>Series</button>
          <button>Films</button>
          <button>Latest</button>
          <button>My List</button>
        </div>
        {userDetails && (
          <div className="navbar_rightside_Holder">
            <img src={avatar} alt="avatar" className="avatar" />
            <ul>
              <li>{userDetails.user_name}</li>
              <li onClick={Logout}>Sign Out</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
