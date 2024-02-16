'use client'

import {Navbar} from '@/features/navbar'
import Projects from '@/features/projects'
import About from '@/features/about'
import Home from '@/features/home'
import {useScroll} from 'framer-motion'

export default function Landing() {
  const {scrollYProgress} = useScroll()

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
