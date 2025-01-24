import React from "react";
import './SearchInput.css'
import {Autocomplete, Stack, TextField} from "@mui/material";
import {Card, CardContent, CardMedia, Typography, Grid, Box,} from "@mui/material";
import {Button} from "reactstrap";
import {FaSearch} from "react-icons/fa";

export default function SearchInput(props) {
    const bangladeshAreas = [
        {title: "motijheel"},
        {title: "gulshan"},
        {title: "banani"},
        {title: "dhanmondi"},
        {title: "uttara"},
        {title: "mirpur"},
        {title: "bashundhara"},
        {title: "baridhara"},
        {title: "tejgaon"},
        {title: "farmgate"},
        {title: "mohakhali"},
        {title: "khilkhet"},
        {title: "kawranbazar"},
        {title: "azimpur"},
        {title: "shyamoli"},
        {title: "kalyanpur"},
        {title: "rampura"},
        {title: "badda"},
        {title: "malibagh"},
        {title: "moghbazar"},
        {title: "hazaribagh"},
        {title: "savar"},
        {title: "keraniganj"},
        {title: "tongi"},
        {title: "gazipur"},
        {title: "narayanganj"},
        {title: "chittagong"},
        {title: "cox's bazar"},
        {title: "khulna"},
        {title: "rajshahi"},
        {title: "sylhet"},
        {title: "barisal"},
        {title: "rangpur"},
        {title: "bogura"},
        {title: "mymensingh"},
        {title: "comilla"},
        {title: "feni"},
        {title: "noakhali"},
        {title: "bagerhat"},
        {title: "jessore"},
        {title: "satkhira"},
        {title: "gopalganj"},
        {title: "manikganj"},
        {title: "munshiganj"},
        {title: "narsingdi"},
        {title: "netrokona"},
        {title: "sherpur"},
        {title: "habiganj"},
        {title: "maulvibazar"},
        {title: "kishoreganj"},
        {title: "brahmanbaria"},
        {title: "lakshmipur"},
        {title: "chandpur"},
        {title: "bhola"},
        {title: "patuakhali"},
        {title: "jhalokati"},
        {title: "barguna"},
        {title: "chuadanga"},
        {title: "meherpur"},
        {title: "narail"},
        {title: "magura"},
        {title: "kushtia"},
        {title: "pabna"},
        {title: "natore"},
        {title: "naogaon"},
        {title: "joypurhat"},
        {title: "sirajganj"},
        {title: "dinajpur"},
        {title: "thakurgaon"},
        {title: "panchagarh"},
        {title: "nilphamari"},
        {title: "lalmonirhat"},
        {title: "kurigram"},
        {title: "gaibandha"},
        {title: "jamalpur"},
        {title: "madaripur"},
        {title: "shariatpur"},
        {title: "faridpur"},
        {title: "rajbari"}
    ];
    const drivers = [
        {
            image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png", // Replace with real image URLs
            name: "Sajjad Hossain",
            vehicleType: "Truck",
            weight: "5000kg",
            size: "20ft",
            number: "01738082631",
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png",
            name: "John Doe",
            vehicleType: "Pickup",
            weight: "3000kg",
            size: "15ft",
            number: "01738082631",
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png",
            name: "Jane Smith",
            vehicleType: "Van",
            weight: "1000kg",
            size: "10ft",
            number: "01738082631",
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png", // Replace with real image URLs
            name: "Sajjad Hossain",
            vehicleType: "Truck",
            weight: "5000kg",
            size: "20ft",
            number: "01738082631",
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png",
            name: "John Doe",
            vehicleType: "Pickup",
            weight: "3000kg",
            size: "15ft",
            number: "01738082631",
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png",
            name: "Jane Smith",
            vehicleType: "Van",
            weight: "1000kg",
            size: "10ft",
            number: "01738082631",
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png", // Replace with real image URLs
            name: "Sajjad Hossain",
            vehicleType: "Truck",
            weight: "5000kg",
            size: "20ft",
            number: "01738082631",
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png",
            name: "John Doe",
            vehicleType: "Pickup",
            weight: "3000kg",
            size: "15ft",
            number: "01738082631",
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png",
            name: "Jane Smith",
            vehicleType: "Van",
            weight: "1000kg",
            size: "10ft",
            number: "01738082631",
        },
    ];
    return (
        <>

            <div align="center" className="searchinput-container">
                <Stack className="search-input" spacing={2} sx={{width: 300}}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={bangladeshAreas.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Enter your location..."
                                slotProps={{
                                    input: {
                                        ...params.InputProps,
                                        type: 'search',
                                    },
                                }}
                            />
                        )}
                    />
                </Stack>
                <Button className="search-btn" color="warning"><FaSearch/> Search</Button>
            </div>

            <div align="center" className="searchresult-container">
                <Box
                    sx={{
                        padding: "2rem",
                        backgroundColor: "#f9f9f9",
                        minHeight: "100vh",
                    }}
                >
                    <Grid container spacing={3}>
                        {drivers.map((driver, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card
                                    sx={{
                                        maxWidth: 345,
                                        margin: "auto",
                                        boxShadow: 3,
                                        borderRadius: 2,
                                        padding: "10px"
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: 140,
                                            height: 140,
                                            margin: "0 auto",
                                            borderRadius: "50%", // Makes the image a circle
                                            objectFit: "cover",  // Ensures the image fills the circle without distortion
                                            border: "2px solid #ff9700", // Optional border for styling
                                        }}
                                        image={driver.image}
                                        alt={driver.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            {driver.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Vehicle Type : {driver.vehicleType}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Weight : {driver.weight} || Size : {driver.size}
                                        </Typography>
                                    </CardContent>
                                    <a href={`tel:${driver.number}`}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{
                                                borderRadius: "0 0 8px 8px",
                                            }}
                                        >
                                            Contact
                                        </Button></a>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </>
    );
}