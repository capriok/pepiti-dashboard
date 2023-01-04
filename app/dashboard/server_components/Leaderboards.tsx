import { Grid } from '@mantine/core'
import { WorldRecords } from '../../../types'
import { getData } from '../../../utils/getData'
import { MAX_WIDTH } from '../components/Summary'
import { TopRanks } from '../components/TopRanks'
import { TopWorldRecords } from '../components/TopWorldRecords'
import styles from './Leaderboards.module.css'

// export interface LeaderboardsProps {
//    worldRecords: WorldRecords
//    topMMR: TopRiderData
//    topSR: TopRiderData
// }

export const Leaderboards = async () => {
   const worldRecordsData = getData('https://pepiti.com/stats/api/v0/top/riders', 10)
   const topMMRData = getData('https://pepiti.com/stats/api/v0/top/mmr', 10)
   const topSRData = getData('https://pepiti.com/stats/api/v0/top/sr', 10)
   const topContactsData = getData('https://pepiti.com/stats/api/v0/top/contacts', 10)
   const topBikesData = getData('https://pepiti.com/stats/api/v0/top/bikes', 10)

   const [worldRecords, topMMR, topSR, topContacts, topBikes] = await Promise.all([
      worldRecordsData,
      topMMRData,
      topSRData,
      topContactsData,
      topBikesData,
   ])

   return (
      <div className={styles.leaderboardsContainer}>
         <div className={styles.leaderboardsCol}>
            <TopWorldRecords worldRecords={worldRecords.riders} />
         </div>
         <div className={styles.leaderboardsCol}>
            <TopRanks topData={topMMR.riders} filterBy='MMR' />
         </div>
         <div className={styles.leaderboardsCol}>
            <TopRanks topData={topSR.riders} filterBy='SR' />
         </div>
         <div className={styles.leaderboardsCol}>
            <TopRanks topData={topContacts.riders} filterBy='contact' />
         </div>
         <div className={styles.leaderboardsCol}>
            <TopRanks topData={topBikes.bikes} filterBy='bikes' />
         </div>
      </div>
   )
}
