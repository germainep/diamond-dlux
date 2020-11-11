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

        <main className={ styles.main }>
          <Hero/>
          <h1 className={ styles.title }>
            Great detailing where and when you need it
          </h1>
          <p>Check out how will can put the luxe back into your daily driver!!</p>
          <section>
            <Card imagePath='/imgs/Cars.jpeg' title="Personal Vechiles"/>
            <Card imagePath='/imgs/Commercial.jpeg' title="Commercial Vechiles"/>
          </section>

        </main>
        <footer className={ styles.footer }>
          <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            Powered by{ ' ' }
          </a>
        </footer>
      </div>
  )
}
