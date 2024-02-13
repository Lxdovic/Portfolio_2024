import React from 'react'
import Sphere from '@/components/sphere'
import AnimatedText from '@/components/animated-text'

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex h-screen border-b">
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
            <AnimatedText>Student &</AnimatedText>
            <AnimatedText delay={0.1}>Half-Time</AnimatedText>
            <AnimatedText
              delay={0.2}
              className="ml-20 text-primary">
              Software
            </AnimatedText>
            <AnimatedText
              delay={0.3}
              className="ml-20">
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
