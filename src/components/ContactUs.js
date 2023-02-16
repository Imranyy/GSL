import React, { useState } from 'react';
import {location} from './location/getUserLocation'
function ContactUs(props) {
    const [name,setName]=useState('');
    const [message,setMessage]=useState('');
    const [phone,setPhone]=useState(0);
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
    const map=`https://maps.google.com/maps?q=${location}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    return (
        <div className='contact-us'>
            <div className='grid-contact'>
                <div className='grid-contact-item'>
                    <iframe className='gmap' id="gmap_canvas" src={map} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
                <div className='grid-contact-item1'>
                    <form onSubmit={sendMessage}>
                        <div className='input'>
                            <div className='opt'>
                                <label>Name</label>
                                <input placeholder='Jane' type='text' onChange={e=>setName(e.target.value)} required/>
                            </div>
                            <div className='opt'>
                                <label>Location</label>
                                <input type='text' placeholder={location} required readOnly/>
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