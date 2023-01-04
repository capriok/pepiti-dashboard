'use client'
import { Box, Flex } from '@mantine/core'
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
   BarElement,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import { TrackRecord } from '../../../types'
import { MAX_WIDTH } from '../../dashboard/components/Summary'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

export const options = {
   responsive: true,
   plugins: {
      legend: {
         position: 'top' as const,
      },
      title: {
         display: true,
         text: 'Average Speed - Most Recent Races',
      },
   },
}

export const LineChart = ({ recentRaces }: { recentRaces: TrackRecord[] }) => {
   const labels = recentRaces.map((record) => record.bike)
   const data = {
      labels,
      datasets: [
         {
            label: 'Average Speed',
            data: recentRaces.map((record) => record.average_speed),
            borderColor: '#37B24D',
            backgroundColor: 'rgba(55, 178, 77, 0.4)',
            lineTension: 0.3,
         },
      ],
   }

   return (
      <Box mb='md' w='100%' maw={MAX_WIDTH}>
         <Line height={200} options={options} data={data} />
      </Box>
   )
}
