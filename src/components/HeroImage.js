import React from 'react';
import Navbar from './Navbar';
import vector from "../media/Vector.png";
import {motion} from "framer-motion";

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
                <motion.div 
                    className='hero-content'
                    initial={{y: -300}}
                    animate={{y: 0}}
                    transition={{delay:0.5}}
                >
                    <h1>SUPER<span className='blue'> FAST </span>SPEEDS AT <span className='blue'> AFFORDABLE </span>RATES </h1>
                    <p>GSL brings to Kisumu internet with incredible speeds at affordable rates</p>
                    <motion.button 
                        onClick={showPlans} 
                        onDoubleClick={close}
                        whileHover={{ background:'var(--white)', color:'var(--navy-blue-light)'}}
                        animate={{ background:'var(--navy-blue-light)', color:'var(--white)'}}
                        transition={{duration:0.3}}
                    >
                        ORDER NOW
                    </motion.button><br/>
                    <img src={vector} className='move-down-img' alt="..." onClick={showPlans}/>
                    <img src={vector} style={{display:'none'}} alt="..." className='move-up-img' onClick={close}/>
                </motion.div>
            </div>
        </>
    );
}

export default HeroImage;