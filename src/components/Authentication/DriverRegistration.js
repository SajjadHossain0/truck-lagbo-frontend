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
    const { handleSubmit, control } = useForm();

    const vehicleTypes = ["Truck", "Van", "Pickup"];
    const serviceAreas = ["Dhaka", "Chattogram", "Sylhet", "Khulna"];
    const size = ["10ft", "30ft", "50ft"];
    const weight = ["100kg", "200kg", "300kg"];

    const onSubmit = (data) => {
        console.log("Driver Registration Data:", data);
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
                            <TextField type="file" inputProps={{ accept: "image/*" }} fullWidth />
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
