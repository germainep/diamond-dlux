import Head from 'next/head'
import styles from '../styles/Home.module.styl'

export default function Home () {
  return (
      <div className={ styles.container }>
        <Head>
          <title>Diamond Luxe</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={ styles.main }>
          <header>

          </header>
          <h1 className={ styles.title }>
            Welcome to Diamond Luxe Mobile Detailing
          </h1>
          <p>This page is currently under construction!!</p>
        </main>
        <footer className={ styles.footer }>
          <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            Powered by{ ' ' }
            <img src="/vercel.svg" alt="Vercel Logo" className={ styles.logo }/>
          </a>
        </footer>
      </div>
  )
}
