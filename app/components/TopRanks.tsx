'use client'
import { Card, Flex, Group, Table, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { PositionIcon } from './TopWorldRecords'
import styles from './RanksLeaderboards.module.css'
import { TopMMRandSR } from '../../types'

interface TopRanksProps {
   topMMR?: TopMMRandSR
   topSR?: TopMMRandSR
}

export const TopRanks = ({ topMMR, topSR }: TopRanksProps) => {
   const rows = (topMMR ?? topSR)?.riders.slice(0, 5).map((rank, idx) => (
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
            <Text>{topSR ? rank.SR : rank.MMR}</Text>
         </td>
      </tr>
   ))

   return (
      <>
         <Text size='sm' ml='sm' opacity={0.75}>
            {topSR ? 'Top SR' : 'Top MMR'}
         </Text>
         <Table bg='rgba(255,255,255,0.025)' className={styles['table']}>
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
