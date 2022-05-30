import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import {createStyles, Loader, Center} from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {getAllPosts, getPostBySlug, Post} from '../../utils/posts';

interface PostProps {
  post: Post;
}

const useStyles = createStyles(theme => ({
  wrapper: {
    margin: '3rem auto',
    padding: '0 2rem',
    width: 'fit-content',
    [theme.fn.largerThan('sm')]: {
      width: 'auto',
      padding: '0 8rem',
    },
    [theme.fn.largerThan('md')]: {
      padding: 'initial',
      width: 700,
    },
  },
  backLink: {
    margin: '0 0 1rem 0',
  },
  blogPost: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.fn.largerThan('md')]: {
      maxWidth: 700,
    },

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
    code: {
      textShadow: 'none !important',
    },
    ol: {
      listStyle: 'decimal',
      paddingLeft: '2rem',
      li: {
        marginTop: 0,
      },
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
        <article>
          <Head>
            <title>
              {post.title}
              &nbsp;|&nbsp;Megan Cooper
            </title>
            <meta name="description" content={post.description} />
            <meta name="robots" content="index, follow" />
          </Head>
          <Center className={classes.wrapper}>
            <div className={classes.blogPost}>
              <Link href="/">
                <a className={classes.backLink}>← Back home</a>
              </Link>
              <ReactMarkdown
                components={{
                  code({
                    // eslint-disable-next-line react/prop-types
                    node, inline, className, children, ...props
                  }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        // eslint-disable-next-line react/no-children-prop
                        children={String(children).replace(/\n$/, '')}
                        style={dark}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          border: 'none',
                          boxShadow: 'none',
                          fontFamily: 'Fira-Code',
                          textShadow: 'none',
                          marginBottom: '3rem',
                          maxWidth: 700,
                          fontSize: '0.95rem',
                        }}
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
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
