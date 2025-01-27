import React, { useState } from "react";
import API_CLINT from "../API_CLINT";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await API_CLINT.post("/auth/forgot-password", null, {
                params: { email },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="auth-container"
             style={{marginTop: "80px"}}>
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgotPassword}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="auth-button">Send Reset Email</button>
                </div>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}
