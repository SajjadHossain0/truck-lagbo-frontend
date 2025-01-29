import React, {useEffect, useState} from "react";
import {Avatar, Card, CardContent, Grid, Typography} from "@mui/material";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import './ProfilePage.css';
import API_CLINT from "./API_CLINT";

export default function ProfilePage() {
    const [userData, setUserData] = useState(null);
    const userId = localStorage.getItem("userId");


    useEffect(() => {
        API_CLINT
            .get(`/users/${userId}`)
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, [userId]);

    return (
        <div className="profile-container">
            {/* Profile Section */}
            <div className="profile-option">
                <Card className="profile-card">
                    <Avatar
                        alt="Profile Picture"
                        src="https://via.placeholder.com/150"
                        className="profile-avatar"
                    />
                    <Typography variant="h5" className="profile-name">
                        {userData.fullname}
                    </Typography>
                </Card>
            </div>

            {/* Details Section */}
            <div className="profile-other">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card className="profile-detail-card">
                            <CardContent>
                                <Typography variant="h6">Contact Information</Typography>
                                <Typography variant="body2">
                                    <FaEnvelope className="icon" /> {userData.email}
                                </Typography>
                                <Typography variant="body2">
                                    <FaPhone className="icon" /> +880-123-456789
                                </Typography>
                                <Typography variant="body2">
                                    <FaMapMarkerAlt className="icon" /> Dhaka, Bangladesh
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card className="profile-detail-card">
                            <CardContent>
                                <Typography variant="h6">Additional Details</Typography>
                                <Typography variant="body2">
                                    Role: Junior Java Developer
                                </Typography>
                                <Typography variant="body2">
                                    Experience: 2 years
                                </Typography>
                                <Typography variant="body2">
                                    Skills: Java, Spring Boot, React
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
