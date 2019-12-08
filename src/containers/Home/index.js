import React, { Component } from 'react';
import chroma from 'chroma-js';
import { connect } from 'react-redux';
import MeloDemo from '../../assets/melo-screen.png';

const purple = chroma('#513496').alpha(0.2).css();
const ReactLink = <a
  href='https://reactjs.org?ref=melo'
  rel='noopener noreferrer'
  target='_blank'>React</a>;

const ReduxLink = <a
  href='https://redux.js.org?ref=melo'
  rel='noopener noreferrer'
  target='_blank'>Redux</a>;

const ElectronLink = <a
  href='https://www.electronjs.org?ref=melo'
  rel='noopener noreferrer'
  target='_blank'>Electron</a>;

const IssuesLink = <a
  href='https://github.com/megancooper/melo-issues/issues'
  rel='noopener noreferrer'
  target='_blank'>issues page</a>;

const DownloadLink = <a
  className='download-btn'
  href='#download'>Download Melo</a>;

class Home extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className='home' style={{ backgroundColor: purple }}>
        <div className='content'>
          <div className='tag-line'>Because Some Of Us Still Use Media Files.</div>
          <div className='description'>
          Melo is a simple music organizer built to help you play and manage audio files
          on your computer. After loading your local audio files and directories, melo's
          interface allows you to play and beautifully visualize your music. Melo is powered by{'\n'}
            {ReactLink}, {ReduxLink}, and {ElectronLink}. Feel free to post any issues you
          discover while using the app in our {IssuesLink}.
          </div>
          {DownloadLink}
        </div>
        <div className='img-wrapper'>
          <img alt='' src={MeloDemo} />
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Home);
