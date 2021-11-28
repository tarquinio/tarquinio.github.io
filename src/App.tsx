import React from 'react'
import { ChakraProvider, Input, Heading } from '@chakra-ui/react'
import { theme } from './theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Input background="gray.100" />
    <Heading>Hello from react</Heading>
  </ChakraProvider>
)
