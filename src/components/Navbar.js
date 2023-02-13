import React from 'react';

function Navbar(props) {
    const plans=()=>{
        document.querySelector('.plans1').style.display='none';
        document.querySelector('.plans').style.display="block";
        document.querySelector('.plans').scrollIntoView();
        document.querySelector('.move-up-img').style.display='block';
        document.querySelector('.move-down-img').style.display='none';
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
        document.querySelector('.move-down-img').style.display='none';
        document.querySelector('.move-up-img').style.display='none';
        closeMenu()
    }
    const contact=()=>{
        document.querySelector('.contact-us').scrollIntoView();
        closeMenu()
    }
    const showMenu=()=>{
        document.querySelector('.nav-menu-bg').style.display="block";
    }
    const closeMenu=()=>{
        document.querySelector('.nav-menu-bg').style.display="none";
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
                    <li className='show-menu' onClick={showMenu}><i className='fa fa-list'></i></li>
                </ul>
            </nav>  
            <div className='nav-menu-bg' onClick={closeMenu}>
                <div className='nav-menu'>
                    <ul>
                        <li onClick={plans}>Plans</li>
                        <li onClick={services}>Services</li>
                        <li onClick={business}>Business</li>
                        <li onClick={contact}>call +254793486784</li>
                    </ul>
                </div> 
            </div>
        </>
    );
}

export default Navbar;