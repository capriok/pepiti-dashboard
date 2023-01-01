'use client'

import { Stack } from '@mantine/core'
import RootStyleRegistry from './emotion'

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html>
         <head />
         <body>
            <RootStyleRegistry>
               <Stack bg='dark' justify='center' align='center' mih='100vh'>
                  {children}
               </Stack>
            </RootStyleRegistry>
         </body>
      </html>
   )
}
