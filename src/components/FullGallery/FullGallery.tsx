import React, { VFC } from 'react'
import { Stack, Box } from '@chakra-ui/react'

type FullGalleryProps = {
  readonly images: readonly string[]
}

export const FullGallery: VFC<FullGalleryProps> = ({ images }) => {
  return (
    <Stack borderRadius="2xl" height="100vh" overflow="hidden" pos="relative">
      {images.map((src) => (
        <Box
          backgroundImage={src}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          height="100%"
          key={src}
          left={0}
          marginTop={0}
          overflow="hidden"
          pos="absolute"
          top={0}
          width="100%"
        />
      ))}
    </Stack>
  )
}
