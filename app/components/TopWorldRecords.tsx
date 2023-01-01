'use client'
import { Table, Text, ThemeIcon } from '@mantine/core'
import { IconTrophy } from '@tabler/icons'
import Link from 'next/link'
import { WorldRecords } from '../../types'

interface PositionIconProps {
   position: number
}

export const PositionIcon = ({ position }: PositionIconProps) => {
   const handlePosition = () => {
      switch (position) {
         case 1:
            return { from: 'gold', to: 'yellow' }
         case 2:
            return { from: 'gray', to: 'white' }
         case 3:
            return { from: 'brown', to: 'yellow' }
      }
   }

   return (
      <ThemeIcon
         size='lg'
         variant='gradient'
         gradient={{ from: handlePosition()?.from as string, to: handlePosition()?.to as string }}
      >
         <IconTrophy />
      </ThemeIcon>
   )
}

export const TopWorldRecords = ({ worldRecords }: { worldRecords: WorldRecords }) => {
   const riderGuids = Object.keys(worldRecords)
   const rows = riderGuids.slice(0, 5).map((guid, idx) => (
      <tr key={guid}>
         <td style={{ height: '50px' }}>
            {idx === 0 || idx === 1 || idx === 2 ? (
               <PositionIcon position={idx + 1} />
            ) : (
               <Text pl='sm'>{idx + 1}.</Text>
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
         <Text size='sm' ml='sm' opacity={0.75}>
            World Records
         </Text>
         <Table bg='rgba(255,255,255,0.025)' style={{ borderRadius: '15px', borderCollapse: 'collapse' }}>
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
