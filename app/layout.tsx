import RootStyleRegistry from './emotion'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html>
         <head />
         <body>
            <RootStyleRegistry>{children}</RootStyleRegistry>
         </body>
      </html>
   )
}
