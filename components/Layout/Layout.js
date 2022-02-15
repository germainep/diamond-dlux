import Head from 'next/head'
import { GA_TRACKING_ID } from '../../utils/gtag'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <html lang='en' />
        <title>Diamond Luxe Detailing</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='preload' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://use.typekit.net/uzk1jip.css' />
        <meta
          name='description'
          content='Diamond Luxe Mobile Detailing. Cars, Trucks, SUV, Tractor Trailers, and Fleet vehicles. Get you vehicle washed when and where you want. Now serving: Siler City, Asheboro, Greensbor Triad, and Danville, VA.'
        />
        <meta
          name='keywords'
          content='Mobile Car Washing, Tractor Trailer Washing'
        />
      </Head>
      {children}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

export default Layout
