import React from "react";
import './SearchInput.css'
import {Autocomplete, Stack, TextField} from "@mui/material";
import {Button} from "reactstrap";
import {FaSearch} from "react-icons/fa";

export default function SearchInput(props) {
    const bangladeshAreas = [
        { title: "motijheel" },
        { title: "gulshan" },
        { title: "banani" },
        { title: "dhanmondi" },
        { title: "uttara" },
        { title: "mirpur" },
        { title: "bashundhara" },
        { title: "baridhara" },
        { title: "tejgaon" },
        { title: "farmgate" },
        { title: "mohakhali" },
        { title: "khilkhet" },
        { title: "kawranbazar" },
        { title: "azimpur" },
        { title: "shyamoli" },
        { title: "kalyanpur" },
        { title: "rampura" },
        { title: "badda" },
        { title: "malibagh" },
        { title: "moghbazar" },
        { title: "hazaribagh" },
        { title: "savar" },
        { title: "keraniganj" },
        { title: "tongi" },
        { title: "gazipur" },
        { title: "narayanganj" },
        { title: "chittagong" },
        { title: "cox's bazar" },
        { title: "khulna" },
        { title: "rajshahi" },
        { title: "sylhet" },
        { title: "barisal" },
        { title: "rangpur" },
        { title: "bogura" },
        { title: "mymensingh" },
        { title: "comilla" },
        { title: "feni" },
        { title: "noakhali" },
        { title: "bagerhat" },
        { title: "jessore" },
        { title: "satkhira" },
        { title: "gopalganj" },
        { title: "manikganj" },
        { title: "munshiganj" },
        { title: "narsingdi" },
        { title: "netrokona" },
        { title: "sherpur" },
        { title: "habiganj" },
        { title: "maulvibazar" },
        { title: "kishoreganj" },
        { title: "brahmanbaria" },
        { title: "lakshmipur" },
        { title: "chandpur" },
        { title: "bhola" },
        { title: "patuakhali" },
        { title: "jhalokati" },
        { title: "barguna" },
        { title: "chuadanga" },
        { title: "meherpur" },
        { title: "narail" },
        { title: "magura" },
        { title: "kushtia" },
        { title: "pabna" },
        { title: "natore" },
        { title: "naogaon" },
        { title: "joypurhat" },
        { title: "sirajganj" },
        { title: "dinajpur" },
        { title: "thakurgaon" },
        { title: "panchagarh" },
        { title: "nilphamari" },
        { title: "lalmonirhat" },
        { title: "kurigram" },
        { title: "gaibandha" },
        { title: "jamalpur" },
        { title: "madaripur" },
        { title: "shariatpur" },
        { title: "faridpur" },
        { title: "rajbari" }
    ];
    return (
        <>
            <div align="center" className="searchinput-container">
                <Stack className="search-input" spacing={2} sx={{ width: 300 }}>
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

                <Button className="search-btn" color="warning"><FaSearch /> Search</Button>
            </div>

        </>
    );
}