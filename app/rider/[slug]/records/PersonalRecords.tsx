'use client'
import { Badge, Card, Divider, Stack, Table, Text, TextInput, Title } from '@mantine/core'
import React, { useState } from 'react'
import { TrackRecord } from '../../../../types'
import { formatLapTimes } from '../../../../utils/formatLapTimes'
import { handleBikeColor } from '../../../../utils/handleBikeColor'

export const PersonalRecords = ({ personalRecords }: { personalRecords: TrackRecord[] }) => {
   const [search, setSearch] = useState('')

   return (
      <Stack spacing='md'>
         <TextInput
            placeholder='Search for track...'
            label='Track'
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
         />
         {!personalRecords[0] && (
            <Text size='xl' align='center' opacity={0.6}>
               No records...
            </Text>
         )}
         {personalRecords
            .filter((record) => record.track.toLowerCase().includes(search.toLowerCase()))
            .map((record, idx) => {
               const timestamp = record._id.slice(0, 8)
               const date = new Date(parseInt(timestamp, 16) * 1000)

               return (
                  <Card key={idx} radius='md'>
                     <Card.Section p='lg'>
                        <Stack spacing='sm'>
                           <Title>{record.track}</Title>
                           <Text>{date.toLocaleDateString()}</Text>
                           <Badge size='lg' miw='25%' color={handleBikeColor(record.bike)}>
                              {record.bike}
                           </Badge>
                        </Stack>
                     </Card.Section>
                     <Divider />
                     <Table fontSize='md' mt='sm' style={{ borderRadius: 20 }}>
                        <tbody>
                           <tr>
                              <td>Average Speed</td>
                              <td>{record.average_speed.toFixed(2)}</td>
                           </tr>
                           <tr>
                              <td>Split 1</td>
                              <td>{formatLapTimes(record.split_1)}</td>
                           </tr>
                           <tr>
                              <td>Split 2</td>
                              <td>{formatLapTimes(record.split_2)}</td>
                           </tr>
                           <tr>
                              <td>Lap Time</td>
                              <td>{formatLapTimes(record.lap_time)}</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card>
               )
            })}
      </Stack>
   )
}
