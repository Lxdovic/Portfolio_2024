'use client'

import * as React from 'react'
import {useCallback, useEffect, useState} from 'react'
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
import {AnimatePresence, motion} from 'framer-motion'
import {projects} from '@/data/projects'
import {about} from '@/data/about'
import profilePicture from '@/assets/images/pfp.jpeg'

export function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(true)

  const handleDisplayNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsOpen(window.scrollY <= lastScrollY)
      setLastScrollY(window.scrollY)
    }
  }, [lastScrollY])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleDisplayNavbar)

      return () => {
        window.removeEventListener('scroll', handleDisplayNavbar)
      }
    }
  }, [handleDisplayNavbar])

  return <AnimatePresence>{isOpen && <NavItems />}</AnimatePresence>
}

const NavItems = () => {
  return (
    <motion.div
      key="navbar"
      initial={{y: -100, opacity: 0}}
      animate={{y: 0, opacity: 1, transition: {ease: 'easeInOut'}}}
      exit={{opacity: 0}}
      className="fixed top-0 z-50 flex h-12 w-full justify-center">
      <Link
        tabIndex={0}
        href="#home"
        className="absolute left-6 mr-auto flex h-12 items-center font-['AlmarenaDisplayBold'] uppercase">
        Ludovic Debever
      </Link>

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
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/">
                      <Image
                        height="80"
                        width="80"
                        className="rounded-full"
                        src={profilePicture}
                        alt="Ludovic Debever"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Ludovic Debever
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Software Architect, Fullstack Developer
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {about.map((content) => (
                  <ListItem
                    key={content.title}
                    href={`/about#${content.title.toLowerCase()}`}
                    title={content.title}>
                    {content.description}
                  </ListItem>
                ))}
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
    </motion.div>
  )
}

export default NavItems

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
