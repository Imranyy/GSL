import React from 'react';

function ContactUs(props) {
    const sendMessage=async()=>{

    }
    return (
        <div className='contact-us'>
            <div className='heading'>
                <h2>Contact Us</h2>
                <p>Interested in any of our services? Tell us!</p>
            </div>
            <div className='grid-contact'>
                <div className='grid-contact-item'>
                    <h2>Find Us on</h2>
                    <p>Talk to us whenever, wherever, we’ll listen.</p> 
                    <ul>
                        <li>sales@globilinksolutions.com</li>
                        <li>www.globilinksolutions.com/</li>
                        <li>+254 799 507 509</li>
                        <li>+254 793 486 784</li>
                    </ul>
                </div>
                <div className='grid-contact-item'>
                    <form onSubmit={sendMessage}>
                        <div className='input'>
                            <div className='opt'>
                                <label>Name</label>
                                <input type='text' required/>
                            </div>
                            <div className='opt'>
                                <label>Location</label>
                                <input type='text' required/>
                            </div>
                        </div>
                        <div className='input'>
                            <div className='opt'>
                                <label>Email Address</label>
                                <input type='email' required/>
                            </div>
                            <div className='opt'>
                                <label>Phone Number</label>
                                <input type='number' required/>
                            </div>
                        </div>
                        <div className='opt'>
                            <label>Message</label>
                            <textarea required></textarea>
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;