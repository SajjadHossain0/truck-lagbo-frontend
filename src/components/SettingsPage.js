import React, {useState} from "react";
import {Box, Typography, Grid, Paper, Button, Avatar,} from "@mui/material";
import { FaUserCircle, FaLock, FaKey, FaEdit } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

export default function SettingsPage() {

    const navigate = useNavigate();

    const handleForgotPassword = async (e) => {
        navigate("/forget-pass")
    }

    return (
        <Box
            sx={{
                maxWidth: "95%",
                margin: "2rem auto",
                padding: "1rem",
                marginTop: "80px"
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    textAlign: "center",
                    marginBottom: "1.5rem",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                }}
            >
                Settings
            </Typography>

            {/* Settings Options */}
            <Grid container spacing={3}>
                {/* Profile Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: "1.5rem",
                            textAlign: "center",
                            borderRadius: "12px",
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                margin: "0 auto",
                                backgroundColor: "#FFB74D",
                            }}
                        >
                            <FaUserCircle size={40} />
                        </Avatar>
                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                            Edit Profile
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            Update your personal information and profile photo.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ marginTop: "1rem" }}
                            fullWidth
                        >
                            Edit Profile
                        </Button>
                    </Paper>
                </Grid>

                {/* Change Password Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: "1.5rem",
                            textAlign: "center",
                            borderRadius: "12px",
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                margin: "0 auto",
                                backgroundColor: "#4CAF50",
                            }}
                        >
                            <FaLock size={40} />
                        </Avatar>
                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                            Change Password
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            Update your password to keep your account secure.
                        </Typography>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ marginTop: "1rem" }}
                            fullWidth
                        >
                            Change Password
                        </Button>
                    </Paper>
                </Grid>

                {/* Forgot Password Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: "1.5rem",
                            textAlign: "center",
                            borderRadius: "12px",
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                margin: "0 auto",
                                backgroundColor: "#2196F3",
                            }}
                        >
                            <FaKey size={40} />
                        </Avatar>
                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                            Forgot Password
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            Reset your password if you’ve forgotten it.
                        </Typography>
                        <Button
                            variant="contained"
                            color="info"
                            sx={{ marginTop: "1rem" }}
                            fullWidth
                            onClick={() => handleForgotPassword()}
                        >
                            Reset Password
                        </Button>
                    </Paper>
                </Grid>

                {/* Edit Details Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: "1.5rem",
                            textAlign: "center",
                            borderRadius: "12px",
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                margin: "0 auto",
                                backgroundColor: "#FF5722",
                            }}
                        >
                            <FaEdit size={40} />
                        </Avatar>
                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                            Edit Details
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            Update additional details for your account.
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ marginTop: "1rem" }}
                            fullWidth
                        >
                            Edit Details
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
