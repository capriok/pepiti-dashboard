'use client'
import { Avatar, Badge, Button, Group, Select, Stack, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { RiderRecord } from '../../types'
import { handleBikeColor } from '../../utils/handleBikeColor'
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
   const [isFetching, setIsFetching] = useState(false)
   const router = useRouter()

   const fetchPlayerData = async () => {
      setIsFetching(true)
      const res = await fetch(`/api/searchRider?search=${searchVal}`)
      const { results: playerSearchData } = await res.json()
      const resultsForSearch = playerSearchData.map((data: PlayerData) => ({ label: data.name, value: data._id }))

      setSearchData(resultsForSearch)
      setIsFetching(false)

      // startTransition(() => router.refresh())
   }

   const fetchRiderRecord = async () => {
      setIsFetching(true)
      const riderRecord = await fetch(`/api/getRiderData?guid=${selectedID}`)
      const data = await riderRecord.json()
      console.log({ data })

      setPlayerData(data)
      setIsFetching(false)
      // startTransition(() => router.refresh())
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
            onSearchChange={(e) => setSearchVal(e)}
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
               <Link href={`/rider/${playerData._id}`}>
                  <Button
                     w='100%'
                     styles={(theme) => ({
                        root: {
                           background: theme.colors.dark[4],
                           filter: 'drop-shadow(2px 2px 5px rgb(0,0,0,0.1))',
                           ':hover': { background: theme.colors.green[8] },
                        },
                     })}
                  >
                     <Text align='center'>Visit {playerData.name + "'s"} Profile</Text>
                  </Button>
               </Link>

               <Text>
                  Laps: <Title order={4}>{playerData.total_laps}</Title>
               </Text>

               <Text>
                  Avg Speed: <Title order={4}>{playerData.average_speed.toFixed(2)}</Title>
               </Text>

               <Text>
                  MMR: <Title order={4}>{playerData.MMR}</Title>
               </Text>

               <Text>
                  SR: <Title order={4}>{playerData.SR}</Title>
               </Text>

               <Text>
                  World Records:{' '}
                  <Title order={4}>
                     {Object.values(playerData.world_records).reduce((acc, val) => {
                        if (typeof val === 'number') {
                           return acc + val
                        } else {
                           return acc + 0
                        }
                     }, 0)}
                  </Title>
               </Text>

               <Text>
                  Favorite Bike:{' '}
                  <Badge size='lg' color={handleBikeColor(playerData.favorite_bike.name)}>
                     {playerData.favorite_bike.name}
                  </Badge>
               </Text>

               <Text>
                  Laps on Bike: <Title order={4}>{playerData.favorite_bike.laps}</Title>
               </Text>
            </div>
         )}

         <Button variant='gradient' gradient={{ from: 'green', to: 'blue' }}>
            Donate to us!
         </Button>
      </Stack>
   )
}
