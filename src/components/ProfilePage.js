import React, {useEffect, useState} from "react";
import {Avatar, Card, CardContent, Grid, Typography, Button} from "@mui/material";
import {FaEnvelope, FaPhone, FaMapMarkerAlt, FaTruck} from "react-icons/fa";
import "./ProfilePage.css";
import API_CLINT from "./API_CLINT";
import CustomLoading from "./CustomLoading";

export default function ProfilePage() {
    const [userData, setUserData] = useState(null);
    const [driverData, setDriverData] = useState(null);
    const userId = localStorage.getItem("userId");
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const role = localStorage.getItem("role");
        setUserRole(!!role);
    })
    useEffect(() => {
        if (!userId) return;
        API_CLINT.get(`/users/${userId}`)
            .then((response) => setUserData(response.data))
            .catch((error) => console.error("Error fetching user data:", error));

        API_CLINT.get(`/driver/${userId}`)
            .then((response) => setDriverData(response.data))
            .catch((error) => console.error("Error fetching driver data:", error));
    }, [userId]);

    if (!userData) return <CustomLoading/>;

    return (
        <div className="profile-container">
            <Card className="profile-card">
                <Avatar alt="Profile Picture" src={userData.photo || "https://via.placeholder.com/150"}
                        className="profile-avatar"/>
                <Typography variant="h5" className="profile-name">{userData.fullname}</Typography>
                <Typography variant="body2" color="textSecondary">{userData.email}</Typography>
            </Card>

            <Grid container spacing={2} className="profile-details">
                <Grid item xs={12} md={6}>
                    <Card className="profile-detail-card">
                        <CardContent>
                            <Typography variant="h6">Contact Info</Typography>
                            <Typography variant="body2"><FaPhone className="icon"/> {userData.phone || "N/A"}
                            </Typography>
                            <Typography variant="body2"><FaMapMarkerAlt
                                className="icon"/> {userData.address || "Location not set"}</Typography>
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs={12} md={6}>
                    <Card className="profile-detail-card">
                        {userData.role === "USER" ? (
                            <CardContent>
                                <Typography variant="h6">Driver Status</Typography>
                                {driverData ? (
                                    <>
                                        <Typography variant="body2"><FaTruck
                                            className="icon"/> Vehicle: {driverData.vehicaltype?.join(", ") || "Not specified"}
                                        </Typography>
                                        <Typography variant="body2">Service
                                            Area: {driverData.servicearea?.join(", ") || "Not specified"}</Typography>
                                        <Typography variant="body2">Price per
                                            trip: {driverData.price || "Not set"}</Typography>
                                        <Typography variant="body2"
                                                    color={driverData.active ? "green" : "red"}>Status: {driverData.active ? "Available" : "Unavailable"}</Typography>
                                    </>
                                ) : (
                                    <Button variant="contained" color="primary" href="/register-driver">Register as
                                        Driver</Button>
                                )}
                            </CardContent>
                        ):(
                            <>
                                <strong>Welcome Driver</strong>
                            </>
                        )}
                    </Card>
                </Grid>


            </Grid>
        </div>
    );
}
