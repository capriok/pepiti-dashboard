import { Container, Flex, Group, Paper, Stack, Title } from '@mantine/core'
import { ServicesSummary } from '../types'

const SummaryContainer = ({ summaryNum, title }: { summaryNum: number; title: string }) => {
   return (
      <Paper p='xl' radius='lg' shadow='xl' h='100px' w='100px' withBorder>
         <Stack align='center' justify='center' h='100%'>
            {title}
            <Title order={3}>{summaryNum.toLocaleString()}</Title>
         </Stack>
      </Paper>
   )
}

export const Summary = ({ summary }: { summary: ServicesSummary }) => {
   return (
      <Stack align='center' spacing='xl'>
         <Title order={2}>Server Summary</Title>
         <Group m='0 auto' spacing={'xl'}>
            <SummaryContainer title='Laps' summaryNum={summary.laps} />
            <SummaryContainer title='Riders' summaryNum={summary.unique_riders} />
            <SummaryContainer title='Records' summaryNum={summary.records} />
         </Group>
      </Stack>
   )
}
