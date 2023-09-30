import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';



export default function SimpleFade() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="More?"
      />
      <Box sx={{ display: 'flex' }}>



        <Fade in={checked}>
        <Box  sx={{
        width: 900,
        height: 480,
        backgroundColor: 'green'}}>
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <p>
          I was born in Lomé, Togo (which is west of Africa), and grew up in Sheffield, United Kingdom. 
          I enjoy lifting weights, watching anime, Netflix, discovering new restaurants, swimming, and singing.
          </p>
        </Grid>
        <Grid item xs={8}>
          <p>
          I got into web development because I wanted a career change. I started on my own with FreeCodeCamp and,
           fortunately, stumbled across a rigorous bootcamp that taught me so much. It's been over a year of being in web development. 
          I've seen and met so many amazing people. I cannot wait for what the future holds!
          </p>
        </Grid>
      </Grid>
    </Box>
           
            </Box>
            </Fade>

      </Box>
    </Box>
  );
}
