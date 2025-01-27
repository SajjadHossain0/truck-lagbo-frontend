import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './AuthForm.css';
import API_CLINT from "../API_CLINT";
import {useNavigate} from "react-router-dom";

const AuthForm = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isLogin) {
                // Login API request
                const { email, password } = formData;
                const response = await API_CLINT.post("/auth/login", { email, password });
                toast.success(`Welcome back, ${response.data.fullname || "User"}!`);
                // Store the token in localStorage
                localStorage.setItem("token", response.data.token);
                navigate("/");
            } else {
                // Registration API request
                const { fullname, email, password, confirmPassword } = formData;

                if (password !== confirmPassword) {
                    toast.error("Passwords do not match!");
                    return;
                }

                await API_CLINT.post("/auth/register", { fullname, email, password });
                toast.success("Registration successful! Please log in.");
                toggleForm();
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred!");
        }
    };

    return (
        <div className="auth-container">
            <ToastContainer />
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>{isLogin ? "Login" : "Register"}</h2>

                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Enter your full name"
                            value={formData.fullname}
                            onChange={handleChange}
                            required={!isLogin}
                        />
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                <button type="submit" className="auth-button">
                    {isLogin ? "Login" : "Register"}
                </button>

                <p className="toggle-form">
                    {isLogin
                        ? "Don't have an account?"
                        : "Already have an account?"}{" "}
                    <span onClick={toggleForm}>
            {isLogin ? "Register here" : "Login here"}

          </span>
                </p>
                <p className="toggle-form">
                    {!isLogin ? " " : "Want to join as Driver? "}
                    <a href="/driver-registration">
                        {!isLogin ? " " : "Register here"}
                    </a>
                </p>
            </form>
        </div>
    );
};

export default AuthForm;
