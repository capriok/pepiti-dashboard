'use client'
import { Grid, Skeleton, Stack } from '@mantine/core'
import { ServicesSummary } from '../types'
import { Leaderboards } from './components/Leaderboards'
import LoadingSpinner from './components/Loader'
import { ServerTracksCarousel } from './components/ServerTracksCarousel'
import { MAX_WIDTH, Summary } from './components/Summary'

const fakeSummary: ServicesSummary = { laps: 100, records: 1000, races: 1000, unique_riders: 1000 }

export default function Page() {
   return (
      <Stack mih='100vh' justify='space-around'>
         <Grid p='0 1rem' mx='auto' w='100vw' maw={MAX_WIDTH}>
            <Grid.Col lg={3}>
               <Skeleton height={150} radius='lg' />
            </Grid.Col>
            <Grid.Col lg={3}>
               <Skeleton height={150} radius='lg' />
            </Grid.Col>
            <Grid.Col lg={3}>
               <Skeleton height={150} radius='lg' />
            </Grid.Col>
            <Grid.Col lg={3}>
               <Skeleton height={150} radius='lg' />
            </Grid.Col>
         </Grid>

         <Grid p='0 1rem' mx='auto' w='100vw' maw={MAX_WIDTH}>
            <Grid.Col lg={4}>
               <Skeleton height={250} radius='lg' />
            </Grid.Col>
            <Grid.Col lg={4}>
               <Skeleton height={250} radius='lg' />
            </Grid.Col>
            <Grid.Col lg={4}>
               <Skeleton height={250} radius='lg' />
            </Grid.Col>
         </Grid>

         <Skeleton height={400} />
      </Stack>
   )
}
