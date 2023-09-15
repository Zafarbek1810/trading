import Head from 'next/head'
import Script from 'next/script'
import BrokersSingle from '../src/Components/Pages/Brokers/BrokersSingle'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const id = router.query.id;

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
        <BrokersSingle id={id}/>
      <Script src="js/main.min.js"></Script>
    </>
  )
}
