import NextLink from 'next/link'
import { Center, Link } from '@chakra-ui/react'
import Logo from '../common/Logo/Logo'
import { Flex } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex as={'header'} justifyContent='space-between' bg='primary'>
      <Center>
        <Logo width={100} />
      </Center>

      <Center as='nav'>
        <NextLink href='/about' passHref>
          <Link color='white' fontWeight='bolder' textDecoration='none'>
            About Us
          </Link>
        </NextLink>
        <NextLink href='/contact' passHref>
          <Link mx={4} color='white' fontWeight='bolder' textDecoration='none'>
            Contact Us
          </Link>
        </NextLink>
      </Center>
    </Flex>
  )
}

export default Header
