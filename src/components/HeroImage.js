import React from 'react';
import Navbar from './Navbar';
import vector from "../media/Vector.png";
import {motion} from "framer-motion";

function HeroImage(props) {
    const scrollToContactUs=()=>{
        document.querySelector('.contact-us').scrollIntoView()
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
                    <h1>GLOBILINK SOLUTION LTD. SUPER FAST SPEEDS at AFFORDABLE RATES </h1>
                    <p>GSL brings to Kisumu internet with incredible speeds at affordable rates</p>
                    <motion.button 
                        onClick={scrollToContactUs} 
                        whileHover={{ background:'var(--white)', color:'var(--navy-blue-light)'}}
                        animate={{ background:'var(--navy-blue-light)', color:'var(--white)'}}
                        transition={{duration:0.3}}
                    >
                        ORDER NOW
                    </motion.button><br/>
                    <img src={vector} className='move-down-img' alt="..." onClick={scrollToContactUs}/>
                </motion.div>
            </div>
        </>
    );
}

export default HeroImage;