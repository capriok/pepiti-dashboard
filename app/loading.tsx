'use client'
import { Grid, Skeleton, Stack } from '@mantine/core'
import { MAX_WIDTH } from './components/Summary'

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
