'use client'
import { Grid } from '@mantine/core'
import React from 'react'

export const PageLayout = ({ sidebar, content }: { sidebar: React.ReactNode; content: React.ReactNode }) => {
   return (
      <Grid w='100vw' maw={1200}>
         <Grid.Col span={3} h='100vh'>
            {sidebar}
         </Grid.Col>
         <Grid.Col span={9}>{content}</Grid.Col>
      </Grid>
   )
}
