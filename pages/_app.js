import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';

import { NFTProvider } from '../context/NFTContext';
import { Navbar, Footer } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <NFTProvider>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Head>
          <title>Polyplace</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
          <Analytics />
        </div>
        <Footer />
      </div>

      <Script src="https://kit.fontawesome.com/77a74156e4.js" crossOrigin="anonymous" />
    </ThemeProvider>
  </NFTProvider>
);

export default MyApp;
