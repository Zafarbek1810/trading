import Head from 'next/head'
import Script from 'next/script'
import Single from '../src/Components/Pages/Brokers-raiting/Single'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        <link rel="shortcut icon" href="./favicon.ico" />
        <title>Inlisting</title>
        <link rel="stylesheet" href="css/style.min.css"/>
        </Head>
        <Single id={id}/>

      <Script src="js/main.min.js"></Script>
    </>
  )
}
