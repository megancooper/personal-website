import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Blog = () => (
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
          <Link href="/">
            <a className="text-gray-700 border-gray-700">
              How to grow as a beginner Software Engineer
            </a>
          </Link>
        </li>

      </ul>
    </div>
  </>
);

export default Blog;
