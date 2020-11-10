import Link from 'next/link'
import styles from '../../../styles/header.styl'
import LogoComponent from '../Logo/Logo'

export default function Header () {
  return (
      <header className={ styles.header }>
        <div>
          <Link href='/'>
            <a><LogoComponent className={ styles.logo } width={ 100 }/></a>
          </Link>
        </div>
        <div className={ styles.nav }>
          <Link href='/about'>
            <a>About Us</a>
          </Link>
          <Link href='/contact'>
            <a>Contact Us</a>
          </Link>
        </div>
      </header>
  )
}
