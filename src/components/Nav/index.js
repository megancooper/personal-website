import React, { Component } from 'react';
import styled from 'styled-components';

const Link = styled.a`
  transition: all .3s;
  text-decoration: none;
  margin-left: 20px;
  color: #333333;
  letter-spacing: 1.1px;
  align-items: center;
  border-bottom: 2px solid #FFFFFF;
  &:hover {
    border-bottom: 2px solid #333333;
  }
`;
const Menu = styled.div`
  display: flex;
  font-family: 'FiraCode', monospace;
  text-transform: uppercase;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

class Nav extends Component {

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('nav').className = 'scrolled';
      } else {
        document.getElementById('nav').className = '';
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
    return (
      <nav id='nav'>
        <Menu>
          <Link href='/projects'>Projects</Link>
          <Link href='/resume'>Resume</Link>
          <Link href='/about'>About</Link>
        </Menu>
      </nav>
    );
  }
}

export default Nav;
