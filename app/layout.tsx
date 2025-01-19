// app/layout.tsx
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Enlightment Foods',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        {/* Wrap entire app in ClerkProvider */}
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
