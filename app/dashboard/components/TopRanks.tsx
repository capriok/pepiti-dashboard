'use client'
import { Badge, Group, Table, Text } from '@mantine/core'
import Link from 'next/link'
import { PositionIcon } from './TopWorldRecords'
import styles from './RanksLeaderboards.module.css'
import { TopRecordData } from '../../../types'
import { handleBikeColor } from '../../../utils/handleBikeColor'

interface TopRanksProps {
   filterBy: 'SR' | 'MMR' | 'contact' | 'bikes'
   topData?: TopRecordData[]
}

export const TopRanks = ({ topData, filterBy }: TopRanksProps) => {
   const rows = topData?.map((rank, idx) => (
      <tr key={idx}>
         <td className={styles['t-data']}>
            {idx === 0 || idx === 1 || idx === 2 ? (
               <PositionIcon position={idx + 1} />
            ) : (
               <Text pl='sm'>{idx + 1}.</Text>
            )}
         </td>
         <td>
            {filterBy === 'bikes' ? (
               <Badge color={handleBikeColor(rank.name)}>
                  <Text>{rank.name}</Text>
               </Badge>
            ) : (
               <Link href={`/rider/${rank._id}`}>
                  <Text>{rank.name}</Text>
               </Link>
            )}
         </td>
         <td>
            <Text>{filterBy === 'bikes' ? rank.laps.toLocaleString() : rank[filterBy]}</Text>
         </td>
      </tr>
   ))

   return (
      <>
         <Text size='sm' ml='sm' opacity={0.75}>
            {`Top ${filterBy[0].toUpperCase() + filterBy.slice(1, filterBy.length)}`}
         </Text>
         <Table bg='rgba(255,255,255,0.025)' className={styles.table} maw='95vw' mx='auto'>
            <thead>
               <tr style={{ backgroundColor: 'rgb(255,255,255,0.05)' }}>
                  <th style={{ borderTopLeftRadius: '15px', padding: '1em' }}>Rank</th>
                  <th>Rider</th>
                  <th style={{ borderTopRightRadius: '15px' }}>{filterBy === 'bikes' ? 'Laps' : 'Amount'}</th>
               </tr>
            </thead>
            <tbody>{rows}</tbody>
         </Table>
      </>
   )
}
