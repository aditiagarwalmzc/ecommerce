import React from 'react';
import Directory from './../../components/Directory';
import './styles.scss';
import Ollivanders from '../../components/shops/Ollivanders';
import Qqs from '../../components/shops/Quality Quidditch Supplies';
import Mm from '../../components/shops/Magical-menagerie';
import Ss from '../../components/shops/Sugarplums-sweetshop';
import Particle from '../../components/Particle';

const Homepage = props => {
    return (
        <div className="homepage">
            <section className="homepage"><Directory /></section>
            
            <section className="ollivanders"><Ollivanders /></section>
            <section className="qqs"><Qqs /></section> 
            <section className="mm"><Mm /></section>
            <section className="ss"><Ss /></section>
        </div>
        
    );
};

export default Homepage;