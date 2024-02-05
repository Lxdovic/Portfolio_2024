'use client'

import React from 'react'
import {StickyScroll} from '@/components/ui/sticky-scroll-reveal'
import {about} from '@/data/about'
import {Meteors} from '@/components/ui/meteors'

const About = () => {
  return (
    <div className="relative h-screen border-b">
      <Meteors
        number={20}
        className="z-0"
      />
      <h2 className="px-80 py-10 pt-32 text-center text-7xl font-bold text-white">
        <span className="font-['chatime'] font-normal text-primary">About</span>{' '}
        me
      </h2>

      <StickyScroll content={about} />
    </div>
  )
}

export default About
