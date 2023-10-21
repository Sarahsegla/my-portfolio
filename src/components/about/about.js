import React from "react";
import { useEffect } from "react";
import "./styles.css";
import Box from '@mui/material/Box';
import MoreAbout from '../moreAbout/moreAbout';
//import htmlIcon from "../htmlicon/htmlicon";
//import Icon from '../../images/html icons.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

function About () {
    useEffect(()=> {
        AOS.init({duration: 2000})
    }, [])
    return (
        <div>
             <div className="subhead" id="about" style={{ paddingTop: '70px', paddingLeft: '50px', fontSize: '30px'}}>
                <h2 style={{display: 'inline'}}> 
                <span id="line">About</span> Me </h2>
             </div>
            <h3 style={{ paddingTop: '70px', paddingLeft: '50px', fontSize: '20px'}}>Front-End Web Developer</h3>
            <article>
            <div className="about" data-aos="fade-up-right" > 
            <div className="box">
            <Box  sx={{
        width: 900,
        height: 400}}>
            <p className="border" style={{ fontFamily: 'Abel' }} >
            Welcome to my portfolio page. I'm web developer that is committed and has a positive work attitude. Experienced working alone and in group collaborations.
             Dedicated to improving my skills and learning more to deliver feature rich websites. 
            I have experience working with HTML5, CSS3, JavaScript, jQuery, React.js, Node, WordPress, PHP and application programming interfaces.
            </p>
            </Box>
            </div>
            <div>
            {/* <img src={Icon} style={{ zIndex: '1' }} alt='html icons' /> */}
            </div>
            <div className="box">
            <MoreAbout/>
            </div>
                </div>
            </article>
           
            
        </div>
    )
}

export default About;