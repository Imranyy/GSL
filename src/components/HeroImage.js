import React from 'react';
import Navbar from './Navbar';
import vector from "../media/Vector.png";

function HeroImage(props) {
    const showPlans=()=>{
        document.querySelector('.plans').style.display='block';
    }
    const close=()=>{
        document.querySelector('.plans').style.display='none';
    }
    return (
        <>
            <div className='hero-image'>
                <Navbar/>
                <h1>SUPER <div className='blue'>FAST</div> SPEEDS at <div className='blue'>AFFORDABLE</div> RATES </h1>
                <p>GSL brings to Kisumu internet with INCREDIBLE SPEEDS at AFFORDABLE RATES </p>
                <button>ORDER NOW</button><br/>
                <img src={vector} alt="..." onClick={showPlans} onDoubleClick={close}/>
            </div>
        </>
    );
}

export default HeroImage;