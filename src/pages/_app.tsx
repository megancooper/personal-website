import Head from 'next/head';
import {AppProps} from 'next/app';
import {MantineProvider} from '@mantine/core';

const App = ({Component, pageProps}: AppProps) => (
  <>
    <Head>
      <title>Megan Cooper | Software Engineer</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>

    <MantineProvider theme={{colorScheme: 'light'}} withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  </>
);

export default App;
