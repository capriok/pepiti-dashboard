'use client'
import { IconLayoutSidebarLeftExpand } from '@tabler/icons'
import Link from 'next/link'
import { IconButton } from '../../components/IconButton'
import { LinkHomeButton } from '../../components/LinkHomeButton'
import { PageLayout } from './components/PageLayout'
import styles from './RiderNavBar.module.css'

export default function RiderPageLayout({ children, params }: { children: React.ReactNode; params: { slug: string } }) {
   return (
      <>
         <div className={styles.navBar}>
            <div className={styles.container}>
               <IconButton>
                  <IconLayoutSidebarLeftExpand color='lime' />
               </IconButton>
               <LinkHomeButton />
            </div>
         </div>
         <PageLayout sidebar={<Link href={`/rider/${params.slug}/records`}>Records</Link>} content={children} />
         {/* {children} */}
      </>
   )
}
