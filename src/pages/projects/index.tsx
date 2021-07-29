import Head from 'next/head';
import Image from 'next/image';
import Card from './card';

const comingSoonStyle = {
  border: '3px solid #CCCCCC',
  marginRight: 0,
  display: 'inline-block',
};

const Projects = () => (
  <>
    <Head>
      <title>Projects</title>
    </Head>
    <div className="ml-6 lg:ml-8">
      <a className="nav-link" href="/">← Landing</a>

      <Card href="https://www.melo-app.org" customStyle={{border: '3px solid #8AA4F9'}}>
        <div className="tracking-wide mt-4 uppercase text-black flex items-center">
          <Image
            src="/assets/melo.png"
            alt="melo application logo"
            height={30}
            width={50}
          />
          <div className="font-bold ml-4">MELO</div>
        </div>
        <div className="">
          Melo is a simple music player that allows you to play and beautifully
          organize the audio files on your computer.
        </div>
      </Card>
      <Card customStyle={comingSoonStyle}>More Cool Stuff Coming Soon...</Card>

      <div className="text-xs">
        Icons made by
        {' '}
        <a href="https://www.freepik.com" title="Freepik">Freepik</a>
        {' '}
        from
        {' '}
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </div>
  </>
);

export default Projects;
