import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {createStyles, Center} from '@mantine/core';
import {getAllPosts, Post} from '../utils/posts';

interface Props {
  posts: Post[];
}

const useStyles = createStyles(theme => ({
  wrapper: {
    [theme.fn.largerThan('sm')]: {
      '*': {
        fontSize: '1rem',
      },
    },
  },
}));

const Index = ({posts}: Props) => {
  const {classes} = useStyles();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Center className={classes.wrapper}>
        <ul className="ml-6 lg:ml-8 list-none text-sm text-black max-w-lg tracking-wide leading-6">
          <li>
            <Image alt="profile" src="/assets/profile.jpg" height={160} width={240} quality={100} />
          </li>
          <li>
            Hello! I&apos;m Megan, a software engineer based in Austin, TX.
            {' '}
            I enjoy writing code and wearing wacky socks.
          </li>

          <li><a href="https://drive.google.com/file/d/1fRVHauEzUkNUbLVnBCMSecJZ-B1lIflD/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</a></li>

          <li><a href="mailto: megancooper1000@gmail.com">megancooper1000@gmail.com</a></li>

          <li>
            Current projects:

            <ul>
              <li className="ml-4">
                »
                {' '}
                <a target="_blank" rel="noreferrer" href="https://www.melo-app.org">Melo</a>
                {' '}
                - A simple music player.
              </li>
            </ul>
          </li>

          <li>
            Blog posts: (ordered by date ascending)
            <ul className="list-none">
              {posts.map(({slug, title}) => (
                <li className="ml-4 mt-0" key={slug}>
                  »
                  {' '}
                  <Link href={`/blog/${slug}`}>
                    <a className="text-gray-700 border-gray-700">{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

        </ul>
      </Center>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const posts = getAllPosts(['slug', 'title']);
  return {
    props: {
      posts,
    },
  };
};
