import { IconHomeLink } from '@tabler/icons'
import Link from 'next/link'
import styles from './HomeButton.module.css'

export const HomeButton = () => {
   return (
      <Link href='/' className={styles['home-btn']}>
         <IconHomeLink />
      </Link>
   )
}
