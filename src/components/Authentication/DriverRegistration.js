import React from "react";
import {useForm, Controller} from "react-hook-form";
import './DriverRegistration.css'
import {
    TextField,
    Button,
    Box,
    Typography,
    Grid,
    Checkbox,
    FormControlLabel,
} from "@mui/material";

const DriverRegistration = () => {
    const {handleSubmit, control, register} = useForm();

    const vehicleTypes = ["Truck", "Van", "Pickup"];
    const serviceAreas = ["Dhaka", "Chattogram", "Sylhet", "Khulna"];

    const onSubmit = (data) => {
        console.log("Driver Registration Data:", data);
        // You can send this data to your backend API here
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
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Full Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                )}
                            />
                        </Grid>

                        {/* Phone Number */}
                        <Grid item xs={12}>
                            <Controller
                                name="number"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Phone Number"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                )}
                            />
                        </Grid>

                        {/* Photo Upload */}
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom>
                                Upload Photo
                            </Typography>
                            <TextField
                                type="file"
                                inputProps={{
                                    accept: "image/*",
                                }}
                                {...register("photo")}
                                fullWidth
                            />
                        </Grid>

                        {/* Vehicle Type */}
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom>
                                Vehicle Type
                            </Typography>
                            {vehicleTypes.map((type, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox {...register("vehicaltype")} value={type}/>
                                    }
                                    label={type}
                                />
                            ))}
                        </Grid>

                        {/* Weight */}
                        <Grid item xs={6}>
                            <Controller
                                name="weight"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Weight (kg)"
                                        variant="outlined"
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid>

                        {/* Size */}
                        <Grid item xs={6}>
                            <Controller
                                name="size"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Size (ft)"
                                        variant="outlined"
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid>

                        {/* Registration Number */}
                        <Grid item xs={12}>
                            <Controller
                                name="registrationnumber"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Registration Number"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                )}
                            />
                        </Grid>

                        {/* Service Area */}
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom>
                                Service Areas
                            </Typography>
                            {serviceAreas.map((area, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox {...register("servicearea")} value={area}/>
                                    }
                                    label={area}
                                />
                            ))}
                        </Grid>

                        {/* Price */}
                        <Grid item xs={12}>
                            <Controller
                                name="price"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Price (per trip)"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                )}
                            />
                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="warning"
                                fullWidth
                            >
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
