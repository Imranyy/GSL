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
      background:'#183060',
        position:'fixed',
        top:'20vh',
        left:'10vw',
        right:'10vw',
        bottom:'15vh',
        color:'white',
        zIndex:'200',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifuContent:'center',
        lineHeight:'25px',
      transform:'translate(-50%.-50%)'
    },
  }

function Plans(pro1s){
    const showBusiness=()=>{
        document.querySelector('.plans1').style.display='block';
        document.querySelector('.plans').style.display="none";
        document.querySelector('.move-up-img').style.display='none';
    }
    const showHome=()=>{
       document.querySelector('.plans1').style.display='none';
        document.querySelector('.plans').style.display="block";
        document.querySelector('.move-up-img').style.display='block';
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
    return (
        <>
        {/*plans modals*/} 
        <Modal
             isOpen={modalIsOpen1}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal1} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
            <h2>BRONZE</h2><br/>
            <p>Perfect to get started</p>
            <h3>6mbps</h3>
        </Modal>

        <Modal
             isOpen={modalIsOpen2}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal2} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
            <h2>SILVER</h2><br/>
            <p>Perfect for domestic use</p>
            <h3>12mbps</h3>
        </Modal>

        <Modal
             isOpen={modalIsOpen3}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal3} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
            <h2>GOLD</h2><br/>
            <p>Awesome for remote work</p>
            <h3>20mbps</h3>
        </Modal>

        {/** Business modals */}
        <Modal
             isOpen={modalIsOpen4}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal4} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
            <h2>BRONZE</h2><br/>
            <p>Perfect to get started</p>
            <h3>6mbps</h3>
        </Modal>
        <Modal
             isOpen={modalIsOpen5}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal5} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
            <h2>SILVER</h2><br/>
            <p>Perfect for domestic use</p>
            <h3>15mbps</h3>
        </Modal>
        <Modal
             isOpen={modalIsOpen6}
             style={customStyles}
        >
            <AiOutlineClose onClick={closeModal6} size={25} style={{position:'absolute',cursor:'pointer',top:'20px',right:'20px'}}/>
            <h2>GOLD</h2><br/>
            <p>Awesome for remote work</p>
            <h3>20mbps</h3>
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
                        <button className='btn1' onClick={openModal1}>KSH 2500/mo</button>
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
                        <button className='btn2' onClick={openModal2}>KSH 3000/mo</button>
                    </div>

                    <div className='grid-item-plan3'>
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
                        <button className='btn1' onClick={openModal3}>KSH 10999/mo</button>
                    </div>
                </div>
            </motion.div>

            {/* Business */}
            <div className='plans1' style={{display:'none'}}>
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
                        <button className='btn1' onClick={openModal4}>KSH 3000/mo</button>
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
                        <button className='btn2' onClick={openModal5}>KSH 5499/mo</button>
                    </div>

                    <div className='grid-item-plan3'>
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
                        <button className='btn1' onClick={openModal6}>KSH 15499/mo</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Plans;