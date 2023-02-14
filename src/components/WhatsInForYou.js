import React from 'react';
import {motion} from 'framer-motion'
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
                <div className='grid-item-whats1' onClick={show1}><motion.p initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true}}>Unlimited Internet and VoIP calls</motion.p></div>
                <div className='grid-item-whats2' onClick={show2}><motion.p initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true}}>Customer Data Protection</motion.p></div>
                <div className='grid-item-whats3' onClick={show3}><motion.p initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true}}>HD Surveillance Streaming</motion.p></div>
                <div className='grid-item-whats4' onClick={show4}><motion.p initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true}}>HD Video Streaming</motion.p></div>
            </div>
       </div>
       </>
    );
}

export default WhatsInForYou;