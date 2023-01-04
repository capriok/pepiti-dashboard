'use client'
import { Avatar, Badge, Card, Group, Table, Text, Title } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import Link from 'next/link'
import { Track, TrackRecord } from '../../../../types'

export const MOBILE_WIDTH = 1000

export const TrackDetails = ({ name, records, total_laps }: Track) => {
   let skips: any = {}
   const bikeRecords: Array<{ count: number; bike: string }> = []

   records.map(({ bike }) => {
      if (skips[bike]) return

      let count = 0
      records.forEach((r: any) => r.bike === bike && count++)
      bikeRecords.push({ count, bike })

      skips[bike] = bike
   })

   skips = {}
   const categoryRecords: Array<{ count: number; category: string }> = []
   records.map(({ category }) => {
      if (skips[category]) return

      let count = 0
      records.forEach((r: any) => r.category === category && count++)
      categoryRecords.push({ count, category })

      skips[category] = category
   })

   const sortedBikeRecords = bikeRecords.sort((a, b) => b.count - a.count)
   console.log(sortedBikeRecords)

   const sortedCategoryRecords = categoryRecords.sort((a, b) => b.count - a.count)
   console.log(sortedCategoryRecords)

   return (
      <Card shadow="sm" radius="lg" style={{ overflowY: 'auto', marginBottom: '16px' }}>
         <Card.Section withBorder inheritPadding py="sm">
            <Group position="apart">
               <Group position="left">
                  <Avatar color="green" size="lg" radius="md">
                     {name.slice(0, 2)}
                  </Avatar>
                  <Title order={2}>
                     <Link href={`/track/${name}`}>{name}</Link>
                  </Title>
               </Group>
               <Group position="right">
                  <Badge size="lg" color="teal">
                     Total Laps: {total_laps.toLocaleString()}
                  </Badge>
               </Group>
            </Group>
         </Card.Section>
      </Card>
   )
}
