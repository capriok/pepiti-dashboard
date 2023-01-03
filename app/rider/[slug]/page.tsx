import { getData } from '../../../utils/getData'
import { LineChart } from './LineChart'
import { ProfileCard } from './ProfileCard'

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
   const riderData = getData(`https://pepiti.com/stats/api/v0/rider/${slug}`, 60)
   const recentRacesData = getData(`https://pepiti.com/stats/api/v0/rider/${slug}/records`, 60)

   const [riderRecord, recentRaces] = await Promise.all([riderData, recentRacesData])

   return (
      <>
         <ProfileCard riderRecord={riderRecord} />
         <LineChart recentRaces={recentRaces.records} />
      </>
   )
}
