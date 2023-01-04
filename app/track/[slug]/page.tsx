import { getData } from '../../../utils/getData'
import { TrackStats } from './components/TrackStats'
import { TrackAccordian } from './components/TrackAccordian'

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
   const trackReq = getData(`https://pepiti.com/stats/api/v0/records/track/${slug}`, 60)
   const [{ records, total_laps, track }] = await Promise.all([trackReq])

   return (
      <>
         <TrackStats name={track} records={records} total_laps={total_laps} />
         <TrackAccordian name={track} records={records} total_laps={total_laps} />
      </>
   )
}
