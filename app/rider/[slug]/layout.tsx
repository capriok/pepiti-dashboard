'use client'
import Link from 'next/link'
import { IconHomeInfinity } from '@tabler/icons'
import React from 'react'
import { Button } from '@mantine/core'
import { IconButton } from '../../components/IconButton'

export default function RiderPageLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <IconButton>
            <Link href='/'>
               <IconHomeInfinity color='lime' />
            </Link>
         </IconButton>
         {children}
      </>
   )
}
