'use client'
import { Badge, Card, Group, Table, Text, Title } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import Link from 'next/link'
import { Track } from '../../types'
import { formatLapTimes } from '../../utils/formatLapTimes'

export const MOBILE_WIDTH = 1000

export const TrackCard = ({ name, records, total_laps }: Track) => {
   const { width } = useViewportSize()
   const rows = records?.map((rec, idx) => {
      return (
         <tr
            key={idx}
            // style={{
            //    background:
            //       idx === 0
            //          ? 'linear-gradient(90deg, rgba(255,221,0,0.4) 0%, rgba(255,255,255,0) 18%)'
            //          : idx === 1
            //          ? 'linear-gradient(90deg, rgba(221,221,221,0.2) 0%, rgba(255,255,255,0) 18%)'
            //          : idx === 2
            //          ? 'linear-gradient(90deg, rgba(200,173,0,0.2) 0%, rgba(255,255,255,0) 18%)'
            //          : 'none',
            // }}
         >
            <td>
               <Link href={`/rider/${rec.rider_guid}`}>
                  <Text fw={700}>{rec.rider_name}</Text>
               </Link>
            </td>
            <td>{rec.bike}</td>
            {width > MOBILE_WIDTH && (
               <>
                  <td>{rec.average_speed.toFixed(1)}</td>
                  <td>{formatLapTimes(rec.split_1)}</td>
                  <td>{formatLapTimes(rec.split_2)}</td>
               </>
            )}
            <td>{formatLapTimes(rec.lap_time)}</td>
         </tr>
      )
   })

   return (
      <Card shadow='sm' radius='lg'>
         <Card.Section withBorder inheritPadding py='sm'>
            <Group position='apart'>
               <Title order={2}>{name}</Title>
               <Badge size='lg' color='teal'>
                  Total Laps: {total_laps}
               </Badge>
            </Group>
         </Card.Section>
         <Table fontSize='md' mt='0.5em'>
            <thead>
               <tr style={{ backgroundColor: 'rgb(255,255,255,0.05)' }}>
                  <th style={{ borderTopLeftRadius: '15px' }}>Name</th>
                  <th>Bike</th>
                  {width > 700 && (
                     <>
                        <th>Avg Speed</th>
                        <th>Split 1</th>
                        <th>Split 2</th>
                     </>
                  )}
                  <th style={{ borderTopRightRadius: '15px' }}>Lap Time</th>
               </tr>
            </thead>
            <tbody>{rows}</tbody>
         </Table>
      </Card>
   )
}
