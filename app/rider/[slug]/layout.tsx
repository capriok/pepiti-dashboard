'use client'
import { Drawer } from '@mantine/core'
import { IconLayoutSidebarLeftExpand } from '@tabler/icons'
import Link from 'next/link'
import { useState } from 'react'
import { IconButton } from '../../components/IconButton'
import { LinkHomeButton } from '../../components/LinkHomeButton'
import { PageLayout } from '../components/PageLayout'
import { Sidebar } from '../components/Sidebar'
import styles from './RiderNavBar.module.css'

export default function RiderPageLayout({
   children,
   params,
}: {
   children: React.ReactNode
   params: { slug: string }
}) {
   const [open, setOpen] = useState(false)

   return (
      <>
         <div className={styles.navBar}>
            <div className={styles.container}>
               <div className={styles.sideBarButton}>
                  <IconButton onClick={() => setOpen(true)}>
                     <IconLayoutSidebarLeftExpand color="lime" />
                  </IconButton>
               </div>
               <LinkHomeButton />
            </div>
         </div>

         <Drawer
            className={styles.drawer}
            opened={open}
            onClose={() => setOpen(false)}
            padding="md"
            styles={(theme) => ({ drawer: { backgroundColor: theme.colors.dark[8] } })}
         >
            <Sidebar slug={params.slug} />
         </Drawer>

         <PageLayout sidebar={<Sidebar slug={params.slug} />} content={children} />
         {/* {children} */}
      </>
   )
}
