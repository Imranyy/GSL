import React from 'react';
import img1 from '../media/Rectangle 4.png';
import img2 from '../media/Rectangle 8.png';
import img3 from '../media/Rectangle 9.png';
import img4 from '../media/Rectangle 13.png';

function WhatsInForYou(props) {
    const show1=()=>{
        document.querySelector('.grid-item-whats1').style.display='block';
        document.querySelector('.img1').style.display='none';
    }
    const show2=()=>{
        document.querySelector('.grid-item-whats2').style.display='block';
        document.querySelector('.img2').style.display='none';
    }
    const show3=()=>{
        document.querySelector('.grid-item-whats3').style.display='block';
        document.querySelector('.img3').style.display='none';
    }
    const show4=()=>{
        document.querySelector('.grid-item-whats4').style.display='block';
        document.querySelector('.img4').style.display='none';
    }
    const dontShow1=()=>{
        document.querySelector('.grid-item-whats1').style.display='none';
        document.querySelector('.img1').style.display='block';
    }
    const dontShow2=()=>{
        document.querySelector('.grid-item-whats2').style.display='none';
        document.querySelector('.img2').style.display='block';
    }
    const dontShow3=()=>{
        document.querySelector('.grid-item-whats3').style.display='none';
        document.querySelector('.img3').style.display='block';
    }
    const dontShow4=()=>{
        document.querySelector('.grid-item-whats4').style.display='none';
        document.querySelector('.img4').style.display='block';
    }
    return (
       <div className='whats-in'>
            <div className='grid-whats'>
                <div style={{cursor:'pointer'}}><img className='img1' onClick={show1}  onMouseOver={show1} onMouseLeave={dontShow1} src={img1} alt='..'/><div style={{display:'none'}} className='grid-item-whats1'><p>Unlimited Internet and VoIP calls</p></div></div>
                <div style={{cursor:'pointer'}}><img className='img2' onClick={show2} onMouseOver={show2} onMouseLeave={dontShow2} src={img2} alt='..'/><div style={{display:'none'}} className='grid-item-whats2'><p>Customer Data Protection</p></div></div>
                <div style={{cursor:'pointer'}}><img className='img3' onClick={show3} onMouseOver={show3} onMouseLeave={dontShow3} src={img3} alt=".."/><div style={{display:'none'}} className='grid-item-whats3'><p>HD Surveillance Streaming</p></div></div>
                <div style={{cursor:'pointer'}}><img className='img4' onClick={show4} onMouseOver={show4} onMouseLeave={dontShow4} src={img4} alt=".."/><div style={{display:'none'}} className='grid-item-whats4'><p>HD Video Streaming</p></div></div>
            </div>
       </div>
    );
}

export default WhatsInForYou;