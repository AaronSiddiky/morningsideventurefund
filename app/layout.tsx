import './globals.css'
import Navigation from './components/Navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="curved-line-1"></div>
        <div className="curved-line-2"></div>
        <div className="curved-line-3"></div>
        {children}
      </body>
    </html>
  )
} 