import { Sidebar } from './components/Sidebar'
import { Dashboard } from './components/Dashboard'
import './globals.css'

async function getTrackRecords() {
   const tracksRes = await fetch('https://pepiti.com/stats/api/v0/records', { next: { revalidate: 10 } })
   const tracks = await tracksRes.json()
   return tracks
}

async function getServerSummary() {
   const summaryRes = await fetch('https://pepiti.com/stats/api/v0/summary', { next: { revalidate: 10 } })
   const summary = await summaryRes.json()
   return summary
}

async function getWorldRecords() {
   const worldRecordsRes = await fetch('https://pepiti.com/stats/api/v0/top_riders', { next: { revalidate: 10 } })
   const worldRecords = await worldRecordsRes.json()
   return worldRecords
}

async function getMMR() {
   const topMMRRes = await fetch('https://pepiti.com/stats/api/v0/top_mmr', { next: { revalidate: 10 } })
   const topMMR = await topMMRRes.json()
   return topMMR
}

async function getSR() {
   const topSRRes = await fetch('https://pepiti.com/stats/api/v0/top_sr', { next: { revalidate: 10 } })
   const topSR = await topSRRes.json()
   return topSR
}

export default async function Page() {
   const tracksData = getTrackRecords()
   const summaryData = getServerSummary()
   const worldRecordsData = getWorldRecords()
   const topMMRData = getMMR()
   const topSRData = getSR()

   const [tracks, summary, worldRecords, topMMR, topSR] = await Promise.all([
      tracksData,
      summaryData,
      worldRecordsData,
      topMMRData,
      topSRData,
   ])

   return (
      <>
         <Sidebar />
         <div style={{ maxWidth: '100vw' }}>
            <Dashboard tracks={tracks} summary={summary} worldRecords={worldRecords} topSR={topSR} topMMR={topMMR} />
         </div>
      </>
   )
}
