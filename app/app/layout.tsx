import './globals.css'
import { Web3Provider } from '@/components/web3-provider'
import { SessionProvider } from "next-auth/react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Web3Provider>
            {children}
          </Web3Provider>
        </SessionProvider>
      </body>
    </html>
  )
}
