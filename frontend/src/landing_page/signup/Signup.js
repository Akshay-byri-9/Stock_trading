import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await axios.post("http://localhost:3002/signup", {
                name,
                email,
                phone,
                password,
            });

            if (res.data.success) {
                alert("Account created successfully!");

                navigate("/login");
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };
    return (
        <div className="signup-page">
            <div className="signup-container">

                {/* LEFT SIDE */}
                <div className="signup-left">
                    <img
                        src="/images/signup-illustration.png"
                        alt="signup"
                        className="signup-image"
                    />

                    <h1>Invest in everything</h1>

                    <p>
                        Online platform to invest in stocks, derivatives, mutual funds,
                        ETFs, bonds, and more.
                    </p>

                    <div className="feature-boxes">
                        <div className="feature-card">
                            <h4>₹0</h4>
                            <span>Account opening</span>
                        </div>

                        <div className="feature-card">
                            <h4>4.8★</h4>
                            <span>User rating</span>
                        </div>

                        <div className="feature-card">
                            <h4>1 Cr+</h4>
                            <span>Trusted users</span>
                        </div>
                    </div>
                </div>


                {/* RIGHT SIDE */}
                <div className="signup-right">
                    <div className="signup-card">
                        <img
                            src="/images/logo.svg"
                            alt="logo"
                            className="signup-logo"
                        />

                        <h2>Create your account</h2>
                        <p className="subtitle">
                            Start your investing journey with Zerodha.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your name" value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="input-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="input-group">
                                <label>Mobile Number</label>
                                <input type="text" placeholder="Enter mobile number" value={phone}
                                    onChange={(e) => setPhone(e.target.value)} />
                            </div>

                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" placeholder="Create password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="input-group">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Create password" value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>

                            <button className="signup-btn">Create Account</button>
                        </form>

                        <p className="signin-text">
                            Already have an account?
                            <Link to="/login"> Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
