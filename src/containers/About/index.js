import React, { Component } from 'react';
import styled from 'styled-components';
import megan from '../../assets/profile.png';

const Container = styled.div`
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 1.1px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: #333333;
  margin-top: 100px;
  transition: all .3s;
  justify-content: center;
`;

const TagLine = styled.div`
  font-family: NotoSans-Bold, sans-serif;
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: normal;
  line-height: 30px;
  padding-left: 30px;
  padding-right: 200px;
  margin-bottom: 50px;
  transition-timing-function: ease;
  transition: all .3s;
  padding-left: 25vw;
  padding-right: 25vw;
  margin-top: 50px;
`;

const descriptions = {
  'abodewell': [
    'Improve reliability of all-day open house system (Raspberry Pi, Python, Balena, Docker)',
    'Implemented front end search for house offers inside internal dashboard',
    'Created airflow dags to trigger code rotation jobs for raspberry pis',
    'Implemented daily statistic calculations using Apache Spark, AWS EMR, and Airflow'
  ],
  'xo-group': [
    'Developed new endpoints and business logic for review verification process on The Knot (theknot.com)',
    'Member of the communications team which uses React, Node, and Hapi to maintain and add new features to the conversations stack for The Knot',
    'Create new mobile features with React Native and Redux'
  ],
  'emerson': [
    'Developed internal bot tool that relayed Software Build information to developers through Microsoft Teams (C#)',
    'Designed web application that logged worker activity on software builds (Node JS, HTML, CSS',
    'Created outlook add-on that held state of builds and showed current developer activity (C#)'
  ]
};

const Link = styled.a`
  transition: all .3s;
  text-decoration: none;
  color: #333333;
  letter-spacing: 1.1px;
  align-items: center;
  display: block;
  text-align: center
  border-bottom: 2px solid #FFFFFF;
  width: 225px;
  padding-bottom: 5px;
  &:hover {
    border-bottom: 2px solid #333333;
  }
`;

const Profile = styled.img`
  width: 270px;
  height: 300px;
`;

class About extends Component {
  render() {
    return (
      <Container>
        <TagLine>About Me</TagLine>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Profile src={megan} />

          <Description style={{ marginLeft: '20px', minWidth: 750, paddingLeft: '25vw' }}>
            Hello! I'm Megan, a software engineer based in Austin, TX who enjoys
            writing code and exceptionally wacky socks. I've created websites and web apps 
            that have visually appealing UIs and functional interfaces.
          </Description>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link href='/projects'>Some cool stuff I've done!</Link>
        </div>

      </Container>
    );
  }
}

export default About;
