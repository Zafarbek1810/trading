import Head from 'next/head'
import Script from 'next/script'
import News from '../src/Components/Pages/News'


export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        <link rel="shortcut icon" href="./favicon.ico" />
        <title>Trading</title>
        <link rel="stylesheet" href="css/style.min.css"/>
        </Head>
      <News/>

      <Script src="js/main.min.js"></Script>
    </>
  )
}
