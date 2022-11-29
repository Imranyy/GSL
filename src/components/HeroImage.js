import React from 'react';
import Navbar from './Navbar';
import vector from "../media/Vector.png";

function HeroImage(props) {
    return (
        <>
            <div className='hero-image'>
                <Navbar/>
                <h1>SUPER FAST SPEEDS at AFFORDABLE RATES </h1>
                <p>GSL brings to Kisumu internet with INCREDIBLE SPEEDS at AFFORDABLE RATES </p>
                <button>ORDER NOW</button><br/>
                <img src={vector} alt="..." />
            </div>
        </>
    );
}

export default HeroImage;