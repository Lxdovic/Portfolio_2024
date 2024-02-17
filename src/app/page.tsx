'use client'

import {Navbar} from '@/features/navbar'
import Projects from '@/features/projects'
import About from '@/features/about'
import Home from '@/features/home'

export default function Landing() {
  return (
    <>
      <main className="flex flex-col">
        <Navbar />
        <Home />
        <About />
        <Projects />
      </main>

      {/*<Footer />*/}
    </>
  )
}
