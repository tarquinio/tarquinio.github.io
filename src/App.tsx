import React from 'react'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { theme } from './theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Heading>Tarquinio`s website</Heading>
  </ChakraProvider>
)
