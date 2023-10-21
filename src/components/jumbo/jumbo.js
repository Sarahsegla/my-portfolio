import * as React from 'react';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import './styles.css';
import Myself from '../../images/Ellipse 1.png';




export default function AutoGrid() {
  useEffect(()=> {
    AOS.init({duration: 2000})
}, [])
  return (
    <Box sx={{ flexGrow: 1 }} data-aos="fade-up">
      <Grid container spacing={3}>
        <Grid item xs >
          <h1 className="Title" id="home" style={{ zIndex: '2', fontFamily: 'Days One' }}>Hello There, I'm Sarah</h1>
        </Grid>
        <Grid item xs={8} >
          
          <img src={Myself} style={{ zIndex: '1' }} alt='myself' />
          
        </Grid>
        <Grid item xs >
          {/* <h2 className="info" style={{ zIndex: '2', paddingTop: '70px'}}>I code simple feature-rich websites. <span className="green">I enjoy what I do</span></h2> */}
        </Grid>
      </Grid>
    </Box>
  );
}