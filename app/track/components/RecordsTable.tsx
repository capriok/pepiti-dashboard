'use client'
import {
   Accordion,
   Badge,
   Card,
   Grid,
   Group,
   Input,
   Table,
   Text,
   TextInput,
   Title,
} from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import Link from 'next/link'
import { useState } from 'react'
import { Track } from '../../../types'
import { formatLapTimes } from '../../../utils/formatLapTimes'
import { PositionIcon } from '../../components/PositionIcon'

export const MOBILE_WIDTH = 1000

export const RecordsTable = ({ name, records, total_laps }: Track) => {
   const { width } = useViewportSize()

   const [term, setTerm] = useState('')

   const termRecords = records.filter((rec) =>
      rec.rider_name.toLowerCase().includes(term.toLowerCase())
   )
   const rows = termRecords?.map((rec, idx) => {
      return (
         <tr key={idx}>
            <td style={{ height: '30px' }}>
               {idx === 0 || idx === 1 || idx === 2 ? (
                  <PositionIcon position={idx + 1} />
               ) : (
                  <Text pl="sm">{idx + 1}.</Text>
               )}
            </td>{' '}
            <td>
               <Link href={`/rider/${rec.rider_guid}`}>
                  <Text fw={700}>{rec.rider_name}</Text>
               </Link>
            </td>
            <td>{formatLapTimes(rec.lap_time)}</td>
            {width > MOBILE_WIDTH && (
               <>
                  <td>{rec.average_speed.toFixed(1)}</td>
                  <td>{formatLapTimes(rec.split_1)}</td>
                  <td>{formatLapTimes(rec.split_2)}</td>
               </>
            )}
            <td>{rec.bike}</td>
            <td>
               {rec.race_id ? (
                  <Link href={`/race/${rec.race_id}`}>
                     <Text>See race</Text>
                  </Link>
               ) : (
                  <></>
               )}
            </td>
         </tr>
      )
   })

   return (
      <Card shadow="sm" radius="lg" style={{ overflowY: 'auto' }} mah="850px">
         <Accordion defaultValue="customization" radius="lg">
            <Accordion.Item value="focus-ring">
               <Accordion.Control>
                  <Text>Top 1000 records</Text>
               </Accordion.Control>
               <Accordion.Panel>
                  <TextInput
                     placeholder="Search for name..."
                     label="Name"
                     value={term}
                     onChange={(event) => setTerm(event.currentTarget.value)}
                  />
                  <br />
                  <Table fontSize="md" mt="0.5em">
                     <thead>
                        <tr style={{ backgroundColor: 'rgb(255,255,255,0.05)' }}>
                           <th style={{ borderTopLeftRadius: '15px' }}>Rank</th>
                           <th>Name</th>
                           <th>Lap Time</th>
                           {width > MOBILE_WIDTH && (
                              <>
                                 <th>Avg Speed</th>
                                 <th>Split 1</th>
                                 <th>Split 2</th>
                              </>
                           )}
                           <th>Bike</th>
                           <th style={{ borderTopRightRadius: '15px' }}>Race</th>
                        </tr>
                     </thead>
                     <tbody>{rows}</tbody>
                  </Table>
               </Accordion.Panel>
            </Accordion.Item>
         </Accordion>
      </Card>
   )
}
