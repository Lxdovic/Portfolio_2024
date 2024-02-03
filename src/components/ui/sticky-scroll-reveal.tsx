'use client'
import React, {useRef} from 'react'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string
    description: string
  }[]
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const {scrollYProgress} = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index)
      }
    })
  })

  return (
    <motion.div
      className="no-scrollbar relative flex h-[30rem] justify-center overflow-y-auto py-10"
      ref={ref}>
      <div className="div relative flex items-start px-4">
        <div className="max-w-4xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100">
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-2xl text-slate-300">
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  )
}
