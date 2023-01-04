'use client'

import { Flex, Stack, Text } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

export const HomeNavBar = () => {
   const [scroll] = useWindowScroll()
   const isScrolling = scroll.y > 0

   return (
      <Stack
         h='100%'
         pos='sticky'
         top={0}
         style={{
            zIndex: 999,
            backdropFilter: isScrolling ? 'blur(20px)' : '',
            backgroundColor: isScrolling ? 'rgb(0,0,0,0.3)' : 'transparent',
         }}
      >
         <Flex w='100%' justify='space-between' mx='auto' maw={1500} p='md'>
            {"Pepiti's Dashboard"}

            <Text>Dashboard</Text>
         </Flex>
      </Stack>
   )
}
