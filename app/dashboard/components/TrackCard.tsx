'use client'
import { Badge, Card, Group, Table, Text, Title } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import Link from 'next/link'
import { Track } from '../../../types'
import { formatLapTimes } from '../../../utils/formatLapTimes'

export const MOBILE_WIDTH = 1000

export const TrackCard = ({ name, records, total_laps }: Track) => {
   const { width } = useViewportSize()
   const rows = records?.map((rec, idx) => {
      return (
         <tr key={idx}>
            <td>
               <Link href={`/rider/${rec.rider_guid}`}>
                  <Text fw={700}>{rec.rider_name}</Text>
               </Link>
            </td>
            <td>{formatLapTimes(rec.lap_time)}</td>
            {width > MOBILE_WIDTH && (
               <>
                  <td>{rec.average_speed.toFixed(1)}</td>
                  <td>{formatLapTimes(rec.split_1)}</td>
                  <td>{formatLapTimes(rec.split_2)}</td>
               </>
            )}
            <td>{rec.bike}</td>
         </tr>
      )
   })

   return (
      <Card shadow="sm" radius="lg" h="100%" style={{ overflowY: 'auto' }}>
         <Card.Section withBorder inheritPadding py="sm">
            <Group position="apart">
               <Group align="baseline">
                  <Title order={2}>
                     <Link href={`/track/${name}`}>{name}</Link>
                  </Title>
                  <Text fz="sm" c="lightgrey">
                     Top 10
                  </Text>
               </Group>
               <Badge size="lg" color="teal">
                  Total Laps: {total_laps.toLocaleString()}
               </Badge>
            </Group>
         </Card.Section>
         <Table fontSize="md" mt="0.5em">
            <thead>
               <tr style={{ backgroundColor: 'rgb(255,255,255,0.05)' }}>
                  <th style={{ borderTopLeftRadius: '15px' }}>Name</th>
                  <th>Lap Time</th>
                  {width > MOBILE_WIDTH && (
                     <>
                        <th>Avg Speed</th>
                        <th>Split 1</th>
                        <th>Split 2</th>
                     </>
                  )}
                  <th style={{ borderTopRightRadius: '15px' }}>Bike</th>
               </tr>
            </thead>
            <tbody>{rows}</tbody>
         </Table>
      </Card>
   )
}
