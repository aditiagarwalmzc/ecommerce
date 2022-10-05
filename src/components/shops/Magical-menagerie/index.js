import React from 'react';
import mm from './../../../assets/mm.jpeg';
import './../Magical-menagerie/styles.scss';
import Particle from './../../Particle'
import './../../../assets/fonts/lumos/LUMOS.TTF'
import './../../../assets/fonts/parry-hotter/ParryHotter.ttf'
import './../../../assets/fonts/harry_p/HARRYP__.TTF'

const Mm = props => {
    return (
        <div className="mm">
            <Particle />
            <img className="mmPicture" src={mm} alt="Magical Menagerie interiors" />
            <div className='mmContent'>
                <h1 className="mmName">Magical Menagerie</h1>
                <p>Find the most faithful pets of the wizarding world here!<br/>It sells all kinds of animals — Streelers, Fire Crabs, sleek black rats, owls, buckbeaks, cats of every colour, Puffskeins, transforming rabbits and much more.</p>
                <a className="mmShopButton">Shop</a>
            </div>
        </div>

    );
};

export default Mm;