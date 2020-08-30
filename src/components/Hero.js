import React, { Component } from 'react';
// import 'bulma/css/bulma.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faGithub } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCheckSquare, faCoffee, faLinkedinIn);

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <div className="box is-16by9 columns is-gapless contact-card">
                        <div className="column is-three-fifth content has-text-centered colored">
                            <img className="profile-pic" src="https://i.imgur.com/2FvVNTK.jpg"></img>
                            <div className="brand has-text-centered">
                              Anuj<br></br>Upadhyay
                            </div>
                            <div className="underline">
                            </div>
                            <div className="brand-description">
                              WEB DEVELOPER
                            </div>
                            <div className="social">
                              <FontAwesomeIcon icon={["fab", "linkedin-in"]}></FontAwesomeIcon>
                            </div>
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