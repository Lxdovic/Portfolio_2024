'use client'

import {Navbar} from '@/features/navbar'
import Projects from '@/features/projects'
import About from '@/features/about'
// import Home from '@/features/home'
import {Hero} from '@/features/hero'
import {AuroraBackground} from '@/components/aurora-bg'

export default function Landing() {
  return (
    <AuroraBackground>
      <Navbar />
      <Hero />
      {/* <Home /> */}
      <About />
      <Projects />
    </AuroraBackground>
  )
}
