import React from "react";
import "./Home.css";
import home_truck from './image/home_truck.jpg'
import SearchInput from "./SearchInput";

const Home = () => {
    return (
        <>

            <div className="landing-container">
                {/*Hero section*/}
                <div className="text-container">
                    <h1 className="slide-from-left">Truck Lagbo ?</h1>
                    <h5 className="slide-from-left">Search truck in your area...</h5>
                </div>
                <div className="image-container">
                    <img
                        src={home_truck}
                        alt="Placeholder"
                        className="slide-from-right"
                    />
                </div>
            </div>
            {/*    Search field*/
            }
            <div align="center" className="search-container">
                <SearchInput/>
            </div>
        </>
    );
};

export default Home;
