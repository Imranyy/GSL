import React from 'react';
import Slider from 'react-slick';
function Service(props) {
    const settings={
        Infinite:false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    }
    return (
        <>
            <Slider className='service' {...settings}>
                <div className='grid-item-service1'>
                    <div className='content'>
                        <h2>Internet Services</h2>
                        <p>We make it possible for customers to access the internet while also providing additional services such as email, domain registration and web hosting.</p>
                    </div>
                </div>
                <div className='grid-item-service2'>
                    <div className='content'>
                        <h2>CCTV Sales and Installation</h2>
                        <p>We make it possible for customers to access the internet while also providing additional services such as email, domain registration and web hosting.</p>
                    </div>
                </div>
                <div className='grid-item-service3'>
                    <div className='content'>
                        <h2>Electric Fencing and Alarm System</h2>
                        <p>We make it possible for customers to access the internet while also providing additional services such as email, domain registration and web hosting.</p>
                    </div>
                </div>
            </Slider>
        </>
    );
}

export default Service ;