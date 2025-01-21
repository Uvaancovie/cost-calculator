// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
  // Reference poppins.variable so ESLint recognizes it's in use
  const fontClass = poppins.variable

  return (
    <html lang="en" className={fontClass}>
      <body className="min-h-screen flex flex-col bg-white">
        <ClerkProvider>
          <Header />
          <main className="flex-1 bg-gray-50">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  )
}
