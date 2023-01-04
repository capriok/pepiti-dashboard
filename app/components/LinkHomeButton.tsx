'use client'

import { IconChartCandle } from '@tabler/icons'
import Link from 'next/link'
import { IconButton } from './IconButton'

export const LinkHomeButton = () => {
   return (
      <Link href='/dashboard'>
         <IconButton>
            <IconChartCandle color='lime' />
         </IconButton>
      </Link>
   )
}
