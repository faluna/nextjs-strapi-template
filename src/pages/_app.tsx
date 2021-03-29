import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';
import * as gtag from 'utils/gtag';

import SEO from 'utils/next-seo.config';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouterChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange);
    };
  }, [router.events]);
  return (
    <ChakraProvider>
      <NextHead>
        <DefaultSeo {...SEO} />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </NextHead>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
