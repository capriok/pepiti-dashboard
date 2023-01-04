import { Sidebar } from './components/Sidebar'
import ServerSummary from './server_components/ServerSummary'
import { Leaderboards } from './server_components/Leaderboards'
import { ServerTracksCarousel } from './server_components/ServerTracksCarousel'
import '../globals.css'

export default async function Page() {
   return (
      <>
         <Sidebar />
         <div style={{ maxWidth: '100vw' }}>
            {/* @ts-expect-error Server Component */}
            <ServerSummary />

            <div style={{ padding: '1rem 0' }}>
               {/* @ts-expect-error Server Component */}
               <Leaderboards />
            </div>

            <div style={{ padding: '1rem 0' }}>
               {/* @ts-expect-error Server Component */}
               <ServerTracksCarousel />
            </div>
         </div>
      </>
   )
}
