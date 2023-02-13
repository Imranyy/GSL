import React, { useState } from 'react';
import emailVector from '../media/email.png';
import whatsappVector from '../media/whatsapp.png';
import callVector from '../media/call.png';
import worldVector from '../media/world.png';
function ContactUs(props) {
    const [name,setName]=useState('');
    const [message,setMessage]=useState('');
    const [phone,setPhone]=useState(0);
    const [location,setLocation]=useState('');
    const [email,setEmail]=useState('');
    const [sendBtn,setSendBtn]=useState(<button>Send Message</button>);
    const sendMessage=async(e)=>{
        e.preventDefault();
        try{
            setSendBtn(
            <>
                <button disabled style={{background:"grey"}}><i>Sending Message..</i></button>
            </>)
            const url='';
            await fetch(url,{
                method:"POST",
                body:JSON.stringify(({
                    name,
                    location,
                    phone,
                    email,
                    message,
                })),
                headers:{
                    "content-type":'application/json'
                }
            })
            setSendBtn(<button>Send Message</button>);
        }catch (err){
            setSendBtn(<button>Send Message</button>);
            console.log(err.message);
        }
    }
    const map=`https://maps.google.com/maps?q=nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    return (
        <div className='contact-us'>
            {/* map iframe */}
            <iframe className='gmap' width="600" height="500" id="gmap_canvas" src={map} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>

            <div className='heading'>
                <h2>Contact Us</h2>
                <p>Interested in any of our services? Tell us!</p>
            </div>
            <div className='grid-contact'>
                <div className='grid-contact-item'>
                    <h2>Find Us on</h2>
                    <p>Talk to us whenever, wherever, we’ll listen.</p> 
                    <ul className='contact-list'>
                        <li><a href='#' target='_blank'><img src={emailVector} alt='..'/>  sales@globilinksolutions.com</a></li>
                        <li><a href='#' target="_blank"><img src={worldVector} alt='..'/>  www.globilinksolutions.com/</a></li>
                        <li><a href='#' target="_blank"><img src={whatsappVector} alt='..'/>  +254 799 507 509</a></li>
                        <li><a href='#' target="_blank"><img src={callVector} alt='..'/>  +254 793 486 784</a></li>
                    </ul>
                </div>
                <div className='grid-contact-item'>
                    <form onSubmit={sendMessage}>
                        <div className='input'>
                            <div className='opt'>
                                <label>Name</label>
                                <input placeholder='Jane' type='text' onChange={e=>setName(e.target.value)} required/>
                            </div>
                            <div className='opt'>
                                <label>Location</label>
                                <input type='text' placeholder='Kisumu' onChange={e=>setLocation(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='input'>
                            <div className='opt'>
                                <label>Email Address</label>
                                <input type='email' placeholder='Janedoe@email.com' onChange={e=>setEmail(e.target.value)} required/>
                            </div>
                            <div className='opt'>
                                <label>Phone Number</label>
                                <input type='number' placeholder='+254 12345678' onChange={e=>setPhone(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='opt'>
                            <label>Message</label>
                            <textarea onChange={e=>setMessage(e.target.value)} required></textarea>
                        </div>
                        {sendBtn}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;