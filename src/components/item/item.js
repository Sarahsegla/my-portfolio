import React from "react";
import { Paper, Button } from '@mui/material';
import "./styles.css";

function Item(props)
{
    return (
        <Paper>
            <div className="mySlides" style={{textAlign: 'center'}}>
            <img className="slidesCss" src={props.item.image} alt={props.item.description} style={{width: '500px', height: '400px', paddingTop: '10px' }}/>
           
            </div>
            <div className="buttons">
            <Button variant="text" className="LinkButton">
            <a className="GitButton2" href={props.item.url}  style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue', paddingLeft: '30px', fontSize: '40px' }} >{props.item.description}</a>
            </Button>
            <Button variant="text" className="GitButton" style={{textAlign: 'right'}}>
            <a className="GitButton1" href={props.item.GitUrl} style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue', paddingLeft: '40px', fontSize: '40px'}}>GitHub Repository </a>
            </Button>
            </div>
        </Paper>
    )
}

export default Item;