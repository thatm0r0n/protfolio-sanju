import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import data from '../exData';
class About extends Component{
    render(){
        return(
        <div className="about">
            <div className="about-content">
                <h1>
                    <Fade bottom cascade>About.</Fade>
                </h1>
                <Fade bottom>
                    <p>{data.aboutText}</p>
                </Fade>
            </div>
            {data.ShowAboutImage? <img src={data.aboutImage} alt="About photograph"/>:null}
        </div>);
    }
}
export default About;