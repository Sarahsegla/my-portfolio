import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from "../item/item";
import Data from "../../Data.json";


function ImageCarousel()
{
    
    return (
        <div>
            <div className='projects' style={{ paddingLeft: '50px', fontSize: '30px'}}>
            <h2 style={{display: 'inline'}}> 
                <span id="line">My</span> Projects </h2>
                </div>
        
        <Carousel>
            {
                Data.map( item => <Item key={item.Id} item={item} /> )
            }
        </Carousel>
        </div>
    )
}

export default ImageCarousel;