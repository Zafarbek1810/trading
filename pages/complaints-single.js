import Head from 'next/head'
import Script from 'next/script'
import ComplaintsSingle from '../src/Components/Pages/Complaints/Single'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        <link rel="shortcut icon" href="./favicon.ico" />
        <title>Inlisting</title>
        <link rel="stylesheet" href="css/style.min.css"/>
        </Head>
      <ComplaintsSingle/>

      <Script src="js/main.min.js"></Script>
      <Script src="js/app.min.js"></Script>
    </>
  )
}
