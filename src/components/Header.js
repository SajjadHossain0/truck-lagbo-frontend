import React, {useState} from 'react';
import './Header.css';
import {Button} from "reactstrap";
import {Avatar, IconButton, Menu, MenuItem} from "@mui/material";

export default function Header() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // Handle menu open
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Handle menu close
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Menu item click handler
    const handleMenuItemClick = (option) => {
        console.log(`${option} clicked`);
        handleMenuClose();
    };

    return (

        <div className="header-container">
        <div className="header-logo">
            <span><a href="/">Truck Lagbo ?</a></span>
        </div>
        <div className="header-buttons">
            <div>
                <Button className="login-btn" color="warning" outline>
                   <a href="/auth">Login</a>
                </Button>
            </div>
            <div>
                <Button className="driver-reg-btn" color="warning">
                    Register as Driver
                </Button>
            </div>
            <div>
                <Avatar onClick={handleMenuOpen} alt="Sajjad Hossain" src="/static/images/avatar/1.jpg"/>

                {/* Dropdown Menu */}
                <Menu
                    anchorEl={anchorEl} // Menu position reference
                    open={open} // Is the menu open
                    onClose={handleMenuClose} // Close menu on outside click
                    anchorOrigin={{
                        vertical: "bottom", horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top", horizontal: "right",
                    }}
                >
                    {/* Menu Options */}
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick("Profile")}>
                        Profile
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick("Settings")}>
                        Settings
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick("Logout")}>
                        Logout
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick("Login")}><a href="/auth">Login</a></MenuItem>
                </Menu>

            </div>
        </div>
    </div>);
}