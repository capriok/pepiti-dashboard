'use client'
import { Badge, Card, Divider, Stack, Text, TextInput, Title } from '@mantine/core'
import React, { useState } from 'react'
import { RaceData } from '../../../../types'
import { FastestLapCard } from './FastestLapCard'

const MMRBadge = ({ mmr }: { mmr: number }) => {
   return (
      <Badge size='xl' mt='md' color={mmr > 0 ? 'green' : mmr === 0 ? 'orange' : 'red'}>
         MMR: {mmr > 0 ? '+' + mmr : mmr}
      </Badge>
   )
}

export const Races = ({ races }: { races: RaceData[] }) => {
   const [search, setSearch] = useState('')

   return (
      <Stack spacing='md'>
         <TextInput
            placeholder='Search for track...'
            label='Track'
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
         />
         {!races[0] && (
            <Text size='xl' align='center' opacity={0.6}>
               No races...
            </Text>
         )}
         {races
            .filter((race) => race.track.toLowerCase().includes(search.toLowerCase()))
            .map((race, idx) => {
               const timestamp = race._id.slice(0, 8)
               const date = new Date(parseInt(timestamp, 16) * 1000)

               return (
                  <Card key={idx} radius='md'>
                     <Card.Section p='lg'>
                        <Stack spacing='sm'>
                           <Title>{race.track}</Title>
                           <Text>{date.toLocaleDateString()}</Text>
                        </Stack>
                     </Card.Section>
                     <Divider />
                     {!race.Race2 && !race.Race1 && (
                        <Text size='xl' opacity={0.7} mt='md' align='center'>
                           No race data...
                        </Text>
                     )}
                     {race.Race1 && (
                        <>
                           {Object.keys(race.Race1.MMR).map((riderGuid, idx) => (
                              <MMRBadge key={idx} mmr={race.Race1.MMR[riderGuid].total} />
                           ))}
                           {Object.keys(race.Race1.FastestLap).map((riderGuid, idx) => (
                              <FastestLapCard key={idx} fastestLap={race.Race1.FastestLap[riderGuid]} raceNum={1} />
                           ))}
                        </>
                     )}

                     {race.Race2 && (
                        <>
                           {Object.keys(race.Race2.MMR).map((riderGuid) => (
                              <MMRBadge key={idx} mmr={race.Race2.MMR[riderGuid].total} />
                           ))}
                           {Object.keys(race.Race2.FastestLap).map((riderGuid, idx) => (
                              <FastestLapCard key={idx} fastestLap={race.Race2.FastestLap[riderGuid]} raceNum={2} />
                           ))}
                        </>
                     )}
                  </Card>
               )
            })}
      </Stack>
   )
}
