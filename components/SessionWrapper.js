"use client"
import { SessionProvider } from "next-auth/react"
export default function SessionWrapper({children}) {
  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  )
}
// its a client component so thata we use this in server component