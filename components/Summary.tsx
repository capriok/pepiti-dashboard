import { Container, Flex, Grid, Group, Paper, Stack, Title } from '@mantine/core'
import { ServicesSummary } from '../types'

const SummaryContainer = ({ summaryNum, title }: { summaryNum: number; title: string }) => {
   return (
      <Paper p='xl' radius='lg' shadow='xl' w='20vw' miw='110px' maw='450px'>
         <Stack align='center' justify='center' h='100%'>
            {title}
            <Title order={3}>{summaryNum.toLocaleString()}</Title>
         </Stack>
      </Paper>
   )
}

export const MAX_WIDTH = '1500px'

export const Summary = ({ summary }: { summary: ServicesSummary }) => {
   return (
      <Stack align='center' spacing='xl'>
         <Title order={2} w='60vw' pt='1em' align='center'>{`Pepiti's Server Summary`}</Title>
         <Grid maw={MAX_WIDTH}>
            <Grid.Col span={4}>
               <SummaryContainer title='Laps' summaryNum={summary.laps} />
            </Grid.Col>
            <Grid.Col span={4}>
               <SummaryContainer title='Riders' summaryNum={summary.unique_riders} />
            </Grid.Col>
            <Grid.Col span={4}>
               <SummaryContainer title='Records' summaryNum={summary.records} />
            </Grid.Col>
         </Grid>
      </Stack>
   )
}
