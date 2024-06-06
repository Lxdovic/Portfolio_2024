import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ThemeProvider} from '@/theme/theme-provider'
import React from 'react'
import {cn} from '@/lib/utils'
import {Toaster} from '@/components/ui/sonner'
import Footer from '@/features/footer'
import {Analytics} from '@vercel/analytics/react'
import './globals.css'

const fontSans = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Ludovic Debever',
  description: 'Student, Software Engineer, Fullstack Developer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth">
      <body
        className={cn(fontSans.className, 'w-full')}
        suppressHydrationWarning>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster />

        <Footer />
      </body>
    </html>
  )
}
