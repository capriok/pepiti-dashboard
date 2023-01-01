'use client'
import { Flex, Grid, Table, Tabs } from '@mantine/core'
import { TopMMRandSR, WorldRecords } from '../../types'
import { MAX_WIDTH } from './Summary'
import { TopRanks } from './TopRanks'
import { TopWorldRecords } from './TopWorldRecords'

export interface LeaderboardsProps {
   worldRecords: WorldRecords
   topMMR: TopMMRandSR
   topSR: TopMMRandSR
}

export const Leaderboards = ({ worldRecords, topMMR, topSR }: LeaderboardsProps) => {
   return (
      <Grid p='0 1rem' mx='auto' w='100vw' maw={MAX_WIDTH}>
         <Grid.Col lg={4}>
            <TopWorldRecords worldRecords={worldRecords} />
         </Grid.Col>
         <Grid.Col lg={4}>
            <TopRanks topMMR={topMMR} />
         </Grid.Col>
         <Grid.Col lg={4}>
            <TopRanks topSR={topSR} />
         </Grid.Col>
      </Grid>

      // <Tabs defaultValue='world-records' h='35%'>
      //    <Tabs.List grow>
      //       <Tabs.Tab value='world-records'>Most World Records</Tabs.Tab>
      //       <Tabs.Tab value='mmr'>MMR</Tabs.Tab>
      //       <Tabs.Tab value='sr'>SR</Tabs.Tab>
      //    </Tabs.List>

      //    <Tabs.Panel value='world-records' h='100%'>
      //       <TopWorldRecords worldRecords={worldRecords} />
      //    </Tabs.Panel>

      //    <Tabs.Panel value='mmr' h='100%'>
      //       <TopRanks topMMR={topMMR} />
      //    </Tabs.Panel>

      //    <Tabs.Panel value='sr' h='100%'>
      //       <TopRanks topSR={topSR} />
      //    </Tabs.Panel>
      // </Tabs>
   )
}
