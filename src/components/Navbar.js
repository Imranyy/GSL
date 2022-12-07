import React from 'react';

function Navbar(props) {
    const plans=()=>{
        document.querySelector('.plans1').style.display='none';
        document.querySelector('.plans').style.display="block";
        document.querySelector('.plans').scrollIntoView();
        closeMenu()
    }
    const services=()=>{
        document.querySelector('.service').scrollIntoView();
        closeMenu()
    }
    const business=()=>{
        document.querySelector('.plans1').style.display='block';
        document.querySelector('.plans').style.display="none";
        document.querySelector('.plans1').scrollIntoView();
        closeMenu()
    }
    const contact=()=>{
        document.querySelector('.contact-us').scrollIntoView();
        closeMenu()
    }
    const showMenu=()=>{
        document.querySelector('.nav-menu').style.display="block";
    }
    const closeMenu=()=>{
        document.querySelector('.nav-menu').style.display="none";
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
                    <li className='show-menu' onClick={showMenu}>Menu</li>
                </ul>
            </nav>  
            <div className='nav-menu'>
                <div className='close-menu' onClick={closeMenu}>Close</div>
                <ul>
                    <li onClick={plans}>Plans</li>
                    <li onClick={services}>Services</li>
                    <li onClick={business}>Business</li>
                    <li onClick={contact}>call +254793486784</li>
                </ul>
            </div> 
        </>
    );
}

export default Navbar;