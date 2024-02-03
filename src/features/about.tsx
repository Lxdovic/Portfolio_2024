'use client'

import React from 'react'
import {StickyScroll} from '@/components/ui/sticky-scroll-reveal'

const content = [
  {
    title: 'Title',
    description: 'description',
  },
  {
    title: 'Title',
    description: 'description',
  },
  {
    title: 'Title',
    description: 'description',
  },
  {
    title: 'Title',
    description: 'description',
  },
]

const About = () => {
  return (
    <div className="h-screen">
      <h2 className="px-80 py-10 pt-32 text-center text-7xl font-bold text-white">
        <span className="font-['chatime'] font-normal text-primary">About</span>{' '}
        me
      </h2>

      <StickyScroll content={content} />
    </div>
  )
}

export default About
