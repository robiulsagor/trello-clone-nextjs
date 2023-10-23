import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trello Clone',
  description: 'Cloned by Robiul Islam Sagar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#f2f3f5]'>{children}</body>
    </html>
  )
}
