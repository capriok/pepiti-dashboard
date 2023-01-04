'use client'
import { Avatar, Badge, Card, Grid, Group, Table, Text, Title } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import Link from 'next/link'
import { Track, TrackRecord } from '../../../types'

export const MOBILE_WIDTH = 1000

export const TrackStats = ({ name, records, total_laps }: Track) => {
   let skips: { [key: string]: string } = {}
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

   const sortedCategoryRecords = categoryRecords.sort((a, b) => b.count - a.count)

   const averageSpeed = records.reduce((acc: any, val: any) => {
      return acc + val.average_speed / records.length
   }, 0)

   return (
      <Card shadow="sm" radius="lg" style={{ overflowY: 'auto', marginBottom: '16px' }}>
         <Card.Section withBorder inheritPadding py="sm">
            <Group position="apart">
               <Group position="left">
                  <Avatar color="green" size="lg" radius="md">
                     {name.slice(0, 2)}
                  </Avatar>
                  <Title order={2}>{name}</Title>
               </Group>
               <Group position="right">
                  <Badge size="lg" color="teal">
                     Total Laps: {total_laps.toLocaleString()}
                  </Badge>
               </Group>
            </Group>
         </Card.Section>
         <Grid align="center">
            <Grid.Col span={6}>
               <br />
               <Text>Most used Category:</Text>
               <Title order={3}>{sortedCategoryRecords[0].category}</Title>
               <br />
               <Text>Most used Bike:</Text>
               <Title order={2}>{sortedBikeRecords[0].bike}</Title>
               <br />
               <Text>Average Speed:</Text>
               <Title order={2}>{averageSpeed.toFixed(2)}</Title>
            </Grid.Col>
         </Grid>
      </Card>
   )
}
