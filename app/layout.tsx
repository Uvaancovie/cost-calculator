import { ClerkProvider } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
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
  // Make the component async so we can await
  const { userId } = await auth()  // <-- await the Promise here

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <ClerkProvider>
          <Header />
          <main className="flex-1 bg-gray-50">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  )
}
