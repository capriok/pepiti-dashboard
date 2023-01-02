'use client'
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'
import { Stack, Title } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import { useRef, useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { TopTrackRecords } from '../../types'
import { TrackCard } from './TrackCard'

export const TracksCarousel = ({ tracks }: { tracks: TopTrackRecords }) => {
   const TRANSITION_DURATION = 10000
   const autoplay = useRef(Autoplay({ delay: TRANSITION_DURATION }))
   const [embla, setEmbla] = useState<Embla | null>(null)
   const matchesMinW = useMediaQuery('(min-width: 800px)')

   useAnimationOffsetEffect(embla, TRANSITION_DURATION)

   return (
      <Stack pb='1rem'>
         <Title order={2} ml='md'>
            Server Track Records
         </Title>
         <Carousel
            getEmblaApi={setEmbla}
            slideSize='70%'
            slideGap='xl'
            maw='99vw'
            loop
            withControls={matchesMinW}
            controlSize={40}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
         >
            {tracks.records?.map((track, idx) => (
               <Carousel.Slide key={idx} mah='40vh'>
                  <TrackCard name={track.name} records={track.records} total_laps={track.total_laps} />
               </Carousel.Slide>
            ))}
         </Carousel>
      </Stack>
   )
}