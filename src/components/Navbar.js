import React, {Component} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

class Navbar extends Component{
    scrollToTop=()=>{
      scroll.scrollToTop();
    }
    render(){
        return(
            <nav>
                <ul>
                    <li>
                        <label>Home</label>
                        <Link
                            className="link"
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={this.scrollToTop}
                        />
                    </li>
                    <li>
                        <label>About</label>
                        <Link
                            className="link"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        />
                    </li>
                    <li>
                        <label>Work</label>
                        <Link
                            className="link"
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        />
                    </li>
                    <li>
                        <label>Contact</label>
                        <Link
                            className="link"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;