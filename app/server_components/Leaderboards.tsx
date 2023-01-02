import { Grid } from '@mantine/core'
import { TopRiderData, WorldRecords } from '../../types'
import { getData } from '../../utils/getData'
import { MAX_WIDTH } from '../components/Summary'
import { TopRanks } from '../components/TopRanks'
import { TopWorldRecords } from '../components/TopWorldRecords'
import styles from './Leaderboards.module.css'

export interface LeaderboardsProps {
   worldRecords: WorldRecords
   topMMR: TopRiderData
   topSR: TopRiderData
}

export const Leaderboards = async () => {
   const worldRecordsData = getData('https://pepiti.com/stats/api/v0/top/riders', 10)
   const topMMRData = getData('https://pepiti.com/stats/api/v0/top/mmr', 10)
   const topSRData = getData('https://pepiti.com/stats/api/v0/top/sr', 10)
   const topContactsData = getData('https://pepiti.com/stats/api/v0/top/contacts', 10)

   const [worldRecords, topMMR, topSR, topContacts] = await Promise.all([
      worldRecordsData,
      topMMRData,
      topSRData,
      topContactsData,
   ])

   return (
      <div className={styles['leaderboards-container']}>
         <div className={styles['leaderboards-col']}>
            <TopWorldRecords worldRecords={worldRecords.riders} />
         </div>
         <div className={styles['leaderboards-col']}>
            <TopRanks topData={topMMR} filterBy='MMR' />
         </div>
         <div className={styles['leaderboards-col']}>
            <TopRanks topData={topSR} filterBy='SR' />
         </div>
         <div className={styles['leaderboards-col']}>
            <TopRanks topData={topContacts} filterBy='contact' />
         </div>
      </div>
   )
}
