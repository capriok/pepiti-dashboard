import { Sidebar } from './components/Sidebar'
import { DashboardProps } from '../types'
import { Dashboard } from './components/Dashboard'
import './globals.css'

async function getRelevantData() {
   const tracksRes = await fetch('https://pepiti.com/stats/api/v0/records', { next: { revalidate: 10 } })
   const tracks = await tracksRes.json()

   const summaryRes = await fetch('https://pepiti.com/stats/api/v0/summary', { next: { revalidate: 10 } })
   const summary = await summaryRes.json()

   const worldRecordsRes = await fetch('https://pepiti.com/stats/api/v0/top_riders', { next: { revalidate: 10 } })
   const worldRecords = await worldRecordsRes.json()

   const topMMRRes = await fetch('https://pepiti.com/stats/api/v0/top_mmr', { next: { revalidate: 10 } })
   const topMMR = await topMMRRes.json()

   const topSRRes = await fetch('https://pepiti.com/stats/api/v0/top_sr', { next: { revalidate: 10 } })
   const topSR = await topSRRes.json()

   return {
      tracks,
      summary,
      worldRecords,
      topMMR,
      topSR,
   }
}

export default async function Page() {
   const relevantData: DashboardProps = await getRelevantData()

   return (
      <>
         <Sidebar />
         <div style={{ maxWidth: '100vw' }}>
            <Dashboard
               tracks={relevantData.tracks}
               summary={relevantData.summary}
               worldRecords={relevantData.worldRecords}
               topSR={relevantData.topSR}
               topMMR={relevantData.topMMR}
            />
         </div>
      </>
   )
}
