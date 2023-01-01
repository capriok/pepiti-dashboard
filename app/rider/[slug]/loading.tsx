'use client'

import { Flex, Loader, Title } from '@mantine/core'
import LoadingSpinner from '../../components/Loader'

export default function Page() {
   return (
      // <Flex h='100vh' w='100vw' align='center' justify='center' direction='column' gap={50}>
      //    <Title>Loading...</Title>
      //    <Loader variant='bars' color='green' />
      // </Flex>
      <LoadingSpinner />
   )
}
