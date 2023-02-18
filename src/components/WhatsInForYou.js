import React from 'react';
import {motion} from 'framer-motion'
function WhatsInForYou(props) {
    const show1=()=>{
        document.querySelector('.sec-text').style.display='block';
        document.querySelector('.text').style.display='none';
    }
    const show2=()=>{
        document.querySelector('.sec-text1').style.display='block';
        document.querySelector('.text1').style.display='none';
    }
    const show3=()=>{
        document.querySelector('.sec-text2').style.display='block';
        document.querySelector('.text2').style.display='none';
    }
    const show4=()=>{
        document.querySelector('.sec-text3').style.display='block';
        document.querySelector('.text3').style.display='none';
    }
   
    
    return (
       <>
        <div className='whats-in'>
            <div className='grid-whats'>
                <div className='grid-item-whats1' onClick={show1} onMouseOver={show1}>
                    <motion.p className='text' initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true}}>
                    Unlimited Internet and VoIP calls
                    </motion.p>
                    <p className='sec-text' style={{display:'none'}}>
                        nice
                    </p>
                </div>
                <div className='grid-item-whats2' onClick={show2} onMouseOver={show2}>
                    <motion.p  className='text1' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                        Customer Data Protection
                    </motion.p>
                    <p className='sec-text1' style={{display:'none'}}>
                       Woow
                    </p>
                </div>
                <div className='grid-item-whats3' onClick={show3} onMouseOver={show3}>
                    <motion.p  className='text2' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                        HD Surveillance Streaming
                    </motion.p>
                    <p className='sec-text2' style={{display:'none'}}>
                        People
                    </p>
                </div>
                <div className='grid-item-whats4' onClick={show4} onMouseOver={show4}>
                    <motion.p  className='text3' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                        HD Video Streaming
                    </motion.p>
                    <p className='sec-text3' style={{display:'none'}}>
                        Hello friend
                    </p>
                </div>
            </div>
       </div>
       </>
    );
}

export default WhatsInForYou;