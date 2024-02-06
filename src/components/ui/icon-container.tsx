'use client'
import React from 'react'

import {Icon} from '@iconify/react'
import {twMerge} from 'tailwind-merge'
import {motion} from 'framer-motion'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

export const IconContainer = ({icon, text, delay}: any) => {
  return (
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
      <HoverCard openDelay={100}>
        <HoverCardTrigger>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background p-3 transition hover:bg-white/5">
            <Icon
              icon={icon}
              className="h-8 w-8 text-accent-foreground/60"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="relative !z-30 w-80">
          awdawdawd
        </HoverCardContent>
      </HoverCard>

      <div className="hidden rounded-md px-2 py-1  md:block">
        <div className="text-center text-xs font-bold text-accent-foreground/80">
          {text || `?`}
        </div>
      </div>
    </motion.div>
  )
}
