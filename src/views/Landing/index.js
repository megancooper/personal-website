import React from 'react';
import Profile from '../../assets/profile.jpg';
import './style.scss';

const Landing = () => (
  <ul className='landing'>
    <li><img alt='Profile' className='profile-pic' src={Profile} /></li>
    <li>Hello! I'm Megan, a software engineer based in Austin, TX. I enjoy writing code and wearing wacky socks.</li>

    <li>Currently working on some <a href='projects'>projects</a>.</li>

    <li>Also trying to write about stuff <a href='blog'>sometimes</a>.</li>

    <li><a href='https://drive.google.com/file/d/1fRVHauEzUkNUbLVnBCMSecJZ-B1lIflD/view?usp=sharing' rel='noopener noreferrer' target='_blank'>Resume</a></li>

    <li><a href='mailto: megancooper1000@gmail.com'>megancooper1000@gmail.com</a></li>
  </ul>
);

export default Landing;
