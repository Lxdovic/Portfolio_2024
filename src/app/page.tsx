'use client'

import Sphere from '@/components/sphere'
import {Navbar} from '@/features/navbar'
import Projects from '@/features/projects'
import About from '@/features/about'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />

      <div className="flex h-screen border-b">
        <div className="w-1/5 shrink-0"></div>
        <div className="flex w-4/5 border-l">
          <div
            style={{
              borderWidth: '3px',
              borderLeftStyle: 'solid',
              borderRightStyle: 'none',
              borderImage:
                'linear-gradient(to bottom, #00000000, #7424ff, rgba(0, 0, 0, 0)) 1 100%',
            }}
            className="h-52 self-center"
          />
          <div className="pointer-events-none absolute top-0 z-10 flex h-full items-center p-6">
            <h1 className="flex flex-col gap-2">
              <span className="font-['chatime'] text-5xl font-bold text-primary">
                Software
              </span>
              <span className="text-8xl font-bold uppercase">Engineer</span>
              <span>Ludovic Debever</span>
            </h1>
          </div>

          <Sphere />
        </div>
      </div>

      <About />

      <Projects />
    </main>
  )
}
