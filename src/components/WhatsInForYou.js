import React from 'react';
import {motion} from 'framer-motion'
function WhatsInForYou(props) {
    const show1=()=>{
        document.querySelector('.sec-text').style.display='block';
        document.querySelector('.text').style.display='none';
        showDont2()
        showDont3()
        showDont4()
        showDont5()
        showDont6()
        showDont7()
        showDont8()
        showDont9()
        showDont10()
        showDont11()
    }
    const show2=()=>{
        document.querySelector('.sec-text1').style.display='block';
        document.querySelector('.text1').style.display='none';
        showDont1()
        showDont3()
        showDont4()
        showDont5()
        showDont6()
        showDont7()
        showDont8()
        showDont9()
        showDont10()
        showDont11()
    }
    const show3=()=>{
        document.querySelector('.sec-text2').style.display='block';
        document.querySelector('.text2').style.display='none';
        showDont1()
        showDont2()
        showDont4()
        showDont5()
        showDont6()
        showDont7()
        showDont8()
        showDont9()
        showDont10()
        showDont11()
    }
    const show4=()=>{
        document.querySelector('.sec-text3').style.display='block';
        document.querySelector('.text3').style.display='none';
        showDont1()
        showDont2()
        showDont3()
        showDont5()
        showDont6()
        showDont7()
        showDont8()
        showDont9()
        showDont10()
        showDont11()
    }
    const show5=()=>{
        document.querySelector('.sec-text4').style.display='block';
        document.querySelector('.text4').style.display='none';
        showDont1()
        showDont2()
        showDont3()
        showDont4()
        showDont6()
        showDont7()
        showDont8()
        showDont9()
        showDont10()
        showDont11()
    }
    const show6=()=>{
        document.querySelector('.sec-text5').style.display='block';
        document.querySelector('.text5').style.display='none';
        showDont1()
        showDont2()
        showDont3()
        showDont4()
        showDont5()
        showDont7()
        showDont8()
        showDont9()
        showDont10()
        showDont11()
    }
    const show7=()=>{
        document.querySelector('.sec-text6').style.display='block';
        document.querySelector('.text6').style.display='none';
        showDont1()
        showDont2()
        showDont3()
        showDont4()
        showDont5()
        showDont6()
        showDont8()
        showDont9()
        showDont10()
        showDont11()
    }
    const show8=()=>{
        document.querySelector('.sec-text7').style.display='block';
        document.querySelector('.text7').style.display='none';
        showDont1()
        showDont2()
        showDont3()
        showDont4()
        showDont5()
        showDont6()
        showDont7()
        showDont9()
        showDont10()
        showDont11()
    }
    const show9=()=>{
        document.querySelector('.sec-text8').style.display='block';
        document.querySelector('.text8').style.display='none';
        showDont1()
        showDont2()
        showDont3()
        showDont4()
        showDont5()
        showDont6()
        showDont7()
        showDont8()
        showDont10()
        showDont11()
    }
    const show10=()=>{
        document.querySelector('.sec-text9').style.display='block';
        document.querySelector('.text9').style.display='none';
        showDont1()
        showDont2()
        showDont3()
        showDont4()
        showDont5()
        showDont6()
        showDont7()
        showDont8()
        showDont9()
        showDont11()
    }
    const show11=()=>{
        document.querySelector('.sec-text10').style.display='block';
        document.querySelector('.text10').style.display='none';
        showDont1()
        showDont2()
        showDont3()
        showDont4()
        showDont5()
        showDont6()
        showDont7()
        showDont8()
        showDont9()
        showDont10()
    }
    //dont show
    const showDont1=()=>{
        document.querySelector('.sec-text').style.display='none';
        document.querySelector('.text').style.display='block';
    }
    const showDont2=()=>{
        document.querySelector('.sec-text1').style.display='none';
        document.querySelector('.text1').style.display='block';
    }
    const showDont3=()=>{
        document.querySelector('.sec-text2').style.display='none';
        document.querySelector('.text2').style.display='block';
    }
    const showDont4=()=>{
        document.querySelector('.sec-text3').style.display='none';
        document.querySelector('.text3').style.display='block';
    }
    const showDont5=()=>{
        document.querySelector('.sec-text4').style.display='none';
        document.querySelector('.text4').style.display='block';
    }
    const showDont6=()=>{
        document.querySelector('.sec-text5').style.display='none';
        document.querySelector('.text5').style.display='block';
    }
    const showDont7=()=>{
        document.querySelector('.sec-text6').style.display='none';
        document.querySelector('.text6').style.display='block';
    }
    const showDont8=()=>{
        document.querySelector('.sec-text7').style.display='none';
        document.querySelector('.text7').style.display='block';
    }
    const showDont9=()=>{
        document.querySelector('.sec-text8').style.display='none';
        document.querySelector('.text8').style.display='block';
    }
    const showDont10=()=>{
        document.querySelector('.sec-text9').style.display='none';
        document.querySelector('.text9').style.display='block';
    }
    const showDont11=()=>{
        document.querySelector('.sec-text10').style.display='none';
        document.querySelector('.text10').style.display='block';
    }
   
    
    return (
       <div id='solutions'>
        <div className='whats-in'>
            <div className='grid-whats'>
                <div className='grid-item-whats1' onClick={show1} onMouseOver={show1} onMouseLeave={showDont1} onDoubleClick={showDont1}>
                    <motion.p className='text' initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true}}>
                        K12 Schools
                    </motion.p>
                    <div className='sec-text' style={{display:'none', margin:'20px 20px',textAlign:'left',color:'white'}}>
                        <h3>K12 Schools</h3><br/>
                        A security system for schools that improves safety and efficiency with hardware and software components, including advanced AI technology to prevent safety hazards in advance. Key features are explained.
                    </div>
                </div>
                
                <div className='grid-item-whats2' onClick={show2} onMouseOver={show2} onMouseLeave={showDont2} onDoubleClick={showDont2}>
                    <motion.p  className='text1' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                    Smart Shops
                    </motion.p>
                    <div className='sec-text1' style={{display:'none', margin:'20px 20px',textAlign:'left',color:'white'}}>
                        <h2>Smart Shops</h2><br/>
                        Smart shops offer personalized shopping experiences using data analytics and improve operational efficiency by reducing manual labor. This can result in cost savings for the retailer, leading to better prices or higher quality products for customers.
                    </div>
                </div>
                <div className='grid-item-whats3' onClick={show3} onMouseOver={show3} onMouseLeave={showDont3} onDoubleClick={showDont3}>
                    <motion.p  className='text2' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                    Smart Restaurant and Bar
                    </motion.p>
                    <div className='sec-text2' style={{display:'none', margin:'20px 20px',textAlign:'left',color:'white'}}>
                        <h2>Smart Restaurant and Bar</h2><br/>
                        Smart restaurants and bars utilize advanced technology to improve both customer experience and operational efficiency. This can be achieved by using digital menus and tableside ordering and payment methods to reduce wait times and increase accuracy.
                    </div>
                </div>
                <div className='grid-item-whats4' onClick={show4} onMouseOver={show4} onMouseLeave={showDont4} onDoubleClick={showDont4}>
                    <motion.p  className='text3' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                    Gas Station
                    </motion.p>
                    <div className='sec-text3' style={{display:'none', margin:'10px 20px',textAlign:'left',color:'white'}}>
                        <h2>Gas Station</h2><br/>
                        It is essential to prioritize safety by installing a reliable alarm system that can detect fire and smoke. Even in the event of a fire, installed cameras can retrieve video footage that may not have been completely destroyed. We offer advanced technology, such as an intelligent monitoring system, that can monitor public safety and identify potential threats.
                    </div>
                </div>
                <div className='grid-item-whats5' onClick={show5} onMouseOver={show5} onMouseLeave={showDont5} onDoubleClick={showDont5}>
                    <motion.p  className='text4' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                    Manufactory
                    </motion.p>
                    <div className='sec-text4' style={{display:'none', margin:'10px 20px',textAlign:'left',color:'white'}}>
                        <h2>Manufactory</h2><br/>
                        Our Manufactory Security Solution provides a comprehensive approach to enhancing safety and efficiency in manufacturing. It includes video surveillance, alarm systems, perimeter protection, access control, fire detection, and a management system to prevent accidents and ensure a secure environment.
                    </div>
                </div>
                <div className='grid-item-whats6' onClick={show6} onMouseOver={show6} onMouseLeave={showDont6} onDoubleClick={showDont6}>
                    <motion.p  className='text5' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                    Parking Lot
                    </motion.p>
                    <div className='sec-text5' style={{display:'none', margin:'10px 20px',textAlign:'left',color:'white'}}>
                        <h2>Parking Lot</h2><br/>
                        Smart parking lots optimize parking space usage and enhance the parking experience using advanced technology. They use license plate recognition technology for security and parking guidance system technology to guide drivers to available parking spaces. Our Smart parking solution offers a convenient and efficient parking experience for drivers.
                    </div>
                </div>
                <div className='grid-item-whats7' onClick={show7} onMouseOver={show7} onMouseLeave={showDont7} onDoubleClick={showDont7}>
                    <motion.p  className='text6' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                    Smart Villa
                    </motion.p>
                    <div className='sec-text6' style={{display:'none', margin:'10px 20px',textAlign:'left',color:'white'}}>
                        <h2>Smart Villa</h2><br/>
                        A smart villa utilizes advanced technology to provide its residents with a comfortable, convenient, and secure living environment. With the increasing demand for high-quality living standards, our Villa solution offers intelligent alarm and video intercom functions to enhance safety and convenience for its occupants.
                    </div>
                </div>
                <div className='grid-item-whats8' onClick={show8} onMouseOver={show8} onMouseLeave={showDont8} onDoubleClick={showDont8}>
                    <motion.p  className='text7' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                    Smart Apartment
                    </motion.p>
                    <div className='sec-text7' style={{display:'none', margin:'10px 20px',textAlign:'left',color:'white'}}>
                        <h2>Smart Apartment</h2><br/>
                        Our Smart Apartment Solution uses advanced technology such as smart locks, video surveillance, intrusion detection, emergency alerts, intercom systems, and data analysis to enhance security measures and provide residents with a more secure and convenient living experience.
                    </div>
                </div>
                <div className='grid-item-whats9' onClick={show9} onMouseOver={show9} onMouseLeave={showDont9} onDoubleClick={showDont9}>
                    <motion.p  className='text8' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                    Banking and Finance
                    </motion.p>
                    <div className='sec-text8' style={{display:'none', margin:'10px 20px',textAlign:'left',color:'white'}}>
                        <h2>Banking and Finance</h2>
                        The smart banking and finance approach uses advanced technology to improve the customer experience and make financial management more efficient and secure. Our solution provides sophisticated security measures including 4K UHD cameras, transaction overlay, people counting, and remote authorization, to integrate security with business processes, improve management efficiency and ensure data safety.
                    </div>
                </div>
                <div className='grid-item-whats10' onClick={show10} onMouseOver={show10} onMouseLeave={showDont10} onDoubleClick={showDont10}>
                    <motion.p  className='text9' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                    Hospital and Healthcare
                    </motion.p>
                    <div className='sec-text9' style={{display:'none', margin:'10px 20px',textAlign:'left',color:'white'}}>
                        <h2>Hospital and Healthcare</h2><br/>
                        Our hospital and healthcare solution employs digital technology, IoT devices, and analytics to improve the management of healthcare facilities, enhance patient care quality and improve security. It includes patient management systems, video surveillance, access control, IoT devices, analytics, and smart parking solutions.
                    </div>
                </div>
                <div className='grid-item-whats11' onClick={show11} onMouseOver={show11} onMouseLeave={showDont11} onDoubleClick={showDont11}>
                    <motion.p  className='text10' initial={{scale:1}} whileHover={{scale:0}} transition={{duration:0.5}} viewport={{once:true}}>
                    Perimeter protection
                    </motion.p>
                    <div className='sec-text10' style={{display:'none', margin:'10px 20px',textAlign:'left',color:'white'}}>
                        <h2>Perimeter protection</h2><br/>
                        Perimeter protection systems use physical barriers, surveillance technologies, and access control measures to detect and prevent unauthorized access, and may include alarms and notifications to alert security personnel. These technologies are combined to ensure a secure perimeter and prevent security breaches.
                    </div>
                </div>
            </div>
       </div>
       </div>
    );
}

export default WhatsInForYou;