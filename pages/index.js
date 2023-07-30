import Head from 'next/head'
import HomePage from '../src/Components/Pages/HomePage'
import Script from 'next/script'
import { useEffect, useState } from 'react';
import Loader from '../src/Components/Common/Loader';

export default function Home() {
  

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        <link rel="shortcut icon" href="./favicon.ico" />
        <title>Inlisting</title>
        <link rel="stylesheet" href="css/style.min.css"/>
        </Head>
        <HomePage/>

      <Script src="js/main.min.js"></Script>
    </>
  )
}
