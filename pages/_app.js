import React from 'react'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>2048Trouble</title>
        <meta name="og:type" content="website" />
        <meta name="description" content="Play 2048 with a troubled start" />
        <meta name="og:title" content="2048Trouble" />
        <meta name="keywords" content="game, 2048" />
        <meta name="og:url" content="https://2048Trouble.com" />
        <meta name="og:description" content="Play 2048 with a troubled start" />
        <meta name="og:image" content="https://2048Trouble.com/app-image.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="2048Trouble" />
        <meta name="twitter:site" content="@slnsrn" />
        <meta name="twitter:description" content="Play 2048 with a troubled start" />
        <meta name="twitter:image" content="https://2048Trouble.com/app-image.png" />
        <script
          data-ad-client="ca-pub-2322848954109478"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
