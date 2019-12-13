import React, { Component } from 'react';
import styled from 'styled-components';
import melo from '../../assets/melo-logo.svg';

const Container = styled.div`
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 1.1px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333333;
  margin-top: 100px;
  transition: all .3s;
`;

const TagLine = styled.div`
  font-family: NotoSans-Bold, sans-serif;
  font-size: 30px;
`;

const Grid = styled.div`
  display: inline-flex;
  justify-content: center;
  margin-top: 70px;
`;

const Card = styled.div`
  box-shadow: 0 5px 19px 0 rgba(0, 0, 0, 0.05);
  width: 200px;
  height: 300px
  text-decoration: none;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  line-height: 30px;
  text-transform: uppercase;
  font-weight: bold;
  transition-timing-function: ease;
  transition: all .3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 5px 19px 0 rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
    transition-timing-function: ease;
  }
`;

const Icon = styled.img`
  height: 30px;
`;

const CardTitle = styled.a`
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 30px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: #333333;
  border-bottom: 2px solid #FFFFFF;
  &:hover {
    border-bottom: 2px solid #333333;
  }
`;

const Description = styled.div`
  font-size: 11px;
  font-weight: normal;
  line-height: 20px;
  text-align: center;
  margin-top: 30px;
`;

const meloStyle = {
  border: '3px solid #5C3CAB'
};

const comingSoonStyle = {
  border     : '3px solid #CCCCCC',
  marginRight: 0
};

class Projects extends Component {

  render() {
    return (
      <Container>
        <TagLine>Here's Some Stuff I've Built</TagLine>
        <Grid>
          <Card style={meloStyle}>
            <Icon src={melo}/>
            <CardTitle href='https://www.melo-app.org' target='_blank'>melo</CardTitle>
            <Description>
             Melo is a simple music player that allows you to play and beautifully
             organize the audio files on your computer.
            </Description>
          </Card>
          <Card style={comingSoonStyle}>
              More Cool Stuff Coming Soon...
          </Card>
        </Grid>
      </Container>
    );
  }
}

export default Projects;
