import { removeAllListeners } from 'process'
import { getData } from '../../../../utils/getData'
import { PersonalRecords } from './PersonalRecords'

export default async function Page({ params }: { params: { slug: string } }) {
   const personalRecords = await getData(`https://pepiti.com/stats/api/v0/rider/${params.slug}/records`, 30)

   return <PersonalRecords personalRecords={personalRecords.records} />
}
