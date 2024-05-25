import React, { useState } from "react";
import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [inputData, setInputData] = useState("");
  
  const nextpage = useNavigate();
  const gotoNextPage = () => {
    if (!inputData) {
      alert("Enter Email Address");
    } else {
      nextpage("/Create");
    }
  };
  return (
    <div className="SignupageLandingMain">
      <Link to="/">
        <img
          src="Netflixlogo.png"
          alt=""
          style={{ width: "250px" }}
          className="NetflixLogo"
        />{" "}
      </Link>
      <div className="navbarHolderforSignupPage">
        <div className="navbar_optionSelectorSymbol">开</div>
        <select
          name="language_selector"
          id="language_selector"
          className="navbar_OptionSelector"
        >
          <option value="English">English</option>
          <option value="Hindi">हिंदी</option>
        </select>
        <Link to="/">
          <button className="navbar_Loginbtn">Sign In</button>
        </Link>
      </div>

      <div className="content_IntropartHeadlinesHolder">
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "bolder",
            marginInline: "170px",
          }}
        >
          Unlimited movies, TV shows and more
        </div>
        <div
          style={{
            marginInline: "424px",
            marginTop: "22px",
            fontSize: "x-large",
          }}
        >
          Watch anywhere. Cancel anytime.
        </div>
        <div
          style={{ marginInline: "315px", marginTop: "18px", fontSize: "19px" }}
        >
          {" "}
          Ready to watch? Enter your email to create or restart your membership.
        </div>

        <div style={{ marginInline: "330px", marginTop: "18px" }}>
          <input
            type="text"
            onChange={(e) => setInputData(e.target.value)}
            style={{
              width: "350px",
              height: "53px",
              paddingInline: "15px",
              backgroundColor: "grey",
              border: "none",
              borderRadius: "4px",
            }}
          />{" "}
          <button
            style={{
              height: "53px",
              width: "170px",
              color: "white",
              background: "red",
              border: "none",
              borderRadius: "4px",
              fontSize: "large",
            }}
            onClick={gotoNextPage}
          >
            Get Started ＞{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
