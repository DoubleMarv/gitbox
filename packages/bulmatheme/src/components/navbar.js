import React, { Component } from 'react';
import Link from "@frontity/components/link";
import {styled} from 'frontity';

const Stylednav = styled.nav`
background-color: #651fff;
border-bottom:3px solid #b99aff;
`;

class Navbar extends Component {

  render() {
    return (
      <>
      <Stylednav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item brandtext" link="/">
            TBONE
          </Link>

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
      </Stylednav>
      </>
    );
  }

}

export default Navbar;
