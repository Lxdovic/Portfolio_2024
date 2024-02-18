'use client'

import {Navbar} from '@/features/navbar'
import Projects from '@/features/projects'
import About from '@/features/about'
import Home from '@/features/home'
import Footer from '@/features/footer'

export default function Landing() {
  return (
    <>
      <main className="flex flex-col">
        <Navbar />
        <Home />
        <About />
        <Projects />
      </main>

      <Footer />
    </>
  )
}
