import React, { Component } from 'react';
import styled from 'styled-components';
import melo from '../../assets/melo-logo.svg';
import './style.scss';

const Card = styled.a`
  box-shadow: 0 5px 19px 0 rgba(0, 0, 0, 0.05);
  max-width: 500px;
  margin-top: 2rem;
  text-decoration: none;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: left;
  align-content: left;
  justify-content: left;
  padding: 20px;
  font-weight: bold;
  transition-timing-function: ease;
  transition: all .3s;
  color: #333;

  &:hover {
    cursor: pointer;
    box-shadow: 0 5px 19px 0 rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
    transition-timing-function: ease;
  }
`;

const Icon = styled.img`
  height: 30px;
  width: 70px;
  display: inline-block;
`;

const CardTitle = styled.div`
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 30px;
  color: #333;
  text-transform: uppercase;
`;

const Description = styled.div`
  font-size: 11px;
  font-weight: normal;
  font-size: 0.85rem;
`;

const meloStyle = {
  border: '3px solid #5C3CAB'
};

const comingSoonStyle = {
  border     : '3px solid #CCCCCC',
  marginRight: 0,
  display    : 'inline-block'
};

class Projects extends Component {

  render() {
    return (
      <div className='projects'>
        <a className='nav-link' href='/'>← Landing</a>
        <Card href='https://www.melo-app.org' style={meloStyle} target='_blank'>
          <Icon src={melo}/>
          <CardTitle>melo</CardTitle>
          <Description>
             Melo is a simple music player that allows you to play and beautifully
             organize the audio files on your computer.
          </Description>
        </Card>
        <Card style={comingSoonStyle}>More Cool Stuff Coming Soon...</Card>
      </div>
    );
  }
}

export default Projects;
