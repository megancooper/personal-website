import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Index = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <ul className="ml-6 lg:ml-8 list-none text-sm text-black max-w-lg tracking-wide leading-6">
      <li>
        <Image alt="profile" src="/assets/profile.jpg" height={160} width={240} quality={100} />
      </li>
      <li>
        Hello! I&apos;m Megan, a software engineer based in Austin, TX.
        {' '}
        I enjoy writing code and wearing wacky socks.
      </li>

      <li>
        Currently working on some projects:

        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.melo-app.org">Melo</a>
            {' '}
            - A simple music player.
          </li>
        </ul>
      </li>

      <li>
        Checkout my
        {' '}
        <Link href="/blog">blog</Link>
        .
      </li>

      <li><a href="https://drive.google.com/file/d/1fRVHauEzUkNUbLVnBCMSecJZ-B1lIflD/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</a></li>

      <li><a href="mailto: megancooper1000@gmail.com">megancooper1000@gmail.com</a></li>

    </ul>
  </>
);

export default Index;
