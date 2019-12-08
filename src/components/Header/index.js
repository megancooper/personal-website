import React, { Component } from 'react';
import chroma from 'chroma-js';
import Logo from '../../assets/logo.svg';

const purple = chroma('#513496').alpha(0.2).css();

class Header extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className='header' style={{ backgroundColor: purple }}>
        <div className='content'>
          <nav>
            <a className='logo-link' href='#home'>
              <img alt='logo' src={Logo} />
              <div className='logo-name'>melo</div>
            </a>
            <ul className='menu'>
              <li><a href='#download'>download</a></li>
              <li><a href='https://github.com/megancooper/melo-issues/wiki'
                rel='noopener noreferrer'
                target='_blank'>docs</a></li>
            </ul>
            <a
              className='report-issue'
              href='https://github.com/megancooper/melo-issues/issues'
              rel='noopener noreferrer'
              target='_blank'>
                  Report Issue
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
