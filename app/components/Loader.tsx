'use client'
import { Title } from '@mantine/core'
import styles from './Loader.module.css'

export default function LoadingSpinner() {
   return (
      <>
         <Title>Loading...</Title>

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
