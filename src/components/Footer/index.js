import React, { Component } from 'react';
import Logo from '../../assets/logo.svg';
import Heart from '../../assets/heart.png';

const AuthorLink = <a
  href='http://megancooper.io/'
  rel='noopener noreferrer'
  target='_blank'>megan</a>;

class Footer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className='footer'>
        <a className='logo-link' href='/#'>
          <img alt='logo' src={Logo} />
          <div className='logo-name'>melo</div>
        </a>
        <div className='column'>
          made by {AuthorLink} with
          <img alt='' src={Heart}></img>
        </div>
      </div>
    );
  }
}

export default Footer;
