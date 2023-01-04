'use client'
import { Button } from '@mantine/core'

interface IconButtonProps {
   children: string | React.ReactNode
   onClick?: () => void
}

export const IconButton = ({ children, onClick }: IconButtonProps) => {
   return (
      <>
         <Button
            h={50}
            radius='md'
            // pos='absolute'
            color='green'
            // right={20}
            // top={20}
            onClick={onClick}
            styles={(theme) => ({
               root: {
                  backgroundColor: theme.colors.dark[4],
                  filter: 'drop-shadow(0 4px 5px rgb(0,0,0,0.4))',
                  zIndex: 100,
               },
            })}
         >
            {children}
         </Button>
      </>
   )
}
