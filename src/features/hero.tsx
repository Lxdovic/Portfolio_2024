import {lazy} from 'react'
// import { useTranslations } from 'next-intl'
import AnimatedShinyText from '@/components/animated-shiny-text'
import {ArrowRightIcon} from 'lucide-react'
import Link from 'next/link'
import {AuroraBackground} from '@/components/aurora-bg'
import {isMobile} from 'react-device-detect'

const KnightScene = isMobile
  ? null
  : lazy(() => import('@/components/scene/knight-scene'))

export const Hero = () => {
  // const t = useTranslations('landing')

  return (
    <section
      className="relative h-screen"
      id="home">
      <div className="container flex size-full flex-col justify-center gap-10">
        {!isMobile && KnightScene !== null && <KnightScene />}

        <div className="flex w-max flex-col self-center text-4xl text-white mix-blend-difference sm:text-7xl md:text-8xl lg:text-9xl">
          <h1 className="flex w-full gap-4">Ludovic Debever</h1>
          <h2 className="w-full font-serif italic tracking-tighter">
            Software architect
          </h2>
        </div>

        <div className="flex w-full flex-col gap-10 self-center text-justify sm:w-[555px] md:w-[740px] lg:w-[985px] lg:text-left">
          <p className="w-full text-xl leading-relaxed tracking-wide text-white mix-blend-difference">
            I&apos;m a student software architect based in Paris. I&apos;m
            passionate about any kind of software development and I love
            learning new things.
          </p>

          <div className="group w-max rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <Link href="/#projects">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>Projects</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 -z-10 h-1/4 w-full bg-gradient-to-b from-transparent via-transparent to-background" />
    </section>
  )
}
