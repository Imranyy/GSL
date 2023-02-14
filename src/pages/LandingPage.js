import React from 'react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Plans from '../components/Plans';
import Service from '../components/Service';
import WhatsInForYou from '../components/WhatsInForYou';
import { motion} from "framer-motion"

function LandingPage(props) {
    return (
        <>
            <HeroImage/>
            <Plans/>
                <motion.div
                    className='divider'
                    initial={{x:'-80vw'}}
                    whileInView={{x:0}}
                    transition={{duration:0.8}}
                    viewport={{ once: true }}
                >
                    <h1>What’s In It for You?</h1>
                </motion.div>
            <WhatsInForYou/>
                <motion.div 
                    className='divider'
                    initial={{x:'-80vw'}}
                    whileInView={{x:0}}
                    transition={{duration:0.8}}
                    viewport={{ once: true }}
                >
                    <h1>Together, our services perform even better.</h1>
                </motion.div>
            <Service/>
            <ContactUs/>
            <Footer/>
        </>
    );
}

export default LandingPage;