import { Card, Flex, Group, Title } from '@mantine/core'
import Link from 'next/link'
import { TopMMRandSR } from '../types'
import { PositionIcon } from './TopWorldRecords'

interface TopRanksProps {
   topMMR?: TopMMRandSR
   topSR?: TopMMRandSR
}

export const TopRanks = ({ topMMR, topSR }: TopRanksProps) => {
   return (
      <Flex direction='column' h='100%' justify='space-around' p='xl'>
         {/* If there is no topMMR use topSR */}
         {(topMMR ?? topSR)?.riders.slice(0, 5).map((rank, idx) => (
            <>
               <Group key={idx}>
                  {idx === 0 && <PositionIcon position='first' />}
                  {idx === 1 && <PositionIcon position='second' />}
                  {idx === 2 && <PositionIcon position='third' />}
                  <Group ml={50}>
                     <Title order={3}>{idx + 1}.</Title>
                     <Title order={5}>
                        <Link href={`/rider/${rank._id}`}>{rank.name}</Link> - {topSR ? rank.SR : rank.MMR}
                     </Title>
                  </Group>
               </Group>
            </>
         ))}
      </Flex>
   )
}
