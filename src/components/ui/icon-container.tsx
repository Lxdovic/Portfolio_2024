'use client'

import React from 'react'

import {Icon} from '@iconify/react'
import {twMerge} from 'tailwind-merge'
import {motion} from 'framer-motion'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'

interface IIconContainerProps {
  icon: string
  text?: string
  delay?: number
  children?: React.ReactNode
}

export const IconContainer = ({
  icon,
  text,
  delay,
  children,
}: IIconContainerProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.2,
            delay: delay ? delay : 0,
          }}
          className={twMerge(
            'relative z-10 flex flex-col items-center justify-center space-y-2'
          )}>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background p-3 transition hover:bg-white/5">
            <Icon
              icon={icon}
              className="h-8 w-8 text-accent-foreground/60"
            />
          </div>

          <div className="hidden rounded-md px-2 py-1  md:block">
            <div className="text-center text-xs font-bold text-accent-foreground/80">
              {text || `?`}
            </div>
          </div>
        </motion.div>
      </PopoverTrigger>

      <PopoverContent className="relative !z-30 w-80">
        {children}
      </PopoverContent>
    </Popover>
  )
}
