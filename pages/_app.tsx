import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans()

export default function App({ Component, pageProps }: AppProps) {
   return (
      <MantineProvider
         withNormalizeCSS
         withGlobalStyles
         theme={{
            colorScheme: 'dark',
            components: {
               Paper: {
                  styles: (theme) => ({
                     root: {
                        borderColor: theme.colors.green[8],
                     },
                  }),
               },
               Carousel: {
                  styles: (theme) => ({
                     indicator: {
                        backgroundColor: theme.colors.green[8],
                     },
                  }),
               },
            },
         }}
      >
         <main className={openSans.className}>
            <Component {...pageProps} />
         </main>
      </MantineProvider>
   )
}
