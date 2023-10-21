import React from "react";
import MailIcon from '@mui/icons-material/Mail';
// import './styles.css';
import Email from "../../components/email/email";



function Contact () {
    return (
        <div>
            <div className='contact'id="contact" >
            <div className='projects' style={{ paddingLeft: '50px',paddingBottom: '100px', fontSize: '30px'}}>
            <h2 style={{display: 'inline'}}> 
                <span id="line">Contact</span> Me </h2> <MailIcon/>
                </div>
                <div style={{ textAlign: 'center' }}>
        <p><a id="contact1" style={{ textDecoration: 'none', color: 'black' }} href={"https://www.linkedin.com/in/sarah-segla-6788a4203/"} >Linkedin</a></p>
        <p>Github:<a id="contact1" style={{ textDecoration: 'none', color: 'black' }} href={"https://github.com/Sarahsegla"}> Sarahsegla</a></p>
        <p><a id="contact1" style={{ textDecoration: 'none', color: 'black' }} href={"mailto:ablavisarahsegla@gmail.com"}>Ablavisarahsegla@gmail.com</a></p>
        <Email />
        </div>
        </div>
        </div>
    )
}

export default Contact;