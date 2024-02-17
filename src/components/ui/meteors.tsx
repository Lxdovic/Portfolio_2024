import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'

export const Meteors = ({
  number,
  className,
}: {
  number?: number
  className?: string
}) => {
  const [hydrationLoad, setHydrationLoad] = useState(true)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [bounds, setBounds] = useState<DOMRect>()
  const meteors = new Array(number ?? 20).fill(true)

  const checkBounds = () => {
    if (!containerRef.current) return
    setBounds(containerRef.current.getBoundingClientRect())
  }

  useEffect(() => {
    setHydrationLoad(false)

    window.addEventListener('resize', () => checkBounds())
  }, [])

  useLayoutEffect(() => {
    checkBounds()
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute left-0 top-0 h-full w-full overflow-hidden">
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: 2}}}
        className="relative h-full w-full">
        {!hydrationLoad &&
          meteors.map((el, idx) => {
            if (!containerRef.current || !bounds) return null

            const left =
              Math.floor(
                Math.random() * (bounds.width - -bounds.width) + -bounds.width
              ) + 'px'
            const delay = Math.random() * (0.8 - 0.2) + 0.2 + 's'
            const duration = Math.floor(Math.random() * (10 - 2) + 2) + 's'

            return (
              <span
                key={'meteor' + idx}
                className={cn(
                  'absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect',
                  "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
                  className
                )}
                style={{
                  top: 0,
                  left,
                  animationDelay: delay,
                  animationDuration: duration,
                }}></span>
            )
          })}
      </motion.div>
    </div>
  )
}
