import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import {createGetInitialProps} from '@mantine/next';

const getInitialProps = createGetInitialProps();

export default class MyDocument extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body className="light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
