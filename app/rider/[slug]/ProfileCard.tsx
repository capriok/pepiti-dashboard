'use client'
import { Avatar, Card, Grid, Group, Table, Text, Title } from '@mantine/core'
import styles from '../../components/RanksLeaderboards.module.css'
import { RiderRecord } from '../../../types'
import { MAX_WIDTH } from '../../components/Summary'

export const ProfileCard = ({ riderRecord }: { riderRecord: RiderRecord }) => {
   const rows = Object.keys(riderRecord.world_records)?.map((category, idx) => {
      if (category !== 'total' && category !== 'name') {
         return (
            <tr key={idx}>
               <td className={styles['t-data']}>{category}</td>
               <td>
                  <Text>{riderRecord.world_records[category]}</Text>
               </td>
            </tr>
         )
      }
   })

   return (
      <Card w='85vw' maw={MAX_WIDTH} mt='md' shadow='xl' radius='lg'>
         <Card.Section p='xl'>
            <Grid align='center'>
               <Grid.Col span={12} md={2}>
                  <Avatar color='green' size='xl' radius='lg'>
                     {riderRecord.name.slice(0, 2)}
                  </Avatar>
                  <Title order={2}>{riderRecord.name}</Title>
               </Grid.Col>

               <Grid.Col span={'auto'}>
                  <Group align='center'>
                     <Text w={100}>MMR: </Text>
                     <Title order={2}>{riderRecord.MMR}</Title>
                  </Group>
                  <Group align='center'>
                     <Text w={100}>SR: </Text>
                     <Title order={2}>{riderRecord.SR}</Title>
                  </Group>
                  <Group align='center'>
                     <Text w={100}>Total Laps: </Text>
                     <Title order={2}>{riderRecord.total_laps}</Title>
                  </Group>
                  <Group align='center'>
                     <Text w={100}>Avg Speed: </Text>
                     <Title order={2}>{riderRecord.average_speed.toFixed(2)}</Title>
                  </Group>
               </Grid.Col>

               <Grid.Col span={6}>
                  <Text>Favorite Bike:</Text>
                  <Title order={2}>{riderRecord.favorite_bike.name}</Title>
                  <Text>Laps on Bike:</Text>
                  <Title order={3}>{riderRecord.favorite_bike.laps}</Title>
               </Grid.Col>
            </Grid>
         </Card.Section>

         <Title order={3} my='sm'>
            World Records Total: {riderRecord.world_records.total}
         </Title>
         <Title order={3} my='sm'>
            Rider Name: {riderRecord.world_records.name}
         </Title>
         <Table bg='rgba(255,255,255,0.025)' className={styles['table']}>
            <thead>
               <tr style={{ backgroundColor: 'rgb(255,255,255,0.05)' }}>
                  <th style={{ borderTopLeftRadius: '15px' }}>Category</th>
                  <th style={{ borderTopRightRadius: '15px' }}>Amount</th>
               </tr>
            </thead>
            <tbody>{rows}</tbody>
         </Table>
      </Card>
   )
}
