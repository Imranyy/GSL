import React from 'react';
import img1 from '../media/Rectangle 4.png';
import img2 from '../media/Rectangle 8.png';
import img3 from '../media/Rectangle 9.png';
import img4 from '../media/Rectangle 13.png';

function WhatsInForYou(props) {
    return (
       <div className='whats-in'>
            <div className='grid-whats'>
                <div className='grid-item-whats'><img src={img1} alt='..'/></div>
                <div className='grid-item-whats'><img src={img2} alt='..'/></div>
                <div className='grid-item-whats'><img src={img3} alt='..'/></div>
                <div className='grid-item-whats'><img src={img4} alt='..'/></div>
            </div>
       </div>
    );
}

export default WhatsInForYou;