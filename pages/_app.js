import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>2048Trouble</title>
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
