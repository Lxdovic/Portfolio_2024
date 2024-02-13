import {motion, MotionProps, useAnimation} from 'framer-motion'
import React, {useEffect} from 'react'
import {cn} from '@/lib/utils'
import {useInView} from 'react-intersection-observer'

type IAnimatedText = MotionProps & {
  children: string
  className?: string
  delay?: number
}

const AnimatedText = ({children, className, delay = 0}: IAnimatedText) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const fragments = children.split('')

  useEffect(() => {
    inView ? controls.start('visible') : controls.start('hidden')
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      className={cn('inline overflow-hidden py-1', className)}>
      {fragments.map((fragment, index) => {
        const variants = {
          visible: {opacity: 1, y: 0, skewX: 0},
          hidden: {
            opacity: 0,
            y: '100%',
            skewX: -40,
            transition: {duration: 0},
          },
        }

        return (
          <motion.span
            className="inline-block whitespace-pre"
            key={index}
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{delay: delay + index * 0.02, duration: 0.3}}>
            {fragment}
          </motion.span>
        )
      })}
    </motion.div>
  )
}

export default AnimatedText
