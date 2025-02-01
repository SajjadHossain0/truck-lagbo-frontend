import React from "react";
import { useForm, Controller } from "react-hook-form";
import './DriverRegistration.css';
import {
    TextField,
    Button,
    Box,
    Typography,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel
} from "@mui/material";

const DriverRegistration = () => {
    const userId = localStorage.getItem("userId");
    const { handleSubmit, control } = useForm();

    const vehicleTypes = ["Truck", "Van", "Pickup"];
    const serviceAreas = ["Dhaka", "Chattogram", "Sylhet", "Khulna"];
    const size = ["10ft", "30ft", "50ft"];
    const weight = ["100kg", "200kg", "300kg"];

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("number", data.number);

        if (data.photo && data.photo[0]) {
            formData.append("photo", data.photo[0]);
        } else {
            console.warn("No photo selected");
        }

        formData.append("vehicaltype", data.vehicleType);
        formData.append("weight", data.weight);
        formData.append("size", data.truckSize);
        formData.append("registrationnumber", data.registrationNumber);
        formData.append("servicearea", data.serviceArea);
        formData.append("price", data.price);

        try {
            const response = await fetch(`http://localhost:8080/api/driver/register/${userId}`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Registration Successful:", result);
                alert("Driver registered successfully!");
            } else {
                const errorText = await response.text();
                console.error("Registration Failed:", errorText);
                alert("Registration failed: " + errorText);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred during registration.");
        }
    };

    return (
        <div className="driver-reg-container">
            <Box
                sx={{
                    maxWidth: 600,
                    margin: "2rem auto",
                    padding: "2rem",
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: "white",
                }}
            >
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Driver Registration
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        {/* Name */}
                        <Grid item xs={12}>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField {...field} label="Full Name" variant="outlined" fullWidth required />
                                )}
                            />
                        </Grid>

                        {/* Phone Number */}
                        <Grid item xs={12}>
                            <Controller
                                name="number"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField {...field} label="Phone Number" variant="outlined" fullWidth required />
                                )}
                            />
                        </Grid>

                        {/* Photo Upload */}
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom>
                                Upload Photo
                            </Typography>
                            <Controller
                                name="photo"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        {...field} // Bind to react-hook-form
                                    />
                                )}
                            />
                        </Grid>

                        {/* Vehicle Type */}
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Vehicle Type</InputLabel>
                                <Controller
                                    name="vehicleType"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select {...field} label="Vehicle Type">
                                            {vehicleTypes.map((type, index) => (
                                                <MenuItem key={index} value={type}>{type}</MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </Grid>

                        {/* Weight */}
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Weight</InputLabel>
                                <Controller
                                    name="weight"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select {...field} label="Weight">
                                            {weight.map((type, index) => (
                                                <MenuItem key={index} value={type}>{type}</MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </Grid>

                        {/* Size */}
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Truck Size</InputLabel>
                                <Controller
                                    name="truckSize"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select {...field} label="Truck Size">
                                            {size.map((type, index) => (
                                                <MenuItem key={index} value={type}>{type}</MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </Grid>

                        {/* Registration Number */}
                        <Grid item xs={12}>
                            <Controller
                                name="registrationNumber"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField {...field} label="Registration Number" variant="outlined" fullWidth required />
                                )}
                            />
                        </Grid>

                        {/* Service Area */}
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Service Area</InputLabel>
                                <Controller
                                    name="serviceArea"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select {...field} label="Service Area">
                                            {serviceAreas.map((area, index) => (
                                                <MenuItem key={index} value={area}>{area}</MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </Grid>

                        {/* Price */}
                        <Grid item xs={12}>
                            <Controller
                                name="price"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField {...field} label="Price (per trip)" variant="outlined" fullWidth required />
                                )}
                            />
                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="warning" fullWidth>
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    );
};

export default DriverRegistration;

