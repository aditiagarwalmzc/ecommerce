import React from 'react';
import qqs from './../../../assets/ss.webp';
import './../Sugarplums-sweetshop/styles.scss'
import Particle from './../../Particle'
import './../../../assets/fonts/lumos/LUMOS.TTF'
import './../../../assets/fonts/parry-hotter/ParryHotter.ttf'
import './../../../assets/fonts/harry_p/HARRYP__.TTF'

const Ss = props => {
    return (
        <div className="ss">
            <Particle />
            <img className="ssPicture" src={qqs} alt="Interiors of Sugarplum's sweetshop" />
            <div className='ssContent'>
                <h1 className="ssName">Sugarplum's Sweetshop</h1>
                <p>The sweetest Diagon Aley shop!<br/>From classic fudge to the infamous Chocolate Frogs and Bertie Bott’s Every-Flavour Beans, there’s something for all. It’s like a tiny version of Honeydukes which is over in Hogsmeade.</p>
                <a className="ssShopButton">Shop</a>
            </div>
        </div>

    );
};

export default Ss;