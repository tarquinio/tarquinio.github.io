import React, { VFC } from 'react'
import { Container } from '@chakra-ui/react'
import balcony from '../assets/balcony.jpg'
import detailBed from '../assets/detail-bed.jpeg'
import { FullGallery } from '../components/FullGallery'

export const Intro: VFC = () => {
  return (
    <Container maxH="container.lg">
      <FullGallery images={[detailBed, balcony]} />
    </Container>
  )
}
