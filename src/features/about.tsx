'use client'

import React from 'react'
import {Radar} from '@/components/ui/radar'
import {Meteors} from '@/components/ui/meteors'
import {IconContainer} from '@/components/ui/icon-container'

const About = () => {
  return (
    <div className="relative border-b">
      <Meteors
        number={60}
        className="z-0"
      />
      <h2 className="relative z-10 px-80 py-10 pt-32 text-center text-7xl font-bold text-white">
        <span className="font-['chatime'] font-normal text-primary">About</span>{' '}
        me
      </h2>

      <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              delay={0.2}
              text="Web Development"
              icon="streamline:web"
            />
            <IconContainer
              delay={0.4}
              text="Mobile apps"
              icon="streamline:web"
            />
            <IconContainer
              delay={0.3}
              text="Designing"
              icon="streamline:web"
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              text="Maintenence"
              delay={0.5}
              icon="streamline:web"
            />
            <IconContainer
              text="Server management"
              delay={0.8}
              icon="streamline:web"
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              delay={0.6}
              icon="streamline:web"
              text="GitHub Integration"
            />
            <IconContainer
              delay={0.7}
              icon="streamline:web"
              text="CMS Integration"
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
      </div>
    </div>
  )
}

export default About
