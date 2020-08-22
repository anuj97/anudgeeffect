import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';

import 'bulma/css/bulma.css';
import './../css/style.css';

export default function App() {
    return (
        <>
            <div className="columns" id="background-div">
                <div className="column is-two-fifths"></div>
                <div className="column"></div>
            </div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Footer></Footer>
        </>
    )
}