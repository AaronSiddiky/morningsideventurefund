import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morningside Venture Fund',
  description: 'Coming soon.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
