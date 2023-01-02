'use client'
import { Title } from '@mantine/core'
import styles from './Loader.module.css'

export default function LoadingSpinner({ withTitle }: { withTitle?: boolean }) {
   return (
      <>
         {withTitle && <Title>Loading...</Title>}

         {/* Loader */}
         <div className={styles['lds-ring']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </>
   )
}
