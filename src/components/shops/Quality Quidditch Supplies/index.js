import React from 'react';
import qqs from './../../../assets/qqs.jpeg';
import './../Quality Quidditch Supplies/styles.scss'
import Particle from './../../Particle'
import './../../../assets/fonts/lumos/LUMOS.TTF'
import './../../../assets/fonts/parry-hotter/ParryHotter.ttf'
import './../../../assets/fonts/harry_p/HARRYP__.TTF'

const Qqs = props => {
    return (
        <div className="qqs">
            <Particle />
            <img className="qqsPicture" src={qqs} alt="Quality Quidditch Supplies" />
            <div className='qqsContent'>
                <h1 className="qqsName">Quality Quidditch Supplies</h1>
                <p>One stop destination for Quidditch supplies!<br/>Find brooms, Quaffles, Bludgers, Golden Sniteches and more. You can show team pride with hats, pennants, and apparel.</p>
                <a className="qqsShopButton">Shop</a>
            </div>
        </div>

    );
};

export default Qqs;