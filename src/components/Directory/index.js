import React from 'react';
// import bg from './../../assets/daBackground.webp';
import bg from './../../assets/dabg4.webp';
// import bg from './../../assets/daBg.jpg';
// import bg from './../../assets/dabg3.jpg';
import './styles.scss';
import './../../assets/fonts/harry_p/HARRYP__.TTF'

const Directory = props => {
    return (
        <div
            className="directory"
            style={{
                backgroundImage: `url(${bg})`
            }}
        >
         <h1 className="front-text">Welcome to the <span className='diagon-alley'>Diagon Alley</span>, witches and wizards!</h1>
        </div>
    );
};

export default Directory;