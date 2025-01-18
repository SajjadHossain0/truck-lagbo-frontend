import React from 'react';
import './Header.css';
import {Button} from "reactstrap";
import {Avatar} from "@mui/material";

export default function Header() {
    return (<div className="header-container">
        <div className="header-logo">
            <span>Truck Lagbo ?</span>
        </div>
        <div className="header-buttons">
            <div>
                <Button color="warning" outline>
                    Login
                </Button>
            </div>
            <div>
                <Button color="warning">
                    Register as Driver
                </Button>
            </div>
            <div>
                <Avatar alt="Sajjad Hossain" src="/static/images/avatar/1.jpg"/>
            </div>
        </div>
    </div>);
}