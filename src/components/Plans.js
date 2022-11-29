import React from 'react';

function Plans(props) {
    return (
        <>
            <div className='plans'>
                <h1>Internet Plans</h1>
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
                        <button>KSH 2500/mo</button>
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
                        <button>KSH 3000/mo</button>
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
                        <button>KSH 10999/mo</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Plans;