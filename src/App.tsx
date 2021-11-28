import React from 'react'
import { Button, ChakraProvider, Heading, Text } from '@chakra-ui/react'
import { theme } from './theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Heading>Tarquinio`s website</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at,
      consequatur facilis nesciunt non pariatur porro sint sunt velit veritatis.
      Dolorum exercitationem fugiat illo libero minus necessitatibus sequi,
      suscipit velit!
    </Text>
    <Button>Holis button</Button>
  </ChakraProvider>
)
