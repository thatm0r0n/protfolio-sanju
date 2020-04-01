import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../exData';
 class Header extends Component{
     render(){
         console.log(data);
         return(
             <div>
                 <h1 className="heading-background">CREATIVE</h1>
                 <header>
                     <h1>
                         <Fade bottom cascade>{data.name}</Fade>
                     </h1>
                 </header>
                 <Fade bottom>
                     <p>
                         {data.headerTagLine[0]}<br/><br/>
                         {data.headerTagLine[1]}<br/><br/>
                         {data.headerTagLine[2]}<br/><br/>
                         <button><a href={`mailto: ${data.contactEmail}`} rel="noopener noreferrer">Contact</a></button>
                     </p>
                 </Fade>
             </div>
         )
     }
 }
 export default Header;