import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'
import { Stack, Title } from '@mantine/core'
import { Track } from '../types'
import Autoplay from 'embla-carousel-autoplay'
import { TrackCard } from './TrackCard'
import { useRef, useState } from 'react'

export const ServerTracksCarousel = ({ tracks }: { tracks: Track[] }) => {
   const TRANSITION_DURATION = 10000
   // const trackNames = Object.keys(records)
   const autoplay = useRef(Autoplay({ delay: TRANSITION_DURATION }))
   const [embla, setEmbla] = useState<Embla | null>(null)

   useAnimationOffsetEffect(embla, TRANSITION_DURATION)

   return (
      <Stack maw='100vw' pb='1rem'>
         <Title order={2}>Server Tracks</Title>
         <Carousel
            getEmblaApi={setEmbla}
            slideSize='70%'
            slideGap='xl'
            height='25vh'
            loop
            controlSize={40}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
         >
            {tracks?.map((track, idx) => (
               <Carousel.Slide key={idx}>
                  <TrackCard name={track.name} records={track.records} total_laps={track.total_laps} />
               </Carousel.Slide>
            ))}
         </Carousel>
      </Stack>
   )
}
