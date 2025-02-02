import React, {useEffect, useState} from 'react';
import './Header.css';
import {Button} from "reactstrap";
import {Avatar, Menu, MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function Header() {
    const [isLogin, setLogin] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const open = Boolean(anchorEl);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (option) => {
        console.log(`${option} clicked`);
        handleMenuClose();
    };
    const linkClicked = (link) => {
        navigate(link)
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        setLogin(!!token);
    })
    const handleLogout = () => {
        localStorage.removeItem("token");
        setLogin(false);
        navigate("/auth");
    }

    return (

        <div className="header-container">
            <div className="header-logo">
                <span><a href="/">MalBahi</a></span>
            </div>
            <div className="header-buttons">
                {!isLogin ? (
                    <>
                        <div>
                            <a href="/auth"><Button className="login-btn" color="warning" outline>
                                Login
                            </Button></a>
                        </div>
                        <div>
                            <a href="/driver-registration"><Button className="driver-reg-btn" color="warning">
                                Register as Driver
                            </Button></a>
                        </div>
                    </>
                ) : (
                    <></>
                )}


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
                        <a href="/profile" className="menu-item-a">
                            <MenuItem className="menu-item" onClick={() => handleMenuItemClick("Profile")}>
                            Profile
                        </MenuItem>
                        </a>
                        <a href="/settings" className="menu-item-a">
                            <MenuItem className="menu-item" onClick={() => handleMenuItemClick("Settings")}>
                            Settings
                        </MenuItem>
                        </a>

                        {!isLogin ? (
                            <a href="/auth" className="menu-item-a">
                                <MenuItem className="menu-item" onClick={() => handleMenuItemClick("Login")}>
                                Login
                            </MenuItem>
                            </a>
                        ) : (
                            <MenuItem className="menu-item" onClick={() => handleLogout()}>
                                Logout
                            </MenuItem>
                        )}


                    </Menu>

                </div>
            </div>
        </div>);
}