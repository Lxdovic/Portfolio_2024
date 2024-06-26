'use client'

import React from 'react'
import {twMerge} from 'tailwind-merge'
import {motion} from 'framer-motion'

interface IRadar {
  className?: string
  inView?: boolean
}

export const Radar = ({className, inView}: IRadar) => {
  const circles = new Array(8).fill(1)

  return inView ? (
    <div
      className={twMerge(
        'relative flex h-20 w-20 items-center justify-center rounded-full',
        className
      )}>
      <p className="absolute top-0 z-10 w-max uppercase text-white/60">
        Skills set
      </p>
      <div
        style={{
          transformOrigin: 'right center',
        }}
        className="absolute right-1/2 top-1/2 z-40 flex h-[5px]
        w-[400px] animate-radar-spin items-end justify-center overflow-hidden bg-transparent">
        {/* Radar line that rotates */}
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      {/* concentric circles */}
      {circles.map((circle, idx) => {
        return (
          <Circle
            style={{
              height: `${(idx + 1) * 5}rem`,
              width: `${(idx + 1) * 5}rem`,
              border: `1px solid rgba(71, 85, 105, ${1 - (idx + 1) * 0.1})`,
            }}
            key={`motion-${idx}`}
            idx={idx}
          />
        )
      })}
    </div>
  ) : null
}

{
  /* Creating circles */
}
export const Circle = ({className, children, idx, ...rest}: any) => {
  return (
    <motion.div
      {...rest}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: idx * 0.1,
        duration: 0.2,
      }}
      className={twMerge(
        'absolute inset-0 left-1/2 top-1/2 z-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border !border-border',
        className
      )}></motion.div>
  )
}
