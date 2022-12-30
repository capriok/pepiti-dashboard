import { Flex, Group, ThemeIcon, Title } from '@mantine/core'
import { IconTrophy } from '@tabler/icons'
import Link from 'next/link'
import { WorldRecords } from '../types'

interface PositionIconProps {
   position: 'first' | 'second' | 'third'
}

export const PositionIcon = ({ position }: PositionIconProps) => {
   const handlePosition = () => {
      switch (position) {
         case 'first':
            return { from: 'gold', to: 'yellow' }
         case 'second':
            return { from: 'gray', to: 'white' }
         case 'third':
            return { from: 'brown', to: 'yellow' }
      }
   }

   return (
      <ThemeIcon
         size='lg'
         style={{ position: 'absolute' }}
         variant='gradient'
         gradient={{ from: handlePosition().from, to: handlePosition().to }}
      >
         <IconTrophy />
      </ThemeIcon>
   )
}

export const TopWorldRecords = ({ worldRecords }: { worldRecords: WorldRecords }) => {
   const riderGuids = Object.keys(worldRecords)

   return (
      <Flex direction='column' h='100%' justify='space-around' p='xl'>
         {riderGuids.slice(0, 5).map((guid, idx) => (
            <>
               <Group key={idx}>
                  {idx === 0 && <PositionIcon position='first' />}
                  {idx === 1 && <PositionIcon position='second' />}
                  {idx === 2 && <PositionIcon position='third' />}
                  <Group ml={50}>
                     <Title order={3}>{idx + 1}.</Title>
                     <Title order={5}>
                        <Link href={`/rider/${guid}`}>{worldRecords[guid].name}</Link> - {worldRecords[guid].total}
                     </Title>
                  </Group>
               </Group>
            </>
         ))}
      </Flex>
   )
}
