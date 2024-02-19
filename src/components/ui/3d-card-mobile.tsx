'use client'

import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

export const CardContainerMobile = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode
  className?: string
  rotationStrength?: number
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const lastOrientationMove = useRef(performance.now())
  const [orientation, setOrientation] = useState<any>()
  const onDeviceOrientation = (event: DeviceOrientationEvent) => {
    if (performance.now() - lastOrientationMove.current < 50) return

    lastOrientationMove.current = performance.now()

    setOrientation({
      beta: event.beta,
      gamma: event.gamma,
    })
  }

  useLayoutEffect(() => {
    window.addEventListener('deviceorientation', onDeviceOrientation, true)

    return () => {
      window.removeEventListener('deviceorientation', onDeviceOrientation, true)
    }
  }, [])

  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center',
        containerClassName
      )}
      style={{
        perspective: '1000px',
      }}>
      <motion.div
        ref={containerRef}
        className={cn(
          'relative flex h-full w-full items-center justify-center transition-all duration-500 ease-linear-out',
          className
        )}
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: -orientation?.gamma || 0,
          rotateX: orientation?.beta - 45 || 0,
        }}>
        {children}
      </motion.div>
    </div>
  )
}

export const CardBodyMobile = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        '[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]',
        className
      )}>
      {children}
    </div>
  )
}

export const CardItemMobile = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleAnimations = useCallback(() => {
    if (!ref.current) return

    ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
  }, [rotateX, rotateY, rotateZ, translateX, translateY, translateZ])

  useEffect(() => {
    handleAnimations()
  }, [handleAnimations])

  return (
    <Tag
      ref={ref}
      className={cn('w-fit transition duration-200 ease-linear', className)}
      {...rest}>
      {children}
    </Tag>
  )
}
