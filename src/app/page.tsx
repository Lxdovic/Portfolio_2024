'use client'

import {Navbar} from '@/features/navbar'
import Projects from '@/features/projects'
import About from '@/features/about'
// import Home from '@/features/home'
import {Hero} from '@/features/hero'

export default function Landing() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      {/* <Home /> */}
      <About />
      <Projects />
    </main>
  )
}
