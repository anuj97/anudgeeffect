import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <a href="https://bulma.io">
                    <img src="./src/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24"></img>
                </a>
            </div>
        </footer>
    )
}