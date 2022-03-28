import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import cx from 'classnames';
import {createStyles, Loader, Center} from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import {getAllPosts, getPostBySlug, Post} from '../../utils/posts';

interface PostProps {
  post: Post;
}

const useStyles = createStyles(theme => ({
  wrapper: {
    margin: '0 auto',
    padding: '0 4rem',
    [theme.fn.largerThan('sm')]: {
      padding: '0 8rem',
    },
    [theme.fn.largerThan('md')]: {
      padding: '0 20rem',
    },
  },
  backLink: {
    margin: '0 0 1rem 0',
  },
  blogPost: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    h1: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
    },
    p: {
      marginBottom: '2rem',
    },
  },
}));

const BlogPost = ({post}: PostProps) => {
  const router = useRouter();
  const {classes} = useStyles();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <div><Center><Loader /></Center></div>
      ) : (
        <article className="mb-32">
          <Head>
            <title>
              {post.title}
              {' '}
              | Megan Cooper
            </title>
          </Head>
          <Center className={classes.wrapper}>
            <div className={classes.blogPost}>
              <Link href="/blog">
                <a className={cx('nav-link', classes.backLink)}>← Back to all posts</a>
              </Link>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </Center>
        </article>
      )}
    </>
  );
};

export default BlogPost;

export const getStaticProps = async ({params}: {params: {slug: string}}) => {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ]);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};
