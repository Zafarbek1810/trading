import Head from 'next/head'
import Script from 'next/script'
import Partners from '../src/Components/Pages/Partners'
import SignalSIngle from '../src/Components/Pages/HomePage/SignalSIngle'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        <link rel="shortcut icon" href="./favicon.ico" />
        <title>Trading</title>
        <link rel="stylesheet" href="css/style.min.css"/>
        </Head>
      <SignalSIngle/>

      <Script src="js/main.min.js"></Script>
    </>
  )
}
