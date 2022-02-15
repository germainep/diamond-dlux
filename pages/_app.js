import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import gtag from '../utils/gtag'

import '@fontsource/quicksand'
import '@fontsource/arvo'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const getLayout = Component.getLayout || ((page) => page)
  const theme = extendTheme({
    fonts: {
      body: 'Quicksand',
      heading: 'Quicksand',
    },
    colors: {
      primary: '#112b4e',
      secondary: '#364b68',
      accent: '#7d1b11',
    },
    components: {
      Link: {
        baseStyle: {
          _hover: {
            color: 'accent',
            textDecoration: 'none',
          },
        },
      },
      Button: {
        baseStyle: {
          fontWeight: 'extrabold',
          borderRadius: 'base',
          p: 6,
          boxShadow: 'lg',
        },
        variants: {
          solid: {
            bg: 'primary',
            color: 'white',
            _hover: {
              bg: 'secondary',
              color: 'white',
              boxShadow: '2xl',
            },
          },
        },
      },
      Card: {
        baseStyle: {
          border: '1px solid',
          borderColor: 'blackAlpha.200',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          borderRadius: 'lg',
          gap: 5,
          padding: '10px',
          boxShadow: 'xl',
        },
      },
      headings: {
        baseStyle: {
          letterSpacing: 'tight',
        },
      },
    },
  })

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider resetCss theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
