import React, { useState } from "react";
import API_CLINT from "../API_CLINT";
import './ChangePassword.css'

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const userId = localStorage.getItem("userId"); // Replace with dynamic user ID if available

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const response = await API_CLINT.post(
                `/auth/change-password/${userId}`,
                null, // No body is needed as we are passing data via query parameters
                {
                    params: {
                        oldPassword: oldPassword,
                        newpassword: newPassword,
                    },
                }
            );
            setMessage(response.data); // Show success message
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="change-password-container">
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit} className="change-password-form">
                <div className="form-group">
                    <label htmlFor="oldPassword">Old Password</label>
                    <input
                        type="password"
                        id="oldPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="change-password-btn">
                    Change Password
                </button>
            </form>

            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}
