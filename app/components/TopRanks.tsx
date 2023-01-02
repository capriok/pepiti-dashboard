'use client'
import { Table, Text } from '@mantine/core'
import Link from 'next/link'
import { PositionIcon } from './TopWorldRecords'
import styles from './RanksLeaderboards.module.css'
import { TopData } from '../../types'

interface TopRanksProps {
   filterBy: 'SR' | 'MMR' | 'contact'
   topData?: TopData
}

export const TopRanks = ({ topData, filterBy }: TopRanksProps) => {
   const rows = topData?.riders.map((rank, idx) => (
      <tr key={rank._id}>
         <td className={styles['t-data']}>
            {idx === 0 || idx === 1 || idx === 2 ? (
               <PositionIcon position={idx + 1} />
            ) : (
               <Text pl='sm'>{idx + 1}.</Text>
            )}
         </td>
         <td>
            <Link href={`/rider/${rank._id}`}>{rank.name}</Link>
         </td>
         <td>
            <Text>{rank[filterBy]}</Text>
         </td>
      </tr>
   ))

   return (
      <>
         <Text size='sm' ml='sm' opacity={0.75}>
            {`Top ${filterBy[0].toUpperCase() + filterBy.slice(1, filterBy.length)}`}
         </Text>
         <Table bg='rgba(255,255,255,0.025)' className={styles['table']} maw='95vw' mx='auto'>
            <thead>
               <tr style={{ backgroundColor: 'rgb(255,255,255,0.05)' }}>
                  <th style={{ borderTopLeftRadius: '15px', padding: '1em' }}>Rank</th>
                  <th>Rider</th>
                  <th style={{ borderTopRightRadius: '15px' }}>Amount</th>
               </tr>
            </thead>
            <tbody>{rows}</tbody>
         </Table>
      </>
   )
}
