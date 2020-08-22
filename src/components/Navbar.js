import React, { Component } from 'react';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  <div id="big-blue-bullet"></div>
                  &emsp;
                  <b>ANUJ UPADHYAY</b> / WEB DEVELOPER
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active is-size-8">
                    About Me
                  </a>
                  <a className="navbar-item is-size-8">
                    Resume
                  </a>
                  <a className="navbar-item is-size-8">
                    Projects
                  </a>
                  <a className="navbar-item is-size-8">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
    )
}