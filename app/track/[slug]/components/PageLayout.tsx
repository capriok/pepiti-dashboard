'use client'
import { Grid } from '@mantine/core'
import React from 'react'
import styles from './PageLayout.module.css'

export const PageLayout = ({
   sidebar,
   content,
}: {
   sidebar: React.ReactNode
   content: React.ReactNode
}) => {
   return (
      <Grid w="100%" maw={1500}>
         <Grid.Col span={3} mih="100vh" className={styles.sidebarColumn}>
            {sidebar}
         </Grid.Col>
         <Grid.Col span={'auto'} mih="100vh">
            {content}
         </Grid.Col>
      </Grid>
   )
}
