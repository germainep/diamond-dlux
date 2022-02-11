import { useRouter } from 'next/router'
import { baseStyle, ChakraProvider, extendTheme } from '@chakra-ui/react'
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
          fontWeight: 'bolder',
          borderRadius: 'base',
          p: 6,
        },
        variants: {
          solid: {
            bg: 'primary',
            color: 'white',
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
    },
    headings: {
      baseStyle: {
        letterSpacing: 'tight',
      },
    },
  })

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
