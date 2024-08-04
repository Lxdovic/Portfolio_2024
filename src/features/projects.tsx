'use client'

import React, {useEffect, useRef, useState} from 'react'
import {motion} from 'framer-motion'
import {projects} from '@/data/projects'
import Image from 'next/image'
import {
  CardBodyMobile,
  CardContainerMobile,
  CardItemMobile,
} from '@/components/ui/3d-card-mobile'
import {CardBody, CardContainer, CardItem} from '@/components/ui/3d-card'
import {cn} from '@/lib/utils'
import AnimatedText from '@/components/animated-text'
import {isBrowser, isMobile} from 'react-device-detect'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {useScreenDetector} from '@/lib/useScreenDetector'
import RotatingPhone from '@/components/rotating-phone'
import Link from 'next/link'
import {LinkProps} from 'next/dist/client/link'
import GridPattern from '@/components/magicui/grid-pattern'

const Projects = () => {
  const [isHydrated, setIsHydrated] = useState(true)
  const {isMobile: isMobileWidth} = useScreenDetector()

  useEffect(() => {
    setIsHydrated(false)
  }, [])

  if (isHydrated) return null

  if (isMobile || isMobileWidth) return <ProjectsMobile />
  if (isBrowser) return <ProjectsBrowser />
}

const ProjectsMobile = () => {
  return (
    <section
      id="work"
      className="flex flex-col items-center">
      <h1 className="flex w-[18rem] flex-col py-10 pt-32 font-['AlmarenaDisplayBold'] text-[3rem] font-bold uppercase leading-[3rem] text-white sm:w-[28rem] sm:text-7xl lg:w-[36rem]  lg:text-8xl">
        <AnimatedText className="text-start text-primary">
          Selected
        </AnimatedText>
        <AnimatedText
          delay={0.1}
          className="text-end">
          work
        </AnimatedText>
      </h1>

      <Carousel
        orientation="horizontal"
        className="flex w-full flex-col">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="flex h-[400px] w-full border p-10">
              <Link
                className="flex h-full w-full"
                href={project.href}
                key={index}>
                <CardContainerMobile className="inter-var">
                  <CardBodyMobile className="group/card relative h-full w-full rounded-xl p-6 transition-shadow">
                    <CardItemMobile
                      translateZ="50"
                      className="w-full overflow-hidden font-['AlmarenaDisplayBold'] text-4xl font-bold uppercase text-neutral-600 dark:text-white min-[400px]:text-5xl">
                      <h2>{project.title}</h2>
                    </CardItemMobile>
                    <CardItemMobile
                      translateZ="50"
                      className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
                      <p className="drop-shadow-[0px_0px_4px_#000000ff]">
                        {project.description}
                      </p>
                    </CardItemMobile>
                    <CardItemMobile
                      translateZ="0"
                      className="absolute left-0 top-0 -z-10 h-full w-full">
                      <Image
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="cover h-full w-full rounded-xl object-cover group-hover/card:shadow-xl"
                        alt={project.alt}
                      />
                    </CardItemMobile>
                  </CardBodyMobile>
                </CardContainerMobile>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-10 px-6">
          <CarouselPrevious className="relative left-0 top-0" />
          <CarouselNext className="relative left-0 top-0" />
        </div>
      </Carousel>

      <div className="flex h-32 w-32 items-center justify-center">
        <RotatingPhone width={32} />
      </div>
    </section>
  )
}

const ProjectsBrowser = () => {
  const [smallWidth, setSmallWidth] = useState<number>(200)
  const [bigWidth, setBigWidth] = useState<number>(700)
  const [hydrationLoad, setHydrationLoad] = useState(true)
  const [currentProject, setCurrentProject] = useState<number>(
    Math.floor(projects.length / 2)
  )
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleResize = () => {
    const smallWidth: number = window.innerWidth > 1200 ? 200 : 150
    const bigWidth: number = window.innerWidth > 1200 ? 700 : 500

    setSmallWidth(smallWidth)
    setBigWidth(bigWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', () => {})
  }, [])

  useEffect(() => {
    setHydrationLoad(false)
  }, [])

  if (hydrationLoad) return null

  return (
    <motion.section
      id="work"
      key="work"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 3}}
      className="relative flex h-max min-h-screen flex-col items-center overflow-hidden bg-background pb-40">
      <h1 className="flex flex-col py-10 pt-32 font-['AlmarenaDisplayBold'] text-[3rem] font-bold uppercase leading-[3rem] text-white sm:w-[28rem] sm:text-7xl lg:w-[36rem]  lg:text-8xl">
        <AnimatedText className="text-start text-primary">
          Selected
        </AnimatedText>
        <AnimatedText
          delay={0.1}
          className="text-end">
          work
        </AnimatedText>
      </h1>

      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={'5 5'}
        className={cn(
          '[mask-image:radial-gradient(ellipse_at_center,white,transparent)]'
        )}
      />

      <motion.div className="h-[50vh] min-h-[450px] w-full">
        <div
          className="relative h-full w-full"
          ref={containerRef}>
          {projects.map((project, index) => {
            const width: number =
              currentProject === index ? bigWidth : smallWidth
            const offsetWidth: number = (bigWidth - smallWidth) / 2
            const offsetRightImages: number =
              currentProject < index ? offsetWidth : 0
            const offsetLeftImages: number =
              currentProject > index ? offsetWidth : 0
            const offsetCenterImage: number =
              currentProject === index ? offsetWidth : 0

            const xPos: number =
              window.innerWidth / 2 -
              smallWidth / 2 +
              smallWidth * index -
              smallWidth * currentProject -
              offsetCenterImage +
              offsetRightImages -
              offsetLeftImages

            const isCurrentProject: boolean = currentProject === index

            return (
              <motion.div
                layoutId={project.title}
                key={index + 'project'}
                onClick={() => setCurrentProject(index)}
                className="absolute h-full px-2"
                initial={{
                  y: Math.sin(index - currentProject) * 75,
                  x: xPos,
                  width,
                }}
                whileHover={{
                  filter: !isCurrentProject
                    ? 'brightness(.8) grayscale(.2)'
                    : 'brightness(1) grayscale(0)',
                }}
                animate={{
                  filter: isCurrentProject
                    ? 'brightness(1) grayscale(0)'
                    : 'brightness(.5) grayscale(.5)',
                  y: Math.sin(index - currentProject) * 75,
                  x: xPos,
                  width,
                  zIndex: isCurrentProject ? 40 : 0,
                  transition: {
                    duration: 1,
                    ease: [0.85, 0, 0.25, 1],
                  },
                }}
                exit={{
                  padding: 0,
                  opacity: isCurrentProject ? 1 : 0,
                  zIndex: 40,
                  transition: {
                    duration: isCurrentProject ? 1.5 : 0.4,
                    ease: [0.75, 0, 0.35, 1],
                  },
                }}>
                <ProjectLink
                  disabled={!isCurrentProject}
                  href={project.href}>
                  <CardContainer
                    className="inter-var"
                    rotationStrength={80}>
                    <CardBody
                      className={cn(
                        'group/card relative h-full w-full rounded-xl p-6 transition-shadow',
                        isCurrentProject
                          ? 'hover:shadow-[0px_0px_100px_0px_#7424FF33]'
                          : 'cursor-default'
                      )}>
                      <CardItem
                        translateZ="50"
                        className="w-full overflow-hidden text-5xl font-bold text-neutral-600 dark:text-white">
                        <motion.h2
                          key={'projectTitle' + index}
                          className="z-10 truncate text-clip  font-['AlmarenaDisplayBold'] font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow-xl xl:text-[4.2rem]"
                          initial={{opacity: isCurrentProject ? 0 : 1}}
                          animate={{
                            opacity: isCurrentProject ? 1 : 0,
                            transition: {
                              delay: 0.5,
                            },
                          }}
                          exit={{opacity: 0}}
                          style={{
                            mixBlendMode: 'difference',
                            textShadow: '0px 0px 4px rgba(0,0,0,1)',
                          }}>
                          {project.title}
                        </motion.h2>
                      </CardItem>
                      <CardItem
                        translateZ="50"
                        className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
                        <motion.h2
                          key={'projectDescription' + index}
                          className="text-md z-10 tracking-tight text-white drop-shadow-xl"
                          initial={{opacity: isCurrentProject ? 0 : 1}}
                          animate={{
                            opacity: isCurrentProject ? 1 : 0,
                            transition: {
                              delay: 0.5,
                            },
                          }}
                          style={{
                            mixBlendMode: 'difference',
                            textShadow: '0px 0px 4px rgba(0,0,0,1)',
                          }}>
                          {project.description}
                        </motion.h2>
                      </CardItem>
                      <CardItem
                        translateZ="0"
                        className="absolute left-0 top-0 -z-10 h-full w-full">
                        <Image
                          src={project.image}
                          height="1000"
                          width="1000"
                          className="cover h-full w-full rounded-xl object-cover group-hover/card:shadow-xl"
                          alt={project.alt}
                        />

                        <div className="absolute left-0 top-0 h-full w-full rounded-xl border border-white/20 shadow-[inset_0_-0px_40px_rgba(0,0,0,0.5)]" />
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </ProjectLink>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.section>
  )
}

type ProjectLinkProps = {
  children: React.ReactNode
  disabled: boolean
} & LinkProps

const ProjectLink = ({children, disabled, ...props}: ProjectLinkProps) => {
  if (disabled) return <>{children}</>

  return <Link {...props}>{children}</Link>
}

export default Projects
