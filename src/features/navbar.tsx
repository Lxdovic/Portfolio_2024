'use client'

import * as React from 'react'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {cn} from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {AnimatePresence} from 'framer-motion'
import {projects} from '@/data/projects'
import {isMobile} from 'react-device-detect'
import {Button} from '@/components/ui/button'
import {Icon} from '@iconify/react'
import profilePicture from '@/assets/images/pfp.jpeg'

export function Navbar() {
  const [isHydrated, setIsHydrated] = useState(false)
  const hasWarningBeenDisplayed = React.useRef(false)

  useEffect(() => {
    if (isHydrated && !isMobile && !hasWarningBeenDisplayed.current) {
      hasWarningBeenDisplayed.current = true
    }
  }, [isHydrated])

  if (!isHydrated) return null

  return (
    <AnimatePresence>
      <NavItemsBrowser />
    </AnimatePresence>
  )
}

const NavItemsBrowser = () => {
  return (
    <div
      key="navbar"
      className="fixed top-0 z-50 m-4 flex h-12 w-64 justify-center self-center rounded-full px-4 before:absolute before:h-full before:w-64 before:rounded-full before:border before:border-white/10 before:bg-gray-700/35 before:backdrop-blur-md before:content-['']">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              tabIndex={1}
              href="/#home"
              legacyBehavior
              passHref>
              <NavigationMenuLink className="px-4 py-2 text-xs uppercase">
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem tabIndex={2}>
            <NavigationMenuTrigger className="text-xs uppercase">
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 p-6 md:w-[400px] md:flex-row lg:w-[500px]">
                <li className="w-64">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full select-none flex-col justify-between rounded-md no-underline outline-none"
                      href="/">
                      <Image
                        className="h-20 w-20 rounded-full md:h-32 md:w-32"
                        src={profilePicture}
                        alt="Ludovic Debever"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Ludovic Debever
                        <p className="text-sm leading-tight text-muted-foreground">
                          Software Architect, Fullstack Developer
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <div className="flex w-full flex-col gap-4 md:w-3/5">
                  <p className="flex h-full text-sm text-white/80">
                    {`Hey, I'm Ludovic, a 23-year-old french student passionate about
                code. I am currently studying at Epitech Paris, and working at
                Holis, a SaaS startup based at Station F.`}
                  </p>

                  <p className="flex h-full text-sm text-white/80">
                    {`Let's get in contact, follow me on my socials.`}
                  </p>

                  <div className="flex gap-2 self-end">
                    <Link href="https://github.com/Lxdovic">
                      <Button
                        variant="ghost"
                        className="aspect-square p-1">
                        <Icon
                          icon="mdi:github"
                          height={20}
                        />
                      </Button>
                    </Link>

                    <Link href="https://www.linkedin.com/in/debeverludovic/">
                      <Button
                        variant="ghost"
                        className="aspect-square p-1">
                        <Icon
                          icon="mdi:linkedin"
                          height={20}
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xs uppercase">
              Work
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {projects.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = 'ListItem'
