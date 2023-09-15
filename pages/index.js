import Head from 'next/head'
import HomePage from '../src/Components/Pages/HomePage'
import Script from 'next/script'
import { useEffect, useState } from 'react';
import Loader from '../src/Components/Common/Loader';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setLoading2(true);
    }, 1500);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        <link rel="shortcut icon" href="./favicon.ico" />
        <title>Inlisting</title>
        <link rel="stylesheet" href="css/style.min.css" />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5D9MP2QK');`
          }}
        />
      </Head>
      {
        loading ? <Loader loading2={loading2} /> : <HomePage />
      }

      <Script src="js/main.min.js"></Script>
    </>
  )
}
