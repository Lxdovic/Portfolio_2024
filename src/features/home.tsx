import React from 'react'
import Sphere from '@/components/sphere'
import AnimatedText from '@/components/animated-text'

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex h-screen w-full border-b">
      <div className="hidden w-1/5 shrink-0 lg:flex"></div>
      <div className="flex w-full border-l lg:w-4/5">
        <div className="pointer-events-none absolute left-0 top-0 z-10 flex h-full w-full p-6">
          <h1 className="flex w-full flex-col items-center justify-center gap-2 p-4 font-['AlmarenaDisplayBold'] text-[3rem] font-semibold uppercase leading-[2.5rem] md:p-10 md:text-[5rem] md:leading-[4.5rem] lg:items-start lg:text-[6.5rem] lg:leading-[5.5rem]">
            <AnimatedText>Student &</AnimatedText>
            <AnimatedText delay={0.1}>Part-Time</AnimatedText>
            <AnimatedText
              delay={0.2}
              className="md:ml-20">
              Software
            </AnimatedText>
            <AnimatedText
              delay={0.3}
              className="md:ml-20">
              Engineer
            </AnimatedText>
          </h1>
        </div>

        <Sphere />
      </div>
    </section>
  )
}

export default Home
