'use client'

import React, {useEffect, useRef, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {projects} from '@/data/projects'
import Image from 'next/image'
import {CardBody, CardContainer, CardItem} from '@/components/ui/3d-card'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
// import { MouseContext, TMouseContext } from "../../context/MouseContext";
// import ProjectsIndicators from "../../components/Projects/ProjectsIndicators";
// import CurrentProjectDescription from "../../components/Projects/CurrentProjectDescription";

const Projects = () => {
  const [smallWidth, setSmallWidth] = useState<number>(200)
  const [bigWidth, setBigWidth] = useState<number>(700)
  const [hydrationLoad, setHydrationLoad] = useState(true)
  const [currentProject, setCurrentProject] = useState<number>(
    Math.floor(projects.length / 2)
  )
  const containerRef = useRef<HTMLDivElement | null>(null)

  // const { setMouseContent, setMouseProps, setDisableCursor } =
  //     useContext<TMouseContext>(MouseContext);

  const handleClickProject = (
    index: number,
    project: Record<string, string>
  ) => {
    setCurrentProject(index)

    if (index === currentProject) {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 800)

      handleMouseLeaveProject()
      // return navigate(project.link);
    }

    // setMouseContent(<Icon icon="carbon:view-filled" height={30} />);
    // setDisableCursor(true);
    // setMouseProps({ color: "white", size: 60 });
  }

  const handleMouseEnterProject = (index: number) => {
    if (index === currentProject) {
      // setMouseContent(<Icon icon="carbon:view-filled" height={30} />);
      // setDisableCursor(true);
      // setMouseProps({ color: "white", size: 60 });

      return
    }

    // setMouseContent(
    //     <Icon
    //         icon="ic:twotone-arrow-left"
    //         height={30}
    //         style={{
    //             transform: `rotate(${index > currentProject && 180}deg)`,
    //         }}
    //     />,
    // );
    // setDisableCursor(true);
    // setMouseProps({ color: "white", size: 40 });
  }

  const handleMouseLeaveProject = () => {
    // setMouseContent("");
    // setDisableCursor(false);
    // setMouseProps({ color: "white", size: 10 });
  }

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
    <div
      id="work"
      className="relative flex h-screen flex-col overflow-hidden bg-background">
      <h1 className="px-80 py-10 pt-32 text-center text-7xl font-bold text-white">
        <span className="font-['chatime'] font-normal text-primary">
          Selected
        </span>{' '}
        work
      </h1>

      <motion.div className="h-1/2 w-full">
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
                key={index + 'project'}
                onClick={() => handleClickProject(index, project)}
                onMouseEnter={() => handleMouseEnterProject(index)}
                onMouseLeave={handleMouseLeaveProject}
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
                  transition: {
                    duration: 1,
                    ease: [0.85, 0, 0.25, 1],
                  },
                }}
                exit={{
                  padding: 0,
                  opacity: isCurrentProject ? 1 : 0,
                  zIndex: 100,
                  transition: {
                    duration: isCurrentProject ? 1.5 : 0.4,
                    ease: [0.75, 0, 0.35, 1],
                  },
                }}>
                <CardContainer
                  className="inter-var"
                  rotationStrength={80}>
                  <CardBody
                    className={cn(
                      'group/card relative h-full w-full rounded-xl p-6 transition-shadow',
                      isCurrentProject
                        ? 'hover:shadow-[0px_0px_100px_0px_#7424FF33]'
                        : ''
                    )}>
                    <CardItem
                      translateZ="50"
                      className="w-full overflow-hidden text-5xl font-bold text-neutral-600 dark:text-white">
                      <AnimatePresence>
                        <motion.h2
                          key={'projectTitle' + index}
                          className="z-10 truncate text-clip text-[4.2rem] font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow-xl"
                          initial={{opacity: 0}}
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
                      </AnimatePresence>
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
                      <AnimatePresence>
                        <motion.h2
                          key={'projectTitle' + index}
                          className="text-md z-10 tracking-tight text-white drop-shadow-xl"
                          initial={{opacity: 0}}
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
                          {project.description}
                        </motion.h2>
                      </AnimatePresence>
                    </CardItem>
                    <CardItem
                      translateZ="80"
                      className="absolute bottom-6 right-6">
                      <motion.div
                        initial={{opacity: 0}}
                        animate={{
                          opacity: isCurrentProject ? 1 : 0,
                          transition: {
                            delay: 0.5,
                          },
                        }}>
                        <Button
                          variant="outline"
                          className="border-white/40 bg-black/20">
                          View {'->'}
                        </Button>
                      </motion.div>
                    </CardItem>
                    <CardItem
                      translateZ="0"
                      className="absolute left-0 top-0 -z-10 h-full w-full">
                      <Image
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="cover h-full w-full rounded-xl object-cover group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default Projects
