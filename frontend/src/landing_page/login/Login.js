import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";


function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });

      if (res.data.success) {

        toast.success("Login successful!");

        localStorage.setItem("isLoggedIn", "true");

        localStorage.setItem("username", res.data.user.name);

       setTimeout(() => {
window.location.href = `http://localhost:3001?name=${res.data.user.name}`;
}, 500);
      }

      else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* LEFT SIDE */}
        <div className="login-left">
          <img
            src="/images/signup-illustration.png"
            alt="login"
            className="login-image"
          />

          <h1>Welcome back</h1>

          <p>
            Login to access your portfolio, investments, watchlist,
            and trading dashboard.
          </p>

          <div className="stats-boxes">
            <div className="stats-card">
              <h3>₹0</h3>
              <span>Commission</span>
            </div>

            <div className="stats-card">
              <h3>4.8★</h3>
              <span>App rating</span>
            </div>

            <div className="stats-card">
              <h3>1 Cr+</h3>
              <span>Investors</span>
            </div>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="login-right">
          <div className="login-card">

            <img
              src="/images/logo.svg"
              alt="logo"
              className="login-logo"
            />

            <h2>Login to Zerodha</h2>

            <p className="subtitle">
              Enter your credentials to continue.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>


              <div className="input-group">
                <label>Password</label>

                <div className="password-box">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <i
                    className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"} eye-icon`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>
              </div>

              <div className="login-options">
                <label>
                  <input type="checkbox" /> Remember me
                </label>

                <a href="#">Forgot Password?</a>
              </div>

              <button className="login-btn">
                Login
              </button>

            </form>

            <p className="signup-text">
              Don't have an account?
              <Link to="/signup"> Signup</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
