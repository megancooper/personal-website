import React, { Component } from 'react';
import styled from 'styled-components';

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

const Header = styled.div`
  font-family: 'FiraCode', monospace;
  font-size: 20px;
  padding-left: 25vw;
  margin-bottom: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`

`;

const MenuItem = styled.div`
  border-left: solid 2px #dddddd;
  padding: 15px;
  text-transform: uppercase;
  margin-left: 25vw;
  font-size: 13px;
  width: 90px;
  transition-timing-function: ease;
  transition: all .3s;
  &:hover { 
    background: #F5F5F5;
    cursor: pointer;
  }
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

class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = {
      job  : 'abodewell',
      tasks: descriptions['abodewell']
    };
  }

  updateJob = (job) => {
    this.setState({ job, tasks: descriptions[job] });
  }

  render() {
    const { job, tasks } = this.state;

    return (
      <Container>
        <TagLine>Education & Experience</TagLine>

        <Section>
          <Header>Education</Header>
          <div style={{ display: 'flex' }}>
            <Menu>
              <MenuItem>UT Austin</MenuItem>
            </Menu>
            <Description>
          Bachelor of Science in Electrical and Computer Engineering (May 2019)<br />
              <strong>Relevant Coursework:</strong><br />
          Algorithms, Concurrent and Distributed Systems, Embedded Systems,<br />
          Discrete Math, Security and Privacy, Probability and Random Process
            </Description>
          </div>
        </Section>


        <Section>
          <Header>Industry Experience</Header>
          <div style={{ display: 'flex' }}>
            <Menu style={{ marginTop: 20 }}>
              <MenuItem
                onClick={() => this.updateJob('abodewell')}
                style={{ borderLeft: (job === 'abodewell') ? '2px solid #333' : null }} >Abodewell</MenuItem>
              <MenuItem
                onClick={() => this.updateJob('xo-group')}
                style={{ borderLeft: (job === 'xo-group') ? '2px solid #333' : null }} >XO Group</MenuItem>
              <MenuItem
                onClick={() => this.updateJob('emerson')}
                style={{ borderLeft: (job === 'emerson') ? '2px solid #333' : null }} >Emerson</MenuItem>
            </Menu>
            <Description style={{ maxWidth: 700 }}>
              <ul>
                {tasks.map((task, i) => <li key={i}>{task}</li>)}
              </ul>
            </Description>
          </div>
        </Section>

      </Container>
    );
  }
}

export default Resume;
