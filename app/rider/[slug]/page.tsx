import { LineChart } from './LineChart'
import { ProfileCard } from './ProfileCard'

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
   const riderData = getRiderData(slug)
   const recentRacesData = getRiderRecentRaces(slug)

   const [riderRecord, recentRaces] = await Promise.all([riderData, recentRacesData])

   return (
      <>
         <ProfileCard riderRecord={riderRecord} />
         <LineChart recentRaces={recentRaces} />
      </>
   )
}
