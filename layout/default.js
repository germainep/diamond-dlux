import {Header} from '../components/common';
import Head from "next/head";
import styles from '../styles/Home.module.styl';

const DefaultLayout = (props) => (
    <div>
      <Head>
        <html lang='en'/>
        <title>Diamond Luxe | Home</title>
        <link rel="preload"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="https://use.typekit.net/uzk1jip.css"/>
        <meta name="description"
              content="Diamond Luxe Mobile Detailing. Cars, Trucks, SUV, Tractor Trailers, and Fleet vehicles. Get you vehicle washed when and where you want. Now serving: Siler City, Asheboro, Greensbor Triad, and Danville, VA."/>
        <meta name="keywords" content="Mobile Car Washing, Tractor Trailer Washing"/>
      </Head>

      <Header/>
      <div>{props.children}</div>
      <footer className={ styles.footer }>
      </footer>
    </div>
);

export default DefaultLayout;
