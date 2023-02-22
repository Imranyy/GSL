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
                    <h1>Services</h1>
                </motion.div>
            <Service/>
            <motion.div
                    className='divider'
                    initial={{x:'-80vw'}}
                    whileInView={{x:0}}
                    transition={{duration:0.8}}
                    viewport={{ once: true }}
                >
                    <h1>Solutions</h1>
                    <p style={{textAlign:'center', margin:"10px 30px"}}>We provide a variety of solutions tailored to clients' needs, with a team of technology and cyber security experts to ensure security. Clients can choose from a range of options and our team is available to assist with implementation.</p>
                </motion.div>
                <WhatsInForYou/>
            <ContactUs/>
            <Footer/>
        </>
    );
}

export default LandingPage;