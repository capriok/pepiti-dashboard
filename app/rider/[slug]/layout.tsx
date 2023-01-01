'use client'
import Link from 'next/link'
import { IconHomeInfinity } from '@tabler/icons'
import React from 'react'
import { Button } from '@mantine/core'

export default function RiderPageLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <Button
            h={50}
            radius='md'
            pos='absolute'
            color='green'
            right={20}
            top={20}
            styles={(theme) => ({
               root: {
                  backgroundColor: theme.colors.dark[4],
                  filter: 'drop-shadow(0 4px 5px rgb(0,0,0,0.4))',
                  zIndex: 100,
               },
            })}
         >
            <Link href='/'>
               <IconHomeInfinity color='lime' />
            </Link>
         </Button>
         {children}
      </>
   )
}
