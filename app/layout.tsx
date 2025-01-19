// app/layout.tsx
import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Enlightment Foods Cost System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  )
}
