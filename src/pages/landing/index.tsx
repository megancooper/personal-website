import Link from 'next/link';
import cx from 'classnames';
import {createStyles, Center} from '@mantine/core';
import Image from '../../components/Image';
import {getAllPosts, Post} from '../../utils/posts';

interface Props {
  posts: Post[];
}

const useStyles = createStyles(theme => ({
  wrapper: {
    fontSpacing: '1.1px',
    [theme.fn.largerThan('sm')]: {
      '*': {
        fontSize: '1rem',
      },
    },
    [theme.fn.smallerThan('md')]: {
      padding: '0 1rem',
    },
  },
  profilePic: {
    borderRadius: '0.25rem',
    marginTop: '3rem',
  },
  blurb: {
    maxWidth: '30rem',
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    color: '#1D8CFA',
    textDecoration: 'none',
    borderBottom: '1px solid #1D8CFA',
    width: 'fit-content',
  },
  blogLink: {
    borderBottom: '1px solid',
    cursor: 'pointer',
  },
  section: {
    marginTop: '1rem',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '1rem',
    li: {
      marginTop: '0.5rem',
    },
  },
}));

const Index = ({posts}: Props) => {
  const {classes} = useStyles();

  return (
    <Center className={classes.wrapper}>
      <div>
        <Image className={classes.profilePic} alt="profile" src="profile.jpg" height="160" width="240" />

        <p className={cx(classes.blurb, classes.section)}>
          Hello! I&apos;m Megan, a software engineer based in Austin, TX.
          I enjoy writing code and wearing wacky socks.
        </p>

        <div className={classes.contact}>
          <a
            href="https://drive.google.com/file/d/1fRVHauEzUkNUbLVnBCMSecJZ-B1lIflD/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            className={cx(classes.link, classes.section)}
          >
            Resume
          </a>

          <a
            href="mailto: megancooper1000@gmail.com"
            className={cx(classes.link, classes.section)}
          >
            megancooper1000@gmail.com
          </a>
        </div>

        <div className={classes.section}>
          Current projects:

          <ul className={classes.list}>
            <li>
              »
              &nbsp;
              <a target="_blank" rel="noreferrer" href="https://www.melo-app.org" className={classes.link}>Melo</a>
              &nbsp;
              - A simple music player.
            </li>
            <li>
              »
              &nbsp;
              PilePost - A queuing service for blog posts. (coming soon)
            </li>
          </ul>
        </div>

        <div className={classes.section}>
          Blog posts: (ordered by most recent)
          <ul className={classes.list}>
            {posts.map(({slug, title}) => (
              <li key={slug}>
                »&nbsp;
                <Link href={`/blog/${slug}`}>
                  <span className={classes.blogLink}>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Center>
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
