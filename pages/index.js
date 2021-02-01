import Head from 'next/head'

import { Card, Hero, Modal, useModal } from '../components/common'

import styles from '../styles/Home.module.styl'

const Home = (props) => {
  const { isVisible, toggleModal } = useModal()

  return (
      <>
        <Hero/>
        <div className={ styles.container }>
          <main className={ styles.main }>
            <h1 className={ styles.title }>
              Great detailing where and when you need it
            </h1>
            <h2 className={ styles.description}>Check out how we will can put the luxe back into your daily driver!!</h2>
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
          <Modal isVisible={ isVisible } hideModal={ toggleModal }/>
        </div>
      </>
  )
}
Home.layout = "default";

export default Home;
