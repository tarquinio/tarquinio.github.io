import React from 'react'
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
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
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
      eligendi, enim esse facilis fuga nesciunt nostrum quis rem, rerum suscipit
      ullam vel. Aliquam debitis in magni nesciunt nisi quidem reprehenderit!
    </Text>
  </ChakraProvider>
)
