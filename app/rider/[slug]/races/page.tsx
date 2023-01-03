import React from 'react'
import { getData } from '../../../../utils/getData'
import { Races } from './Races'

export default async function Page({ params }: { params: { slug: string } }) {
   const races = await getData(`https://pepiti.com/stats/api/v0/rider/${params.slug}/races`, 60)

   return <Races races={races.races} />
}
