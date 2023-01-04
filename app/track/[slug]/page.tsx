import { getData } from '../../../utils/getData'
import { TrackStats } from '../components/TrackStats'
import { RecordsTable } from '../components/RecordsTable'

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
   const request = getData(`https://pepiti.com/stats/api/v0/records/track/${slug}`, 60)
   const [{ records, total_laps, track }] = await Promise.all([request])

   return (
      <>
         <TrackStats name={track} records={records} total_laps={total_laps} />
         <RecordsTable name={track} records={records} total_laps={total_laps} />
      </>
   )
}
