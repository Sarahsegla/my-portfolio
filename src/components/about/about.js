import React from "react";
import { useEffect } from "react";
import "./styles.css";
import Box from '@mui/material/Box';
import MoreAbout from '../moreAbout/moreAbout';

import AOS from 'aos';
import 'aos/dist/aos.css';

function About () {
    useEffect(()=> {
        AOS.init({duration: 2000})
    }, [])
    return (
        <div>
             <div className="subhead" style={{ paddingTop: '70px', paddingLeft: '50px', fontSize: '30px'}}>
                <h2 style={{display: 'inline'}}> 
                <span id="line">About</span> Me </h2>
             </div>
            <h3 style={{ paddingTop: '70px', paddingLeft: '50px'}}>Front-End Web Developer</h3>
            <article>
            <div className="about" data-aos="fade-up-right" > 
            <div className="box">
            <Box  sx={{
        width: 900,
        height: 400,
        backgroundColor: 'green'}}>
            <p>
            Welcome to my portfolio page. I'm web developer that is committed and has a positive work attitude. Experienced working alone and in group collaborations.
             Dedicated to improving my skills and learning more to deliver feature rich websites. 
            I have experience working with HTML5, CSS3, JavaScript, jQuery, React.js Node and application programming interfaces.
            </p>
            </Box>
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