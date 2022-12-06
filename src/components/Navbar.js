import React from 'react';

function Navbar(props) {
    const plans=()=>{
        document.querySelector('.plans1').style.display='none';
        document.querySelector('.plans').style.display="block";
        document.querySelector('.plans').scrollIntoView();
    }
    const services=()=>{
        document.querySelector('.service').scrollIntoView();
    }
    const business=()=>{
        document.querySelector('.plans1').style.display='block';
        document.querySelector('.plans').style.display="none";
        document.querySelector('.plans1').scrollIntoView();
    }
    const contact=()=>{
        document.querySelector('.contact-us').scrollIntoView();
    }
    return (
        <>
            <nav>
                <div className='logo'></div>
                <ul>
                    <li onClick={plans}>Plans</li>
                    <li onClick={services}>Services</li>
                    <li onClick={business}>Business</li>
                    <li onClick={contact}>call +254793486784</li>
                </ul>
            </nav>   
        </>
    );
}

export default Navbar;