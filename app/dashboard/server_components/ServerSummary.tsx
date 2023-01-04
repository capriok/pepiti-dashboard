import { SummaryStack } from '../components/Summary'

async function getServerSummary() {
   const res = await fetch('https://pepiti.com/stats/api/v0/summary', { next: { revalidate: 10 } })
   const serverSummary = await res.json()

   return serverSummary
}

export default async function ServerSummary() {
   const summary = await getServerSummary()

   return <SummaryStack summary={summary} />
}
