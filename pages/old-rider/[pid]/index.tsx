import { Avatar, Flex, Grid, Group, Stack, Title } from '@mantine/core'
import Link from 'next/link'
import { HomeButton } from '../../../components/HomeButton'
import { RiderRecord } from '../../../types'

export const Page = ({ riderRecord }: { riderRecord: RiderRecord }) => {
   if (!riderRecord._id) {
      return (
         <>
            <HomeButton />
            <Stack align='center' justify='center' h='100vh'>
               <Title>Sorry no player found here...</Title>
               <Link href='/'>Return Home</Link>
            </Stack>
         </>
      )
   }

   return (
      <>
         <HomeButton />

         <Stack align='center' p='xl'>
            <Avatar size='xl'>{riderRecord.name.slice(0, 2)}</Avatar>
            <Title>{riderRecord.name}</Title>

            <Group>
               <Title order={3}>MMR - {riderRecord.MMR}</Title>
               <Title order={3}>SR - {riderRecord.SR}</Title>
            </Group>
            <Title>Total Laps: {riderRecord.total_laps}</Title>

            <Title order={4}>Favorite Bike: {riderRecord.favorite_bike.name}</Title>
            <Title order={4}>Laps on Bike - {riderRecord.favorite_bike.laps}</Title>
            <Title order={3}>Avg Speed: {riderRecord.average_speed.toFixed(2)}</Title>
            <Grid>
               {Object.keys(riderRecord.world_records).map((recCategory, idx) => (
                  <Grid.Col key={idx} lg={4} sm={6}>
                     <Flex
                        direction='column'
                        h={200}
                        w={200}
                        justify='center'
                        gap={20}
                        m='0 auto'
                        style={{
                           borderRadius: 20,
                           border: '1px solid lime',
                        }}
                     >
                        <Title order={3} align='center'>
                           {recCategory}
                        </Title>
                        <Title align='center'>{riderRecord.world_records[recCategory]}</Title>
                     </Flex>
                  </Grid.Col>
               ))}
            </Grid>
         </Stack>
      </>
   )
}

export async function getServerSideProps(context: any) {
   const res = await fetch(`https://pepiti.com/stats/api/v0/rider/${context.params.pid}`)
   const riderRecord = await res.json()

   return { props: { riderRecord } }
}

export default Page
