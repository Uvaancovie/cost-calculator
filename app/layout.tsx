import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Header from '@/components/Header'

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
      <body className="min-h-screen flex flex-col bg-white">
        <ClerkProvider>
          {/* The global header on every page */}
          <Header />
          <main className="flex-1 bg-gray-50">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  )
}
