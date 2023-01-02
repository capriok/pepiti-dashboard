'use client'

import { Stack } from '@mantine/core'
import React from 'react'

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
   return (
      <Stack mih='100vh' justify='space-around'>
         {children}
      </Stack>
   )
}
