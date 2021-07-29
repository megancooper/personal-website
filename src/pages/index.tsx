import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// type Props = {
//   allPosts: string[]
// };

// {allPosts}: Props

const Index = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <ul className="ml-6 lg:ml-8 list-none text-sm text-black max-w-lg tracking-wide leading-6">
      <li>
        <Image alt="profile" src="/assets/profile.jpg" height={160} width={270} />
      </li>
      <li>
        Hello! I&apos;m Megan, a software engineer based in Austin, TX.
        {' '}
        I enjoy writing code and wearing wacky socks.
      </li>

      <li>
        Currently working on some
        {' '}
        <Link href="/projects">projects</Link>
        .
      </li>

      <li>
        Also trying to write about stuff
        {' '}
        <Link href="/blog">sometimes</Link>
        .
      </li>

      <li><a href="https://drive.google.com/file/d/1fRVHauEzUkNUbLVnBCMSecJZ-B1lIflD/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</a></li>

      <li><a href="mailto: megancooper1000@gmail.com">megancooper1000@gmail.com</a></li>
    </ul>
  </>
);

export default Index;

// export const getStaticProps = async () => ({
//   props: {
//     allPosts: [],
//   },
// });
