'use client'

import {Navbar} from '@/features/navbar'
import Projects from '@/features/projects'
import About from '@/features/about'
// import Home from '@/features/home'
import {Hero} from '@/features/hero'
import {AuroraBackground} from '@/components/aurora-bg'
import {useLoadStore} from '@/store/load'
import {AnimatePresence, motion} from 'framer-motion'
import {GridLoader} from 'react-spinners'

export default function Landing() {
  const {isLoading} = useLoadStore()

  return (
    <AuroraBackground>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed top-0 z-[60] flex h-screen w-screen items-center justify-center bg-background">
            <GridLoader color="#ffffff99" />
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar />
      <Hero />
      {/* <Home /> */}
      <About />
      <Projects />
    </AuroraBackground>
  )
}
