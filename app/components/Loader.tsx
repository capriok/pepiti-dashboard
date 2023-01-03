'use client'
import { Title } from '@mantine/core'
import styles from './Loader.module.css'

interface LoaderProps {
   withTitle?: boolean
   text?: string
   variant?: 'ring' | 'circleDots'
}

export default function Loader({ withTitle = true, text = 'Loading...', variant = 'ring' }: LoaderProps) {
   return (
      <div className={styles.container}>
         {withTitle && <Title order={3}>{text}</Title>}

         {/* Loader */}
         {variant === 'ring' && (
            <div className={styles.ring}>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         )}

         {variant === 'circleDots' && (
            <div className={styles.circleDots}>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         )}
      </div>
   )
}
