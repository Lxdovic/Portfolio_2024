import {Navbar} from '@/features/navbar'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}
