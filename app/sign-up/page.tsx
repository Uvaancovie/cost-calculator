'use client'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </main>
  )
}
