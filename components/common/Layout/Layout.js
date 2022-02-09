import React from 'react'
import Head from 'next/head'
import Header from '../header/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Diamond Luxe Detailing</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </>
  )
}

export default Layout
