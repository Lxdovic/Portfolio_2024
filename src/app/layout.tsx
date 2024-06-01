import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ThemeProvider} from '@/theme/theme-provider'
import React from 'react'
import {cn} from '@/lib/utils'
import {Toaster} from '@/components/ui/sonner'
import Footer from '@/features/footer'
import './globals.css'
import Head from 'next/head'

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
      <Head>
        <title>Ludovic Debever</title>
        <meta charSet={'utf-8'} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="description"
          content={metadata.description as string}
        />
      </Head>
      <body
        className={cn(fontSans.className, 'w-full')}
        suppressHydrationWarning>
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
