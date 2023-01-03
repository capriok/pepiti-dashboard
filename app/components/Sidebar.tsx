'use client'

import { Drawer } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { IconLayoutSidebarLeftExpand } from '@tabler/icons'
import { useState } from 'react'
import { IconButton } from './IconButton'
import { SideBarPlayerStats } from './SideBarPlayerStats'
import { MOBILE_WIDTH } from './TrackCard'
import styles from '../rider/[slug]/RiderNavBar.module.css'

export const Sidebar = () => {
   const [open, setOpen] = useState(false)
   const { width } = useViewportSize()

   return (
      <>
         <div className={styles.navBar}>
            <div className={styles.container}>
               <IconButton onClick={() => setOpen(true)}>
                  <IconLayoutSidebarLeftExpand color='lime' />
               </IconButton>
            </div>
         </div>

         <Drawer
            opened={open}
            onClose={() => setOpen(false)}
            size={width < MOBILE_WIDTH ? '60vw' : '20%'}
            styles={(theme) => ({
               drawer: {
                  backgroundColor: theme.colors.dark[6],
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
               },
               closeButton: {
                  margin: '1em 1em 0 0',
               },
            })}
         >
            <SideBarPlayerStats />
         </Drawer>
      </>
   )
}
