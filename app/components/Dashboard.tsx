'use client'

import { Stack } from '@mantine/core'
import { DashboardProps } from '../../types'
import { Leaderboards } from './Leaderboards'
import { ServerTracksCarousel } from './ServerTracksCarousel'
import { Summary } from './Summary'

export const Dashboard = ({ summary, worldRecords, topMMR, topSR, tracks }: DashboardProps) => {
   return (
      <Stack mih='100vh' justify='space-around'>
         <Summary summary={summary} />

         <Leaderboards worldRecords={worldRecords} topMMR={topMMR} topSR={topSR} />

         <ServerTracksCarousel tracks={tracks} />
      </Stack>
   )
}
