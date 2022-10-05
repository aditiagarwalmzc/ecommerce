import React from 'react';
import wand from './../../../assets/wand.webp';
import './../Ollivanders/styles.scss';
import Particle from './../../Particle'
import './../../../assets/fonts/lumos/LUMOS.TTF'
import './../../../assets/fonts/parry-hotter/ParryHotter.ttf'
import './../../../assets/fonts/harry_p/HARRYP__.TTF'

const Ollivanders = props => {
    return (
        <div className="ollivanders">
            <Particle />
            <img className="shopPicture" src={wand} alt="Ollivander's wands shop" />
            <div className='shopContent'>
                <h1 className="shopName">Ollivanders</h1>
                <p>Makers of Fine Wands since 382 B.C. <br/>This is where young wizards and witches come in search of the most essential wizarding item: their wand.</p>
                <a className="shopButton">Shop</a>
            </div>
        </div>

    );
};

export default Ollivanders;