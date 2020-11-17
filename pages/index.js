import Head from 'next/head'
import Image from 'next/image'

import { Hero, Header, Card } from '../components/common'

import styles from '../styles/Home.module.styl'

export default function Home () {
  return (
      <div className={ styles.container }>
        <Head>
          <title>Diamond Luxe | Home</title>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="stylesheet" href="https://use.typekit.net/uzk1jip.css"/>
        </Head>

        <Header/>
        <Hero/>

        <main className={ styles.main }>
          <h1 className={ styles.title }>
            Great detailing where and when you need it
          </h1>
          <p>Check out how will can put the luxe back into your daily driver!!</p>
          <section className={ styles.grid }>
            <Card imagePath='/imgs/Cars.jpeg' title="Personal"/>
            <Card imagePath='/imgs/Commercial.jpeg' title="Commercial"/>
            <Card imagePath='/imgs/Commercial.jpeg' title="Fleets"/>
          </section>

        </main>
        <footer className={ styles.footer }>
        </footer>
      </div>
  )
}
