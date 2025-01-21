import React, {useEffect, useState} from 'react';
import './Footer.css';
import {FaFacebook, FaLinkedin, FaYoutube} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";

export default function Footer() {


    return (
        <div className="page-container">

            <footer className="footer">
                <hr></hr>
                        <div className="social-icons d-flex justify-content-center">
                            <a href="#" rel="noreferrer" target="_blank"
                               className="footer-icon mx-2">
                                <FaLinkedin/>
                            </a>
                            <a href="#" rel="noreferrer" target="_blank"
                               className="footer-icon mx-2">
                                <RiInstagramFill/>
                            </a>
                            <a href="#" rel="noreferrer" target="_blank"
                               className="footer-icon mx-2">
                                <FaFacebook/>
                            </a>
                            <a href="#" rel="noreferrer" target="_blank"
                               className="footer-icon mx-2">
                                <FaYoutube/>
                            </a>
                        </div>
                <hr></hr>
                <p>&copy; {new Date().getFullYear()} Sajjad Hossain. All rights reserved.</p>
            </footer>
        </div>
    );
}