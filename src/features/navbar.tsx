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
import {isBrowser, isMobile} from 'react-device-detect'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {Button} from '@/components/ui/button'
import {useRouter} from 'next/navigation'
import {Icon} from '@iconify/react'

export function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(true)

  const handleDisplayNavbar = useCallback(() => {
    if (isMobile) return setIsOpen(true)

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

  if (isMobile)
    return <AnimatePresence>{isOpen && <NavItemsMobile />}</AnimatePresence>
  if (isBrowser)
    return <AnimatePresence>{isOpen && <NavItemsBrowser />}</AnimatePresence>
}

const NavItemsMobile = () => {
  const router = useRouter()

  return (
    <Drawer>
      <DrawerTrigger
        asChild
        className="fixed left-2 top-2 z-50 flex h-12 text-white shadow-none outline-0 ring-0">
        <Button
          variant="ghost"
          className="h-max p-2 outline-0">
          <Icon
            icon="bx:menu-alt-left"
            height={40}
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="z-50">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex justify-between gap-4">
            <Image
              height="70"
              width="70"
              className="rounded-full"
              src={profilePicture}
              alt="Ludovic Debever"
            />
            <div className="flex flex-col items-start justify-center gap-2">
              <DrawerTitle className="text-start">Ludovic Debever</DrawerTitle>
              <DrawerDescription className="text-start">
                Student & Half-time software engineer @Holis
              </DrawerDescription>
            </div>
          </DrawerHeader>
          <div className="p-4 pb-0">
            {`Hey, I'm Ludovic, a 23-year-old french student passionate about
              code. I am currently studying at Epitech Paris, and working at
              Holis, a SaaS startup based at Station F.`}
          </div>

          <DrawerFooter>
            <DrawerClose className="flex flex-col gap-2">
              <div className="flex w-full gap-2 rounded-md border">
                <Button
                  onClick={() => router.push('/#home', {scroll: false})}
                  variant="ghost"
                  className="flex-grow">
                  Home
                </Button>
                <Button
                  onClick={() => router.push('/#about', {scroll: false})}
                  variant="ghost"
                  className="flex-grow">
                  About
                </Button>
                <Button
                  onClick={() => router.push('/#work', {scroll: false})}
                  variant="ghost"
                  className="flex-grow">
                  Work
                </Button>
              </div>
              <Button
                variant="outline"
                className="w-full">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const NavItemsBrowser = () => {
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
