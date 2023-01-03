'use client'
import { Card, Grid, Paper, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import { FastestLap, TrackRecord } from '../../../../types'
import { formatLapTimes } from '../../../../utils/formatLapTimes'

export const FastestLapCard = ({ fastestLap, raceNum }: { fastestLap: FastestLap; raceNum: number }) => {
   return (
      //   <Card>
      //      <Card.Section>
      // {/* {Object.keys(fastestLap).map((lap, idx) => ( */}
      <Stack mt='md'>
         <Title order={2}>Race #{raceNum}</Title>
         <Title order={4}>Fastest Lap</Title>
         <Grid>
            <Grid.Col span='auto'>
               <Paper p='xl' h='100%'>
                  <Text>Lap Time</Text>
                  <Title order={3}>
                     {typeof fastestLap.LapTime !== 'string'
                        ? formatLapTimes(fastestLap.LapTime as number)
                        : fastestLap.LapTime}
                  </Title>
               </Paper>
            </Grid.Col>

            <Grid.Col span='auto'>
               <Paper p='xl' h='100%'>
                  <Text>Lap</Text>
                  <Title order={3}>#{fastestLap.Lap}</Title>
               </Paper>
            </Grid.Col>

            <Grid.Col span='auto'>
               <Paper p='xl' h='100%'>
                  <Text>Position</Text>
                  <Title order={3}>{fastestLap.Pos}</Title>
               </Paper>
            </Grid.Col>

            <Grid.Col span='auto'>
               <Paper p='xl' h='100%'>
                  <Text>Average Speed</Text>

                  <Title order={3}>{fastestLap.Speed ? fastestLap.Speed.toFixed(2) : '-'}</Title>
               </Paper>
            </Grid.Col>
         </Grid>
      </Stack>
      // {/* ))} */}
      //  {/* </Card.Section>
      //   </Card> */}
   )
}
