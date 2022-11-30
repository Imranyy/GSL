import React from 'react';
import Navbar from './Navbar';
import vector from "../media/Vector.png";

function HeroImage(props) {
    const showPlans=()=>{
        document.querySelector('.plans').style.display='block';
        document.querySelector('.move-down-img').style.display='none';
        document.querySelector('.move-up-img').style.display='block';
    }
    const close=()=>{
        document.querySelector('.plans').style.display='none';
        document.querySelector('.move-up-img').style.display='none';
        document.querySelector('.move-down-img').style.display='block';
    }
    return (
        <>
            <div className='hero-image'>
                <Navbar/>
                <div className='hero-content'>
                    <h1>SUPER <div className='blue'>FAST</div> SPEEDS at <div className='blue'>AFFORDABLE</div> RATES </h1>
                    <p>GSL brings to Kisumu internet with INCREDIBLE SPEEDS at AFFORDABLE RATES </p>
                    <button>ORDER NOW</button><br/>
                    <img src={vector} className='move-down-img' alt="..." onClick={showPlans}/>
                    <img src={vector} style={{display:'none'}} alt="..." className='move-up-img' onClick={close}/>
                </div>
            </div>
        </>
    );
}

export default HeroImage;