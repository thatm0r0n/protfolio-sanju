import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../exData';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1 className="heading">
                <Fade bottom cascade> Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Let’s create your next<br></br>
                <span className='amazing-color'>experience together</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>

            <span className='footer'>Made With ❤ by <a href="https://github.com/"> Sanju Kumar</a></span>
        </div>);
    }
}
 
export default Contact;