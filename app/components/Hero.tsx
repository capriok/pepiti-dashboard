'use client'
import { BackgroundImage, Button, Flex, Image, Mark, Paper, Stack, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import '../globals.css'

export const Hero = () => {
   return (
      <BackgroundImage src='/hero-img.svg'>
         <Flex mih='100vh' maw={1500} mx='auto' align='center' p='0 1em'>
            <Flex
               justify='space-between'
               align='center'
               direction={{ base: 'column', lg: 'row' }}
               gap={{ base: 100, lg: '' }}
               mt={-100}
            >
               <Stack w={{ base: '90%', md: '60%', lg: '35%' }} spacing={40}>
                  <Title size={60}>
                     Best place to view your <Mark color='green.6'>post race stats.</Mark>
                  </Title>

                  <Link href='/dashboard'>
                     <Button size='xl' w='100%' color='green.6'>
                        Go to Dashboard!
                     </Button>
                  </Link>
               </Stack>

               <Flex w={{ base: '90%', md: '60%' }} p='0.5em' align='center'>
                  <Paper
                     radius='lg'
                     style={{
                        borderRadius: '10px',
                        backgroundColor: 'rgb(0,0,0,0.3)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                     }}
                  >
                     <Image alt='dashboard' src={'/dashboard.svg'} />
                  </Paper>
               </Flex>
            </Flex>
         </Flex>
      </BackgroundImage>
   )
}
