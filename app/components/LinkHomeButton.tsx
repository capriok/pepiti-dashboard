'use client'

import { IconHomeInfinity } from '@tabler/icons'
import Link from 'next/link'
import { IconButton } from './IconButton'

export const LinkHomeButton = () => {
   return (
      <Link href='/'>
         <IconButton>
            <IconHomeInfinity color='lime' />
         </IconButton>
      </Link>
   )
}
