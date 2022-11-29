import React from 'react';

function Plans(props) {
    const showBusiness=()=>{
        document.querySelector('.plans1').style.display='block';
        document.querySelector('.plans').style.display="none";
    }
    const showHome=()=>{
        document.querySelector('.plans1').style.display='none';
        document.querySelector('.plans').style.display="block";
    }
    return (
        <>
        {/* Home */}
            <div className='plans' style={{display:'none'}}>
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
                                <li>Unlimited internet</li>
                                <li>Customer data protection</li>
                                <li>HD video streaming and VoIP calls</li>
                                <li>HD surveillance streaming</li>
                            </ul>
                        </div>
                        <button className='btn1'>KSH 2500/mo</button>
                    </div>

                    <div className='grid-item-plan2'>
                        <h2>BRONZE</h2>
                        <p>Perfect to get started</p>
                        <h1>6mbps</h1>
                        <div className='content'>
                            <ul>
                                <li>Unlimited internet</li>
                                <li>Customer data protection</li>
                                <li>HD video streaming and VoIP calls</li>
                                <li>HD surveillance streaming</li>
                            </ul>
                        </div>
                        <button className='btn2'>KSH 3000/mo</button>
                    </div>

                    <div className='grid-item-plan3'>
                        <h2>BRONZE</h2>
                        <p>Perfect to get started</p>
                        <h1>6mbps</h1>
                        <div className='content'>
                            <ul>
                                <li>Unlimited internet</li>
                                <li>Customer data protection</li>
                                <li>HD video streaming and VoIP calls</li>
                                <li>HD surveillance streaming</li>
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
                                <li>Unlimited internet</li>
                                <li>Customer data protection</li>
                                <li>HD video streaming and VoIP calls</li>
                                <li>HD surveillance streaming</li>
                            </ul>
                        </div>
                        <button className='btn1'>KSH 2500/mo</button>
                    </div>

                    <div className='grid-item-plan2'>
                        <h2>BRONZE</h2>
                        <p>Perfect to get started</p>
                        <h1>6mbps</h1>
                        <div className='content'>
                            <ul>
                                <li>Unlimited internet</li>
                                <li>Customer data protection</li>
                                <li>HD video streaming and VoIP calls</li>
                                <li>HD surveillance streaming</li>
                            </ul>
                        </div>
                        <button className='btn2'>KSH 3000/mo</button>
                    </div>

                    <div className='grid-item-plan3'>
                        <h2>BRONZE</h2>
                        <p>Perfect to get started</p>
                        <h1>6mbps</h1>
                        <div className='content'>
                            <ul>
                                <li>Unlimited internet</li>
                                <li>Customer data protection</li>
                                <li>HD video streaming and VoIP calls</li>
                                <li>HD surveillance streaming</li>
                            </ul>
                        </div>
                        <button className='btn1'>KSH 10999/mo</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Plans;