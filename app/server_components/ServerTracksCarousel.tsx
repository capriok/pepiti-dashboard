import { TracksCarousel } from '../components/TracksCarousel'

async function getTrackRecords() {
   const tracksRes = await fetch('https://pepiti.com/stats/api/v0/records', { next: { revalidate: 10 } })
   const tracks = await tracksRes.json()
   return tracks
}

export const ServerTracksCarousel = async () => {
   const topTrackRecords = await getTrackRecords()

   return <TracksCarousel tracks={topTrackRecords} />
}
