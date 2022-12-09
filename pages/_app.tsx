import '../styles/globals.css';
import '@fontsource/abeezee/400.css';
import '@fontsource/kameron/700.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';
import Layout from '../components/layout';
import Head from 'next/head';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { DefaultSeo } from 'next-seo';
import config from '../next-seo.config';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  // Set the canonical tag to the current page URL
  const router = useRouter();
  config.canonical = (
    `https://www.kuhnstreeservice.com` +
    (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];

  return (
    <>
      <Head>
        {/* <html lang="en" /> LANGUAGE SET IN NEXT.CONFIG.JS*/}
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* Favicon Generated with https://favicon.io/ */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      {/* Google Tag Manager */}
      <Script
        id='google-tag-manager'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5W39XPX');`,
        }}
      />
      <DefaultSeo {...config} />
      <GoogleAnalytics trackPageViews />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
