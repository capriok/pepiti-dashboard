'use client'
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'
import { Stack, Title } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import { useRef, useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { v0Tracks } from '../../types'
import { TrackCard } from './TrackCard'

export const ServerTracksCarousel = ({ tracks }: { tracks: v0Tracks }) => {
   const TRANSITION_DURATION = 10000
   // const trackNames = Object.keys(records)
   const autoplay = useRef(Autoplay({ delay: TRANSITION_DURATION }))
   const [embla, setEmbla] = useState<Embla | null>(null)
   const matchesMinW = useMediaQuery('(min-width: 800px)')

   useAnimationOffsetEffect(embla, TRANSITION_DURATION)

   return (
      <Stack pb='1rem'>
         <Title order={2}>Server Tracks</Title>
         <Carousel
            getEmblaApi={setEmbla}
            slideSize='70%'
            slideGap='xl'
            loop
            withControls={matchesMinW}
            controlSize={40}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
         >
            {Object.keys(tracks)?.map((track, idx) => (
               <Carousel.Slide key={idx} h={'50%'}>
                  <TrackCard name={track} records={tracks[track]} total_laps={0} />
               </Carousel.Slide>
            ))}
         </Carousel>
      </Stack>
   )
}
