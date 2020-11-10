import styles from '../../styles/Hero.styl'

export default function Hero () {
  return (
      <section className={ styles.heroContainer }>
        <div className={ styles.heroContent }>
          <h1>Hero</h1>
          <h2>Because we all need one!</h2>
          <button>Schedule an appointment!</button>
        </div>
      </section>
  )
}
