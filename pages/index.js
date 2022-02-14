import { useRef } from 'react'
import Card from '../components/common/Card'
import Hero from '../components/common/Hero'
import ScheduleForm from '../components/common/Modal/ScheduleForm'
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  useDisclosure,
} from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'
import Header from '../components/Layout/Header'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef()
  return (
    <Box>
      <Hero />
      <Flex
        direction='column'
        gap={16}
        ref={finalRef}
        justifyContent='center'
        alignItems='center'
      >
        <Container maxW='90%'>
          <Heading as='h1' mt={16} size='2xl' textAlign={'center'}>
            Great detailing where and when you need it
          </Heading>
          <Heading as='h2' mt={16} size='lg' textAlign={'center'}>
            Check out how we will can put the luxe back into your daily driver!!
          </Heading>
        </Container>
        <Grid
          as={'section'}
          templateColumns={{ md: '1fr', lg: 'repeat(3, 1fr)' }}
          justify={'space-between'}
          p={16}
          gap={6}
        >
          <Card
            imagepath='/imgs/Cars.jpeg'
            alt='Personal vehicles'
            title='Personal'
            description='We have a package for any level of cleaning you need. Get your daily driver looking like a luxury trailer queen'
          />

          <Card
            imagepath='/imgs/Commercial.jpeg'
            alt='Commercial vehicles'
            title='Commercial'
            description='Tractor trailers, Box trucks, or any other commercial vehicles we can get it looking brand new!'
          />

          <Card
            imagepath='/imgs/Fleet.jpg'
            alt='Fleets of vehicles'
            title='Fleets'
            description='Contact us about setting up contracting to clean all your vehicles'
          />
        </Grid>
        <Button alignSelf={'center'} onClick={onOpen}>
          Book an Appointment
        </Button>
      </Flex>
      <footer></footer>
      <ScheduleForm
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={finalRef}
      />
    </Box>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      {page}
    </Layout>
  )
}
