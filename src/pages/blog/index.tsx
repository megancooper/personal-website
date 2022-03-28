import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {getAllPosts, Post} from '../../utils/posts';

interface BlogProps {
  posts: Post[];
}

const Blog = ({posts}: BlogProps) => (
  <>
    <Head>
      <title>Blog</title>
    </Head>
    <div className="ml-8">
      <Link href="/"><a className="nav-link">← Landing</a></Link>
      <ul className="list-none">
        <li>
          »
          {' '}
          {posts.map(({slug, title}) => (
            <Link key={slug} href={`/blog/${slug}`}>
              <a className="text-gray-700 border-gray-700">{title}</a>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  </>
);

export default Blog;

export const getStaticProps = async () => {
  const posts = getAllPosts(['slug', 'title']);
  return {
    props: {
      posts,
    },
  };
};
