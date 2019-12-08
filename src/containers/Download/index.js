import React, { Component } from 'react';
import chroma from 'chroma-js';
import { connect } from 'react-redux';

const purple = chroma('#513496').alpha(0.2).css();

const DownloadMac = <a
  className='download-link-disabled'
  disabled
  href='#download'>mac os (.dmg)</a>;

const DownloadWin = <a
  className='download-link-disabled'
  disabled
  href='#download'>windows (.exe)</a>;

const DownloadLinux = <a
  className='download-link-disabled'
  disabled
  href='#download'>linux (.appimage)</a>;

class Home extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className='download' style={{ backgroundColor: purple }}>
        <div className='content'>
          <div className='tag-line'>Download melo for your platform. (Coming Soon)</div>
          <div className='download-links'>
            {DownloadMac} {DownloadWin} {DownloadLinux}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Home);
