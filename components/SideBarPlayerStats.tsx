import { Avatar, Button, Group, Select, Stack, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { RiderRecord } from '../types'
import styles from './SideBarPlayerStats.module.css'

export interface PlayerData {
   _id: string
   MMR: number
   SR: number
   name: string
   contact: number
}

export const SideBarPlayerStats = () => {
   const [searchVal, setSearchVal] = useState('')
   const [searchData, setSearchData] = useState([])
   const [selectedID, setSelectedID] = useState<string | null>('')
   const [playerData, setPlayerData] = useState<RiderRecord | null>(null)

   const fetchPlayerData = async () => {
      const res = await fetch(`https://pepiti.com/stats/api/v0/search/rider/${searchVal}`)
      const playerSearchData = await res.json()
      const resultsForSearch = playerSearchData.results.reduce(
         (acc: { label: string; value: string }[], d: PlayerData) => {
            acc.push({ label: d.name, value: d._id })

            return acc
         },
         []
      )

      // console.log('Searches...')

      setSearchData(resultsForSearch)
   }

   const fetchRiderRecord = async () => {
      const riderRecord = await fetch(`https://pepiti.com/stats/api/v0/rider/${selectedID}`)
      const data = await riderRecord.json()

      setPlayerData(data)
   }

   useEffect(() => {
      if (searchVal.length >= 2) {
         fetchPlayerData()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchVal])

   useEffect(() => {
      if (selectedID) {
         fetchRiderRecord()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedID])

   return (
      <Stack p='0 1em'>
         <Select
            label='Track a player'
            description='Case sensitive'
            autoFocus={false}
            error={searchVal.length && searchVal.length <= 1 ? 'Enter 2 or more characters' : false}
            searchable
            clearable
            allowDeselect
            maxDropdownHeight={250}
            onChange={(e) => setSelectedID(e)}
            searchValue={searchVal}
            onSearchChange={setSearchVal}
            nothingFound="No player's found"
            placeholder='Search by player name...'
            data={searchData}
         />

         {!playerData ? (
            <Title order={4}>Search for a player above! ☝️</Title>
         ) : (
            <div className={styles['stats-container']}>
               <Avatar size='xl' m='0 auto' radius='lg' variant='gradient' gradient={{ from: 'green', to: 'violet' }}>
                  {playerData.name.slice(0, 2)}
               </Avatar>
               <div className={styles['player-link']}>
                  <Link href={`/rider/${playerData._id}`}>
                     <Title order={2} align='center'>
                        {playerData.name}
                     </Title>
                  </Link>
               </div>

               <Group>
                  <Text>Laps: </Text>
                  <Title order={4}>{playerData.total_laps}</Title>
               </Group>
               <Group>
                  <Text>Avg Speed: </Text>
                  <Title order={4}>{playerData.average_speed.toFixed(2)}</Title>
               </Group>
               <Group>
                  <Text>MMR: </Text>
                  <Title order={4}>{playerData.MMR}</Title>
               </Group>
               <Group>
                  <Text>SR: </Text>
                  <Title order={4}>{playerData.SR}</Title>
               </Group>

               <Group>
                  <Text>World Records: </Text>
                  <Title order={4}>
                     {Object.values(playerData.world_records).reduce((acc, val) => {
                        return acc + val
                     }, 0)}
                  </Title>
               </Group>
               <Group>
                  <Text>Favorite Bike: </Text>
                  <Title order={4}>{playerData.favorite_bike.name}</Title>
               </Group>
               <Group>
                  <Text>Laps on Bike: </Text>
                  <Title order={4}>{playerData.favorite_bike.laps}</Title>
               </Group>
            </div>
         )}

         <Button variant='gradient' gradient={{ from: 'green', to: 'blue' }}>
            Donate to us!
         </Button>
      </Stack>
   )
}
