import React, { FC, useEffect } from 'react';
// Modules
import { AppProps } from 'next/app';
import Head from 'next/head';
// MUI Core
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
// Utils
import theme from 'styles/utils/theme';

import { useRouter } from 'next/dist/client/router';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  // TODO:: Make work on first render, it shows homepage first
  // Check this for solution https://nextjs.org/docs/authentication#authenticating-server-rendered-pages
  useEffect(() => {
    if (typeof pageProps.authenticated !== 'undefined') {
      if (!pageProps.authenticated) {
        // If it's not authenticated send to sign in page
        router.push('/sigin');
      } else {
        console.log('defined and authenticated');
      }
    } else {
      console.log('not defined');
    }
  }, [pageProps, router]);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My App</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
