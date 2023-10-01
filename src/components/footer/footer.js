import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';



function Footer() {
    return (
        <>
 
        <footer >
        <Box sx={{ flexGrow: 1 }} style={{backgroundColor: 'green'}}>
      <Grid container spacing={2}>
        
       
        <Grid
          xs={12}
          container
          justifyContent="space-between"
         alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>© Copyright | Privacy Policy
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
            <a href={"mailto:ablavisarahsegla@gmail.com"}><MailIcon  style={{ textDecoration: 'none', color: 'black'}}/></a>
            </Grid>
            <Grid>
            <a href="https://github.com/Sarahsegla"><GitHubIcon  style={{ textDecoration: 'none', color: 'black'}}/></a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
        </footer>
     
        </>
    )
}

export default Footer;