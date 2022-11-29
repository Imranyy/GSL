import React from 'react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Plans from '../components/Plans';
import WhatsInForYou from '../components/WhatsInForYou';

function LandingPage(props) {
    return (
        <>
            <HeroImage/>
            <Plans/>
            <div className='divider'>
                <h1>What’s In It for You?</h1>
            </div>
            <WhatsInForYou/>
            <ContactUs/>
            <Footer/>
        </>
    );
}

export default LandingPage;