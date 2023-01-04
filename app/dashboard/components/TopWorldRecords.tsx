'use client'
import { Table, Text, ThemeIcon } from '@mantine/core'
import { IconTrophy } from '@tabler/icons'
import Link from 'next/link'
import { WorldRecords } from '../../../types'
import { PositionIcon } from '../../components/PositionIcon'

export const TopWorldRecords = ({ worldRecords }: { worldRecords: WorldRecords }) => {
   const riderGuids = Object.keys(worldRecords)
   const rows = riderGuids.map((guid, idx) => (
      <tr key={guid}>
         <td style={{ height: '30px' }}>
            {idx === 0 || idx === 1 || idx === 2 ? (
               <PositionIcon position={idx + 1} />
            ) : (
               <Text pl="sm">{idx + 1}.</Text>
            )}
         </td>
         <td>
            <Link href={`/rider/${guid}`}>{worldRecords[guid].name}</Link>
         </td>
         <td>
            <Text>{worldRecords[guid].total}</Text>
         </td>
      </tr>
   ))

   return (
      <>
         <Text size="sm" ml="sm" opacity={0.75}>
            World Records
         </Text>
         <Table
            bg="rgba(255,255,255,0.025)"
            style={{ borderRadius: '15px', borderCollapse: 'collapse' }}
            mx="auto"
            maw="95vw"
         >
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
