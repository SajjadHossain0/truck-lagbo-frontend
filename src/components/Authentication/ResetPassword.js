import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import API_CLINT from "../API_CLINT";

export default function ResetPassword() {
    const [searchParams] = useSearchParams();
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const token = searchParams.get("token"); // Extract token from URL

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await API_CLINT.post("/auth/reset-password", null, {
                params: { token, newPassword },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="auth-container"
             style={{marginTop: "80px"}}>
            <h2>Reset Password</h2>
            <form onSubmit={handleResetPassword}>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="auth-button">Reset Password</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}
