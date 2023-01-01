import { RiderRecord } from '../../../types'
import { LineChart } from './LineChart'
import { ProfileCard } from './ProfileCard'
import { TrackRecord } from '../../../types'

async function getRiderData(slug: string) {
   const res = await fetch(`https://pepiti.com/stats/api/v0/rider/${slug}`)
   const riderRecord = await res.json()

   return riderRecord
}

async function getRiderRecentRaces(slug: string) {
   const res = await fetch(`https://pepiti.com/stats/api/v0/rider/${slug}/records`)
   const { records } = await res.json()

   return records
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
   const riderData: RiderRecord = await getRiderData(slug)
   const recentRaces: TrackRecord[] = await getRiderRecentRaces(slug)

   return (
      <>
         <ProfileCard riderRecord={riderData} />
         <LineChart recentRaces={recentRaces} />
      </>
   )
}
