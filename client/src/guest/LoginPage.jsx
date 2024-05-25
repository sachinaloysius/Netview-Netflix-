import React, { useState } from "react";
import "./Loginpagestyle.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [check, setCheck] = useState(false);
  const history=useNavigate()

  const GetUserDetails = () => {
    if (!email || !password) {
      alert("Please enter email/phone number and password.");
      return;
    }

    if (!isValidPhone && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email or phone number.");
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:7556/Userlogin", data)
      .then((response) => {
        console.log(response.data.id);
        if (response.data.login === "user") {
          sessionStorage.setItem("uid", response.data.id);
          history("/User");
        } else {
          history("/Create");
        }
      })
      .catch((error) => {
        console.error("There was an error with the login!", error);
      });
  };

  const handleEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    const isValidPhoneNumber = /^[0-9]{10}$/.test(newEmail); // Assuming a 10-digit phone number
    setCheck(!isValidEmail && !isValidPhoneNumber);
    setIsValidPhone(isValidPhoneNumber);
  };

  const handlePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsValidPassword(newPassword.length >= 4 && newPassword.length <= 60);
  };
  return (
    <div className="LandingpageMain">
      <div>
        <img src="Netflixlogo.png" alt="" className="NetflixLogo" />
      </div>
      <div className="login_Table">
        <div className="box_Heading">Sign In</div>
        <div>
          <input
            type="text"
            className="guestBoxButton"
            placeholder="Email or phone number"
            required
            onChange={handleEmail}
          />
        </div>
        {check && (
          <div className="guestboxAlert">
            ⓧ Please enter a valid email address or phone number.
          </div>
        )}

        <div>
          <input
            type="password"
            className="guestBoxButton"
            placeholder="Password"
            onChange={handlePassword}
          />
        </div>
        {!isValidPassword && (
          <div className="guestboxAlert">
            ⓧ Your password must contain between 4 and 60 characters.
          </div>
        )}
        <div>
          <button className="guestBoxSubmitButton" onClick={GetUserDetails}>
            Sign In
          </button>
        </div>
        <div className="guestForgetPassword">Forgot password?</div>
        <div className="guestRememberme_Holder">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <div className="guestSignUp_Holder">
          New to Netflix? <Link to="/Signup">Sign up now</Link>.
        </div>
        <div className="guestDescription_Holder">
          To make sure you're not a bot, this page is protected by Google
          reCAPTCHA.
          <Link to="https://policies.google.com/terms">Learn more.</Link>
        </div>
      </div>
    </div>
  );
}
