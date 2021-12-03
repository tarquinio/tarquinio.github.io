import React, { useEffect, VFC } from 'react'
import { Container, Text } from '@chakra-ui/react'
import { db } from '../data/firebase'

export const Intro: VFC = () => {
  useEffect(() => {
    console.log(db)
  })

  return (
    <Container maxH="container.lg">
      <Text>Hello world</Text>
    </Container>
  )
}
