import React,{useState} from 'react';
import vect1 from '../media/arcticons_internet-speed-meter-lite.png';
import vect2 from '../media/carbon_manage-protection.png';
import vect3 from '../media/Vector0.png';
import vect4 from '../media/Vector1.png';
import vect5 from '../media/arcticonWhite.png';
import vect6 from '../media/carbonWhite.png';
import vect7 from '../media/fluentWhite.png';
import vect8 from '../media/cctvWhite.png';
import {motion} from 'framer-motion';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

const customStyles={
    content:{
        background:'#FFF',
        borderRadius:"20px",
        position:'fixed',
        top:'20vh',
        left:'5vw',
        right:'5vw',
        bottom:'10vh',
        color:'#000',
        zIndex:'200',
        display:'flex',
        flexDirection:'column',
        lineHeight:'25px',
      transform:'translate(-50%.-50%)'
    },
  }

function Plans(pro1s){
    const showBusiness=()=>{
        document.querySelector('.plans1').style.display='flex';
        document.querySelector('.plans').style.display="none";
    }
    const showHome=()=>{
       document.querySelector('.plans1').style.display='none';
        document.querySelector('.plans').style.display="flex";
    }
    //modal1
    const [modalIsOpen1,setIsOpen1]=useState(false);
    const openModal1=()=>{
        setIsOpen1(true)
    }
    const closeModal1=()=>{
        setIsOpen1(false)
    }
    //modal2
    const [modalIsOpen2,setIsOpen2]=useState(false);
    const openModal2=()=>{
        setIsOpen2(true)
    }
    const closeModal2=()=>{
        setIsOpen2(false)
    }
    //modal3
    const [modalIsOpen3,setIsOpen3]=useState(false);
    const openModal3=()=>{
        setIsOpen3(true)
    }
    const closeModal3=()=>{
        setIsOpen3(false)
    }
    //modal4
    const [modalIsOpen4,setIsOpen4]=useState(false);
    const openModal4=()=>{
        setIsOpen4(true)
    }
    const closeModal4=()=>{
        setIsOpen4(false)
    }
    //modal5
    const [modalIsOpen5,setIsOpen5]=useState(false);
    const openModal5=()=>{
        setIsOpen5(true)
    }
    const closeModal5=()=>{
        setIsOpen5(false)
    }
    //modal6
    const [modalIsOpen6,setIsOpen6]=useState(false);
    const openModal6=()=>{
        setIsOpen6(true)
    }
    const closeModal6=()=>{
        setIsOpen6(false)
    }
    //scroll to contact form
    const scrollToContact=()=>{
        setIsOpen1(null)
        setIsOpen2(null)
        setIsOpen3(null)
        setIsOpen4(null)
        setIsOpen5(null)
        setIsOpen6(null)
        setTimeout(()=>{
            document.querySelector('.contact-us').scrollIntoView();
        },300)
    }
    return (
        <>
        {/*plans modals*/} 
        <Modal
             isOpen={modalIsOpen1}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal1} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
           <div className='modal'>
                <h2>Review and Checkout</h2><br/>
                <div className='head'>
                    <p>Bronze Plan</p>
                    <p>6mbps</p>
                </div>
                <small>Get affordable internet with fast download speeds perfect for streaming your favorite shows and browsing the web with ease.</small>
                <div className='product'>
                    <div className='table-header'>
                        <p>Product</p>
                        <p>Price</p>
                    </div>
                    <div className='items'>
                        <p>6mbps GSL Bronze Plan</p>
                        <p>ksh 2500</p>
                    </div>
                    <div className='items'>
                        <p>Router</p>
                        <p>ksh 3500</p>
                    </div>
                    <div className='items'>
                        <p>Total</p>
                        <p>ksh 6000</p>
                    </div>
                    <div className='items'>
                        <p></p>
                        <button onClick={scrollToContact}>ORDER NOW</button>
                    </div>
                </div>
           </div>
        </Modal>

        <Modal
             isOpen={modalIsOpen2}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal2} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
            <div className='modal'>
                <h2>Review and Checkout</h2><br/>
                <div className='head'>
                    <p>Silver Plan</p>
                    <p>12mbps</p>
                </div>
                <small>Upgrade to faster speeds and get unlimited data usage, perfect for families and heavy internet users who need reliable connectivity for work, entertainment and more.</small>
                <div className='product'>
                    <div className='table-header'>
                        <p>Product</p>
                        <p>Price</p>
                    </div>
                    <div className='items'>
                        <p>12mbps GSL Bronze Plan</p>
                        <p>ksh 3000</p>
                    </div>
                    <div className='items'>
                        <p>Router</p>
                        <p>ksh 3500</p>
                    </div>
                    <div className='items'>
                        <p>Total</p>
                        <p>ksh 6500</p>
                    </div>
                    <div className='items'>
                        <p></p>
                        <button onClick={scrollToContact}>ORDER NOW</button>
                    </div>
                </div>
           </div>
        </Modal>

        <Modal
             isOpen={modalIsOpen3}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal3} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
            <div className='modal'>
                <h2>Review and Checkout</h2><br/>
                <div className='head'>
                    <p>Gold Plan</p>
                    <p>20mbps</p>
                </div>
                <small>Take your internet to the next level with lightning-fast speeds and exclusive perks like priority customer service, advanced security features, and more for the ultimate online experience.</small>
                <div className='product'>
                    <div className='table-header'>
                        <p>Product</p>
                        <p>Price</p>
                    </div>
                    <div className='items'>
                        <p>6mbps GSL Bronze Plan</p>
                        <p>ksh 10999</p>
                    </div>
                    <div className='items'>
                        <p>Router</p>
                        <p>ksh 3500</p>
                    </div>
                    <div className='items'>
                        <p>Total</p>
                        <p>ksh 14499</p>
                    </div>
                    <div className='items'>
                        <p></p>
                        <button onClick={scrollToContact}>ORDER NOW</button>
                    </div>
                </div>
           </div>
        </Modal>

        {/** Business modals */}
        <Modal
             isOpen={modalIsOpen4}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal4} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
            <div className='modal'>
                <h2>Review and Checkout</h2><br/>
                <div className='head'>
                    <p>Bronze Plan</p>
                    <p>6mbps</p>
                </div>
                <small>Get affordable internet with fast download speeds perfect for streaming your favorite shows and browsing the web with ease.</small>
                <div className='product'>
                    <div className='table-header'>
                        <p>Product</p>
                        <p>Price</p>
                    </div>
                    <div className='items'>
                        <p>6mbps GSL Bronze Plan</p>
                        <p>ksh 2500</p>
                    </div>
                    <div className='items'>
                        <p>Router</p>
                        <p>ksh 3500</p>
                    </div>
                    <div className='items'>
                        <p>Total</p>
                        <p>ksh 6000</p>
                    </div>
                    <div className='items'>
                        <p></p>
                        <button onClick={scrollToContact}>ORDER NOW</button>
                    </div>
                </div>
           </div>
        </Modal>
        <Modal
             isOpen={modalIsOpen5}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal5} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
            <div className='modal'>
                <h2>Review and Checkout</h2><br/>
                <div className='head'>
                    <p>Silver Plan</p>
                    <p>12mbps</p>
                </div>
                <small>Upgrade to faster speeds and get unlimited data usage, perfect for families and heavy internet users who need reliable connectivity for work, entertainment and more.</small>
                <div className='product'>
                    <div className='table-header'>
                        <p>Product</p>
                        <p>Price</p>
                    </div>
                    <div className='items'>
                        <p>12mbps GSL Bronze Plan</p>
                        <p>ksh 3000</p>
                    </div>
                    <div className='items'>
                        <p>Router</p>
                        <p>ksh 3500</p>
                    </div>
                    <div className='items'>
                        <p>Total</p>
                        <p>ksh 6000</p>
                    </div>
                    <div className='items'>
                        <p></p>
                        <button onClick={scrollToContact}>ORDER NOW</button>
                    </div>
                </div>
           </div>
        </Modal>
        <Modal
             isOpen={modalIsOpen6}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal6} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
            <div className='modal'>
                <h2>Review and Checkout</h2><br/>
                <div className='head'>
                    <p>Gold Plan</p>
                    <p>20mbps</p>
                </div>
                <small>Take your internet to the next level with lightning-fast speeds and exclusive perks like priority customer service, advanced security features, and more for the ultimate online experience.</small>
                <div className='product'>
                    <div className='table-header'>
                        <p>Product</p>
                        <p>Price</p>
                    </div>
                    <div className='items'>
                        <p>6mbps GSL Bronze Plan</p>
                        <p>ksh 10999</p>
                    </div>
                    <div className='items'>
                        <p>Router</p>
                        <p>ksh 3500</p>
                    </div>
                    <div className='items'>
                        <p>Total</p>
                        <p>ksh 14499</p>
                    </div>
                    <div className='items'>
                        <p></p>
                        <button onClick={scrollToContact}>ORDER NOW</button>
                    </div>
                </div>
           </div>
        </Modal>

        {/* Home */}
            <motion.div 
                className='plans'
                initial={{opacity:0}}
                animate={{opacity:1}} 
                transition={{duration:2}}
            >
                <h1>Internet Plans</h1>
                <div className='plans-button'>
                    <button className='btn1' >Home</button>
                    <button className='btn2' onClick={showBusiness}>Business</button>
                </div>
                <div className='grid-plans'>
                    <div className='grid-item-plan1'>
                        <h2>BRONZE</h2>
                        <p>Perfect to get started</p>
                        <h1>6mbps</h1>
                        <div className='content'>
                            <ul>
                                <li><img src={vect1} alt='...'/>  Unlimited internet</li>
                                <li><img src={vect2} alt='...'/>  Customer data protection</li>
                                <li><img src={vect3} alt='...'/>  HD video streaming and VoIP calls</li>
                                <li><img src={vect4} alt='...'/>  HD surveillance streaming</li>
                            </ul>
                        </div>
                        <button className='btn1' onClick={openModal1}>ORDER NOW</button>
                    </div>

                    <div className='grid-item-plan2'>
                        <h2>SILVER</h2>
                        <p>Perfect for domestic use</p>
                        <h1>12mbps</h1>
                        <div className='content'>
                            <ul>
                                <li><img src={vect5} alt='...'/>  Unlimited internet</li>
                                <li><img src={vect6} alt='...'/>  Customer data protection</li>
                                <li><img src={vect7} alt='...'/>  HD video streaming and VoIP calls</li>
                                <li><img src={vect8} alt='...'/>  HD surveillance streaming</li>
                            </ul>
                        </div>
                        <button className='btn2' onClick={openModal2}>ORDER NOW</button>
                    </div>

                    <div className='grid-item-plan1'>
                        <h2>GOLD</h2>
                        <p>Awesome for remote work</p>
                        <h1>20mbps</h1>
                        <div className='content'>
                            <ul>
                                <li><img src={vect1} alt='...'/>  Unlimited internet</li>
                                <li><img src={vect2} alt='...'/>  Customer data protection</li>
                                <li><img src={vect3} alt='...'/>  HD video streaming and VoIP calls</li>
                                <li><img src={vect4} alt='...'/>  HD surveillance streaming</li>
                            </ul>
                        </div>
                        <button className='btn1' onClick={openModal3}>ORDER NOW</button>
                    </div>
                </div>
            </motion.div>

            {/* Business */}
            <div className='plans1' >
                <h1>Internet Plans</h1>
                <div className='plans1-button'>
                    <button className='btn2' onClick={showHome}>Home</button>
                    <button className='btn1' onClick={showBusiness}>Business</button>
                </div>
                <div className='grid-plans1'>
                    <div className='grid-item-plan1'>
                        <h2>BRONZE</h2>
                        <p>Perfect to get started</p>
                        <h1>6mbps</h1>
                        <div className='content'>
                            <ul>
                                <li><img src={vect1} alt='...'/>  Unlimited internet</li>
                                <li><img src={vect2} alt='...'/>  Customer data protection</li>
                                <li><img src={vect3} alt='...'/>  HD video streaming and VoIP calls</li>
                                <li><img src={vect4} alt='...'/>  HD surveillance streaming</li>
                            </ul>
                        </div>
                        <button className='btn1' onClick={openModal4}>ORDER NOW</button>
                    </div>

                    <div className='grid-item-plan2'>
                        <h2>SILVER</h2>
                        <p>Perfect for domestic use</p>
                        <h1>15mbps</h1>
                        <div className='content'>
                            <ul>
                                <li><img src={vect5} alt='...'/>  Unlimited internet</li>
                                <li><img src={vect6} alt='...'/>  Customer data protection</li>
                                <li><img src={vect7} alt='...'/>  HD video streaming and VoIP calls</li>
                                <li><img src={vect8} alt='...'/>  HD surveillance streaming</li>
                            </ul>
                        </div>
                        <button className='btn2' onClick={openModal5}>ORDER NOW</button>
                    </div>

                    <div className='grid-item-plan1'>
                        <h2>GOLD</h2>
                        <p>Awesome for remote work</p>
                        <h1>20mbps</h1>
                        <div className='content'>
                            <ul>
                                <li><img src={vect1} alt='...'/>  Unlimited internet</li>
                                <li><img src={vect2} alt='...'/>  Customer data protection</li>
                                <li><img src={vect3} alt='...'/>  HD video streaming and VoIP calls</li>
                                <li><img src={vect4} alt='...'/>  HD surveillance streaming</li>
                            </ul>
                        </div>
                        <button className='btn1' onClick={openModal6}>ORDER NOW</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Plans;