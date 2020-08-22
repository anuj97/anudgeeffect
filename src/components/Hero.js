import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <div className="box is-16by9 columns is-gapless contact-card">
                        <div className="column is-three-fifth content has-text-centered colored">
                            <img className="profile-pic" src="./src/images/18463482.jpg"></img>
                        </div>
                        <div className="column">

                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </section>
    )
}