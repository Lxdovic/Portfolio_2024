import React from 'react'
import dynamic from 'next/dynamic'
import AnimatedText from '@/components/animated-text'
import {isMobile} from 'react-device-detect'

const Scene = dynamic(
  () => import('@/components/scene/scene').then((mod) => mod.default),
  {ssr: false}
)

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex h-screen w-full border-b">
      {isMobile && (
        <div className="absolute left-1/2 top-1/2 z-10 flex w-max -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 p-4 font-['AlmarenaDisplayBold'] text-[3rem] font-semibold uppercase leading-[2.5rem] md:p-10 md:text-[5rem] md:leading-[4.5rem] lg:items-start lg:text-[6.5rem] lg:leading-[5.5rem]">
          <AnimatedText>Ludovic</AnimatedText>
          <AnimatedText>Debever</AnimatedText>
          <h2 className="text-center text-2xl text-white">
            <AnimatedText>Software Engineer</AnimatedText>
          </h2>
        </div>
      )}

      <Scene />
    </section>
  )
}

export default Home
