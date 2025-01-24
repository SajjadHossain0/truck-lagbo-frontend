import React from "react";
import { Box, Typography, Grid, Paper, Button, Avatar } from "@mui/material";
import { FaUserCircle, FaLock, FaKey, FaEdit } from "react-icons/fa";
import './SettingsPage.css';

export default function SettingsPage() {
    return (
        <Box className="setting-container">
            <Typography className="setting-header" variant="h4" gutterBottom>
                Settings
            </Typography>
            <Grid container spacing={3}>
                {/* Profile Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} className="card">
                        <Avatar className="avatar avatar-user">
                            <FaUserCircle size={40} />
                        </Avatar>
                        <Typography className="card-title" variant="h6">
                            Edit Profile
                        </Typography>
                        <Typography className="card-description" variant="body2">
                            Update your personal information and profile photo.
                        </Typography>
                        <Button className="card-button" variant="contained" color="primary">
                            Edit Profile
                        </Button>
                    </Paper>
                </Grid>

                {/* Change Password Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} className="card">
                        <Avatar className="avatar avatar-lock">
                            <FaLock size={40} />
                        </Avatar>
                        <Typography className="card-title" variant="h6">
                            Change Password
                        </Typography>
                        <Typography className="card-description" variant="body2">
                            Update your password to keep your account secure.
                        </Typography>
                        <Button className="card-button" variant="contained" color="success">
                            Change Password
                        </Button>
                    </Paper>
                </Grid>

                {/* Forgot Password Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} className="card">
                        <Avatar className="avatar avatar-key">
                            <FaKey size={40} />
                        </Avatar>
                        <Typography className="card-title" variant="h6">
                            Forgot Password
                        </Typography>
                        <Typography className="card-description" variant="body2">
                            Reset your password if you’ve forgotten it.
                        </Typography>
                        <Button className="card-button" variant="contained" color="info">
                            Reset Password
                        </Button>
                    </Paper>
                </Grid>

                {/* Edit Details Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} className="card">
                        <Avatar className="avatar avatar-edit">
                            <FaEdit size={40} />
                        </Avatar>
                        <Typography className="card-title" variant="h6">
                            Edit Details
                        </Typography>
                        <Typography className="card-description" variant="body2">
                            Update additional details for your account.
                        </Typography>
                        <Button className="card-button" variant="contained" color="secondary">
                            Edit Details
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
