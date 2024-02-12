'use client'

import Sphere from '@/components/sphere'
import {Navbar} from '@/features/navbar'
import Projects from '@/features/projects'
import About from '@/features/about'
import Footer from '@/features/footer'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />

      <div className="relative flex h-screen border-b">
        <div className="w-1/5 shrink-0"></div>
        <div className="flex w-4/5 border-l">
          {/*<div*/}
          {/*  style={{*/}
          {/*    borderWidth: '3px',*/}
          {/*    borderLeftStyle: 'solid',*/}
          {/*    borderRightStyle: 'none',*/}
          {/*    borderImage:*/}
          {/*      'linear-gradient(to bottom, #00000000, #7424ff, rgba(0, 0, 0, 0)) 1 100%',*/}
          {/*  }}*/}
          {/*  className="h-52 self-center"*/}
          {/*/>*/}
          <div className="pointer-events-none absolute left-0 top-0 z-10 flex h-full p-6">
            <h1 className="flex flex-col justify-center gap-2 p-10 font-['AlmarenaDisplayBold'] text-[6.5rem] font-semibold uppercase leading-[5rem]">
              <span>Student &</span>
              <span>Half-Time</span>
              <span className="indent-20 text-primary">Software</span>
              <span className="indent-20">Engineer</span>
            </h1>
          </div>

          <Sphere />
        </div>
      </div>

      <About />

      <Projects />

      <Footer />
    </main>
  )
}
