import React from "react";
import "./styles.css";
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';


function Navbar () {
    return (
        <div>
            <nav className="navbar" style={{justifyContent: 'flex-end', background: 'transparent'}} >
                <ul className="page" style={{display: 'flex', justifyContent: 'space-around'}} >
                 <Button className="home" variant="text" style={{  color: 'black', fontFamily: 'Bebas Neue', textDecoration: 'underline orange' }}>Home</Button>
                <Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue' }}>About Me</Button>
                <Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue' }}>Projects</Button>
                <Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue', paddingRight: '10px' }}>Contact</Button>
                <a href={"mailto:ablavisarahsegla@gmail.com"}><MailIcon  style={{ textDecoration: 'none', color: 'black'}}/></a>
                {/* <AddIcon/> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

