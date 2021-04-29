import React, { Component } from 'react';
import Link from "@frontity/components/link"

class Navbar extends Component {

  render() {
    return (
      <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" link="/">
              Home
            </Link>

            <Link className="navbar-item" link="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
      </>
    );
  }

}

export default Navbar;
