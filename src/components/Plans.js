import React from 'react';
import vect1 from '../media/arcticons_internet-speed-meter-lite.png';
import vect2 from '../media/carbon_manage-protection.png';
import vect3 from '../media/Vector0.png';
import vect4 from '../media/Vector1.png';
import vect5 from '../media/arcticonWhite.png';
import vect6 from '../media/carbonWhite.png';
import vect7 from '../media/fluentWhite.png';
import vect8 from '../media/cctvWhite.png';
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
    return (
        <>
        {/* Home */}
            <div className='plans' >
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
                        <button className='btn1'>KSH 2500/mo</button>
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
                        <button className='btn2'>KSH 3000/mo</button>
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
                        <button className='btn1'>KSH 10999/mo</button>
                    </div>
                </div>
            </div>
            {/* Business */}
            <div className='plans1' style={{display:'none'}}>
                <h1>Internet Plans</h1>
                <div className='plans1-button'>
                    <button className='btn2' onClick={showHome}>Home</button>
                    <button className='btn1'>Business</button>
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
                        <button className='btn1'>KSH 3000/mo</button>
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
                        <button className='btn2'>KSH 5499/mo</button>
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
                        <button className='btn1'>KSH 15499/mo</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Plans;