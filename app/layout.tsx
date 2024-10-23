import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight:['400', '700'] })

export const metadata: Metadata = {
  title: 'TenjinLabs Landing Page',
  description: 'Your one-stop solution for all things tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}