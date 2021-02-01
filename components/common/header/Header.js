import Link from 'next/link'
import styles from '../../../styles/Header.module.styl'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
      <header className={ styles.header }>

          <div className={ styles.logo }>
            <Link href='/'>
              <a><Logo className={ styles.logocontent } width={ 100 }/></a>
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

export default Header
