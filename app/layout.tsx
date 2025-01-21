// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // pick whichever weights you need
  variable: '--font-poppins',
})

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
        {/* ClerkProvider for optional Clerk features, but no forced authentication */}
        <ClerkProvider>
          {/* Global header on every page */}
          <Header />
          <main className="flex-1 bg-gray-50">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  )
}
