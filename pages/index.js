import Head from 'next/head'

import { Card, Header, Hero, Modal, useModal } from '../components/common'

import styles from '../styles/Home.module.styl'

export default function Home () {
  const { isVisible, toggleModal } = useModal()

  return (
      <div className={ styles.container }>
        <Head>
          <html lang='en'/>
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-BR8BW1ZEMC"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)};
            gtag('js', new Date());

            gtag('config', 'G-BR8BW1ZEMC');
          </script>
          <title>Diamond Luxe | Home</title>
          <link rel="preload"/>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="stylesheet" href="https://use.typekit.net/uzk1jip.css"/>
          <meta name="description"
                content="Diamond Luxe Mobile Detailing. Cars, Trucks, SUV, Tractor Tarilers, and Fleet vehciles. Get you vehicle washed when and where you want. Now serving: Siler City, Asheboro, Greensbor Triad, and Danville, VA."/>
          <meta name="keywords" content="Mobile Car Washing, Tractor Trailer Washing"/>
        </Head>

        <Header/>
        <Hero/>

        <main className={ styles.main }>
          <h3 className={ styles.title }>
            Great detailing where and when you need it
          </h3>
          <p>Check out how we will can put the luxe back into your daily driver!!</p>
          <section className={ styles.grid }>
            <Card imagePath='/imgs/Cars.jpeg'
                  alt='Personal vehicles'
                  title="Personal"
                  description="We have a package for any level of cleaning you need. Get your daily driver looking like a luxury trailer queen"
                  openModal={ toggleModal }
            />

            <Card imagePath='/imgs/Commercial.jpeg'
                  alt='Commercial vehicles'
                  title="Commercial"
                  description="Tractor trailers, Box trucks, or any other commercial vehicles we can get it looking brand new!"
                  openModal={ toggleModal }
            />

            <Card imagePath='/imgs/Fleet.jpg'
                  alt="Fleets of vehicles"
                  title="Fleets"
                  description="Contact us about setting up contracting to clean all your vehicles"
                  openModal={ toggleModal }
            />
          </section>

        </main>
        <footer className={ styles.footer }>
        </footer>
        <Modal isVisible={ isVisible } hideModal={ toggleModal }/>
      </div>
  )
}
