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
                    <div className='sec-text' style={{display:'none', margin:'130px 20px',textAlign:'left',color:'white'}}>
                        <h3>Unlimited Internet and VoIP calls</h3><br/>
                        We have the equipment and the telecommunication line access required to have a point of presence on the internet for the geographic area served.
                    </div>
                </div>
                <div className='grid-item-whats2' onClick={show2} onMouseOver={show2}>
                    <motion.p  className='text1' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                        Customer Data Protection
                    </motion.p>
                    <div className='sec-text1' style={{display:'none', margin:'130px 20px',textAlign:'left',color:'white'}}>
                        <h2>Customer Data Protection</h2><br/>
                       We have the equipment and the telecommunication line access required to have a point of presence on the internet for the geographic area served.
                    </div>
                </div>
                <div className='grid-item-whats3' onClick={show3} onMouseOver={show3}>
                    <motion.p  className='text2' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                        HD Surveillance Streaming
                    </motion.p>
                    <div className='sec-text2' style={{display:'none', margin:'130px 20px',textAlign:'left',color:'white'}}>
                        <h2>HD Surveillance Streaming</h2><br/>
                        We have the equipment and the telecommunication line access required to have a point of presence on the internet for the geographic area served.
                    </div>
                </div>
                <div className='grid-item-whats4' onClick={show4} onMouseOver={show4}>
                    <motion.p  className='text3' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                        HD Video Streaming
                    </motion.p>
                    <div className='sec-text3' style={{display:'none', margin:'130px 20px',textAlign:'left',color:'white'}}>
                        <h2>HD Video Streaming</h2><br/>
                        We have the equipment and the telecommunication line access required to have a point of presence on the internet for the geographic area served.
                    </div>
                </div>
            </div>
       </div>
       </>
    );
}

export default WhatsInForYou;