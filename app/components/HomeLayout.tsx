'use client'
import { BackgroundImage, Box } from '@mantine/core'
import React, { ReactNode } from 'react'

export const HomeLayout = ({ children }: { children: ReactNode }) => {
   return <Box w='100%'>{children}</Box>
}
