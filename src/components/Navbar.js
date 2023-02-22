import React from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar(props) {
    const plans=()=>{
        document.querySelector('.plans1').style.display='none';
        document.querySelector('.plans').style.display="flex";
        document.querySelector('.plans').scrollIntoView();
        document.querySelector('.move-up-img').style.display='block';
        document.querySelector('.move-down-img').style.display='none';
        closeMenu()
    }
    const services=()=>{
        document.querySelector('.service').scrollIntoView();
        closeMenu()
    }
    const solutions=()=>{
        document.querySelector('#solutions').scrollIntoView();
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
                    <li onClick={solutions}>Solutions</li>
                    <li><a href='tel:0799507509' target="_blank" rel='noreferrer'>call +254799507509</a></li>
                    <li className='show-menu' onClick={showMenu}><AiOutlineMenu size={30}/></li>
                </ul>
            </nav>  
            <div className='nav-menu-bg' onClick={closeMenu}>
                <div className='nav-menu'>
                    <AiOutlineClose style={{color:'black', position:'absolute',top:'20px',right:'20px',cursor:'pointer'}} size={20}/>
                    <ul>
                        <li onClick={closeMenu}>Home</li>
                        <li onClick={plans}>Plans</li>
                        <li onClick={services}>Services</li>
                        <li onClick={solutions}>Solutions</li>
                        <li><a href='tel:0799507509' target="_blank" rel='noreferrer'>call +254799507509</a></li>
                    </ul>
                </div> 
            </div>
        </>
    );
}

export default Navbar;