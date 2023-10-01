import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
//import Grid from '@mui/material/Grid';



export default function SimpleFade() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="moreLabel">
      <FormControlLabel 
        control={<Switch checked={checked} onChange={handleChange} style={{ color: 'green'}} />}
        label="More?"
      />
      



        <Fade in={checked}>
        <Box className="border-side" style={{ fontFamily: 'Abel' }} sx={{
        width: 900,
        height: 400}}>
          
          <p >
          I was born in Lomé, Togo (which is west of Africa), and grew up in Sheffield, United Kingdom. 
          I enjoy lifting weights, watching anime, Netflix, discovering new restaurants, swimming, and singing.
          </p>
       
          <p>
          I got into web development because I wanted a career change. I started on my own with FreeCodeCamp and,
           fortunately, stumbled across a rigorous bootcamp that taught me so much. It's been over a year of being in web development. 
          I've seen and met so many amazing people. I cannot wait for what the future holds!
          </p>
        
    
            </Box>
            </Fade>

      
            </div>
  );
}
