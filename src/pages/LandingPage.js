import React from 'react';
import HeroImage from '../components/HeroImage';
import Plans from '../components/Plans';

function LandingPage(props) {
    return (
        <>
            <HeroImage/>
            <Plans/>
            <div className='divider'>
                <h1>What’s In It for You?</h1>
            </div>
        </>
    );
}

export default LandingPage;