import React,{useState} from 'react';
import cctv from "../media/cctv.png"
import wifi from "../media/wifi.png"
import fence from "../media/fence.png"
import security from "../media/security.png"
import park from "../media/park.png"
import game from "../media/game.png"
import code from "../media/code.png"
import luggage from "../media/luggage.png"
import tray from "../media/tray.png"
function Service(props) {
    const services=[
        {
            id:1,
            class:'open',
            image:wifi,
            header:"Internet Services",
            text:"Globilink Solution Limited offer fast, reliable and secure internet services depending on client’s needs. We have different packages for home and Small Medium Enterprises (SME), having benefits for super clear HD VoIP calls, HD surveillance streaming, symmetric internet and most important, customer’s data security."
        },
        {
            id:2,
            class:'open',
            image:cctv,
            header:"CCTV sales and installation",
            text:"Due to major security concerns, we do all type of CCTV camera installations ranging from IP Cameras, Digital HD Cameras, Parking Security Cameras, Traffic Control Cameras, Border Control Cameras, just to mention a few. We also sell CCTV cameras that suites client’s needs."
        },
        {
            id:3,
            class:'open',
            image:fence,
            header:"Electric Fencing and Alarm System",
            text:"We got all our clients who would like to get rid of physical intrusion covered by providing solutions for electric fencing and alarm systems so that they are protected from external attacks."
        },
        {
            id:4,
            class:'close',
            image:security,
            header:"Network Security and Analysis",
            text:"Apart from connecting clients to the internet, we also understand all cyber threats existing and that is why we developed a skilled personnel that always ensure that all our clients who are connected to our network are given free access to network security. We also provide the same service to enterprises who also value organization’s data."
        },
        {
            id:5,
            class:'close',
            image:game,
            header:"Structured Cabling and Computer Networking",
            text:"Globilink Solution Limited has a specialized dedicated team that performs cable management and neatly organizing them in network cabinets and server racks. We also do both small, medium and large enterprise computer networking to allow ease of communication flow to institutions such as Banks, Hospitals, Campuses, Government Offices, Schools, Stadiums and Offices."
        },
        {
            id:6,
            class:'close',
            image:code,
            header:"Web Design and Development",
            text:"Globilink Solution has a team of excellent front end, back end and full stack developers that have exceled in their field of developing, designing and maintaining websites. We have designed interactive dynamic websites to organizations countrywide."
        },
        {
            id:7,
            class:'close',
            image:tray,
            header:"IT Consultancy",
            text:"We provide solutions and technology consultation sessions to our clients to help them decide and opt for what is best for their businesses and institutions."
        },
        {
            id:8,
            class:'close',
            image:luggage,
            header:"Luggage Inspection Units",
            text:"By assisting clients with the use of luggage inspection units and providing clear instructions and guidance, they can confidently and efficiently inspect their luggage on the ISP platform, ensuring the security and safety of their belongings."
        },
        {
            id:9,
            class:'close',
            image:park,
            header:"Intelligent Parking Services",
            text:"By guiding clients through the use of intelligent parking services on the ISP platform and providing support in navigating the platform's features, they can easily find and reserve the most convenient and secure parking spaces, enhancing their overall parking experience."
        }
    ]
    const [link,setLink]=useState(<a onClick={seeMore} href='#12'>See more</a>)
    function seeMore(){
        const serviveText=document.querySelectorAll('.close')
        serviveText.forEach(i => {
            i.style.display="block"
        });
        setLink(<a onClick={hide} href='#13'>Hide</a>)
    }
    function hide(){
        const serviveText=document.querySelectorAll('.close')
        serviveText.forEach(i => {
            i.style.display="none"
        });
        setLink(<a onClick={seeMore} href='#12'>See more</a>)
    }
    return (
        <div className='service'>
            {services.map(i=>(
                <div className={i.class}>
                    <div className='grid-item' key={i.id}>
                        <img src={i.image} alt='..'/>
                        <h2>{i.header}</h2>
                        <p>{i.text}</p>
                    </div>
                </div>
            ))}
            {link}
        </div>
    );
}

export default Service ;