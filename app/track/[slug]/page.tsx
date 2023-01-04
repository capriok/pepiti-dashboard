import { getData } from '../../../utils/getData'
import { TrackTable } from './components/TrackTable'
import { TrackDetails } from './components/TrackDetails'

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
   const trackReq = getData(`https://pepiti.com/stats/api/v0/records/track/${slug}`, 60)

   const [{ records, total_laps, track }] = await Promise.all([trackReq])

   return (
      <>
         <TrackDetails name={track} records={records} total_laps={total_laps} />
         <TrackTable name={track} records={records} total_laps={total_laps} />
      </>
   )
}
