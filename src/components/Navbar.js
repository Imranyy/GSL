import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai'

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
                    <li><a href='tel:0793486784' target="_blank" rel='noreferrer'>call +254793486784</a></li>
                    <li className='show-menu' onClick={showMenu}><AiOutlineMenu size={30}/></li>
                </ul>
            </nav>  
            <div className='nav-menu-bg' onClick={closeMenu}>
                <div className='nav-menu'>
                    <ul>
                        <li onClick={plans}>Plans</li>
                        <li onClick={services}>Services</li>
                        <li onClick={business}>Business</li>
                        <li><a href='tel:0793486784' target="_blank" rel='noreferrer'>call +254793486784</a></li>
                    </ul>
                </div> 
            </div>
        </>
    );
}

export default Navbar;