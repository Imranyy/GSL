import React from 'react';
import img1 from '../media/Rectangle 4.png';
import img2 from '../media/Rectangle 8.png';
import img3 from '../media/Rectangle 9.png';
import img4 from '../media/Rectangle 13.png';

function WhatsInForYou(props) {
    const show1=()=>{
        document.querySelector('.img1').style.display='none';
        dontShow2()
        dontShow3()
        dontShow4()
    }
    const show2=()=>{
        document.querySelector('.img2').style.display='none';
        dontShow1()
        dontShow3()
        dontShow4()
    }
    const show3=()=>{
        document.querySelector('.img3').style.display='none';
        dontShow1()
        dontShow2()
        dontShow4()
    }
    const show4=()=>{
        document.querySelector('.img4').style.display='none';
        dontShow1()
        dontShow2()
        dontShow3()
    }
    const dontShow1=()=>{
        document.querySelector('.img1').style.display='block';
    }
    const dontShow2=()=>{
        document.querySelector('.img2').style.display='block';
    }
    const dontShow3=()=>{
        document.querySelector('.img3').style.display='block';
    }
    const dontShow4=()=>{
        document.querySelector('.img4').style.display='block';
    }
    return (
       <>
        <div className='whats-in'>
            <div className='grid-whats'>
                <div className='grid-item-whats1' onClick={show1}><p>Unlimited Internet and VoIP calls</p></div>
                <div className='grid-item-whats2' onClick={show2}><p>Customer Data Protection</p></div>
                <div className='grid-item-whats3' onClick={show3}><p>HD Surveillance Streaming</p></div>
                <div className='grid-item-whats4' onClick={show4}><p>HD Video Streaming</p></div>
            </div>
       </div>
       </>
    );
}

export default WhatsInForYou;