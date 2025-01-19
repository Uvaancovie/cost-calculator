import { ClerkProvider, auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Enlightment Foods Cost System',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 1. Run server-side auth check
  const { userId } = auth()
  // 2. If no user is signed in, redirect to sign-in
  if (!userId) {
    redirect('/sign-in')
  }

  // 3. If the user is signed in, render the layout normally
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
